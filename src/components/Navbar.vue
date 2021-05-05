<template>
  <nav class="navbar" :style="{width : sideNavState.leftWidth}">
    <div>
      <div class="logo">
        <a href="#" class="nav-link expand-nav" @click="navExpandToggle()">
          <span class="link-text logo-text" :style="{left: sideNavState.leftNavExpand? '0px':'-999px'}">Members</span>
          <img id='expand-arrow' :src="require('../assets/icons/expand.svg')" 
              :style="{marginLeft : sideNavState.leftNavExpand? '12rem':'1.5rem', transform: sideNavState.leftNavExpand? 'rotate(-180deg)':'rotate(0deg)'}">
        </a>
      </div>
    </div>

    <smooth-scrollbar>
      <div class="navbar-nav"  :style="{height : navHeight }">
          <button class="nav-item" v-for='(streamer,streamer_id) in otvCore' :key='streamer' 
            :title="streamer_id"
            @contextmenu.prevent="" 
            @mouseup.stop="openProfileCard($event, streamer_id)" 
          >
            <a href="#" class="nav-link">
              <div class="avatar-container">
                <img class="streamer-icon" :src="require('../assets/avatars/' + streamer['avatar_name'])" >
                <LiveIcon :streamer='streamer_id'/>
              </div>
              <div class="streamer-details">
                <span class="streamer-name">{{streamer['display_name']}}</span>
                <span class="streamer-game">{{streamer['game_name']}}</span>
              </div>        
            </a>
          </button>
      </div>
    </smooth-scrollbar>

  </nav>
</template>

<script>
import {otvCore} from '../data/streamers'
import {sideNavState} from '../store/state'
import LiveIcon from './LiveIcon'
import {streamerContextEvent,pullUpLivestream} from '../scripts/handleEvents'

export default {
  components : {LiveIcon},
  setup(){

    function navExpandToggle(){
      sideNavState.value.leftNavExpand =  !sideNavState.value.leftNavExpand;
        sideNavState.value.leftWidth = sideNavState.value.leftNavExpand ? 
                                          sideNavState.value.leftOpenWidth : sideNavState.value.leftCloseWidth
    }

    function watchLivestream(e,streamer){
      console.log(e.target.className)
        pullUpLivestream('twitch',streamer)
    }

    function openProfileCard(e,streamer_id){
      if(e.target.className != 'heart-click'){
        streamerContextEvent(e, streamer_id,'left')
      }
    }

    return {
      otvCore,
      sideNavState,
      streamerContextEvent,
      navExpandToggle,
      watchLivestream,
      openProfileCard,
      navHeight : window.innerHeight - 50
    }
  }
}
</script>

<style lang='scss' scoped>

body {
  color: black;
  background-color: white;
  margin: 0;
  padding: 0;
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #6649b8;
}

.navbar {
  position: relative;
  flex-shrink: 0;
  // left : 0;
  background-color: var(--bg-primary);
  transition: width 150ms ease;
  overflow: scroll;
  overflow : hidden;
  width: 5rem;

  top : 3rem;
  height: calc(100vh - 3rem);
}

.navbar-nav {
  width : 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: none;
  overflow-y: auto;
  padding-bottom: 5rem;

}

.nav-item {
  width: 100%;
}


.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  /* filter: grayscale(100%) opacity(0.7); */
  transition: var(--transition-speed);
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--text-secondary);
}

.link-text {
  display: none;
  margin-left: 1rem;
}

.fa-primary {
  color: #ff7eee;
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
}

.logo {
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-size: 1.5rem;
  /* letter-spacing: 0.3ch; */
  width: 100%;
}

.logo-text
{
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
}

/* .navbar:hover .logo svg {
  transform: rotate(-180deg);
} */

.streamer-details span{
  font-size: 16px;
}

/* Large screens */
@media only screen and (min-width: 600px) {
  // .navbar {
    // top: 0;
    // width: 5rem;
    // height: auto;
  // }


  .navbar:hover .link-text {
    display: inline;
  }

}

.dark {
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
}

.light {
  --text-primary: #1f1f1f;
  --text-secondary: #000000;
  --bg-primary: #ffffff;
  --bg-secondary: #e4e4e4;
}

.solar {
  --text-primary: #576e75;
  --text-secondary: #35535c;
  --bg-primary: #fdf6e3;
  --bg-secondary: #f5e5b8;
}

.theme-icon {
  display: none;
}

.dark #darkIcon {
  display: block;
}

.light #lightIcon {
  display: block;
}

.solar #solarIcon {
  display: block;
}

.streamer-icon{
  width       : 4rem;   
  margin-left : 5px;
  transform: scaleX(-1);
}

.streamer-details{
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}

.expand-nav{
  height: 4rem;
}

.streamer-game{
  font-family: 'Open Sans';
  font-weight: 300;
}

.avatar-container{
  position: relative;

  .streamer-icon{
    display: block;
  }
}

#expand-arrow{
  width: 1.5rem;
  min-width: .5rem;
  margin: 0 1rem;

  transform: rotate(0deg);
  transition: var(--transition-speed);

  &:hover{
      transform: rotate(20deg);
  }
}
</style>