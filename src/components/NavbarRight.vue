<template>
  <nav class="navbar" :style="{width : sideNavState.rightWidth}">
    <div>
            <div class="logo">
        <a href="#" class="nav-link expand-nav" @click="navExpandToggle()">
        <img id='expand-arrow' :src="require('../assets/icons/expand.svg')" 
              :style="{transform: sideNavState.rightNavExpand? 'rotate(0deg)':'rotate(-180deg)'}">
         <span class="link-text logo-text" :style="{left: sideNavState.rightNavExpand? '5rem':'999px'}">Friends</span>

        </a>
      </div>
    </div>

    <smooth-scrollbar>
    <div class="navbar-nav" :style="{height : navHeight }">
        <button class="nav-item" v-for='(streamer,streamer_id) in otvFriends' :key='streamer' :title="streamer_id"
          @contextmenu.prevent="streamerContextEvent($event, streamer_id)" 
          @mousedown.stop.left="watchLivestream($event,streamer['channel_name'],streamer.isLive)">
            <a href="#" class="nav-link">
              <div class="avatar-container">
              <div class="avatar" :style="{backgroundImage: streamer.thumbnailURL === ''? '' : 'url(' + streamer.thumbnailURL + ')'}">
              </div>
                <LiveIcon :streamer='streamer_id'/>
              </div>
              <div class="streamer-details">
                <div class="streamer-who-what">
                    <span class="streamer-name">{{streamer['display_name']}}</span>
                    <span class="streamer-game">{{streamer['game_name']}}</span>
                </div>
                <HeartIcon :streamer='streamer["channel_name"]'/>
              </div>        
            </a>
        </button>


    </div>
    </smooth-scrollbar>
  </nav>
</template>

<script>
import {otvFriends} from '../data/streamers'
import {sideNavState, twitchPlayer} from '../store/state'
import {streamerContextEvent} from '../scripts/handleEvents'
import LiveIcon from './LiveIcon'
import HeartIcon from './HeartIcon'


export default {
  components : {LiveIcon, HeartIcon},
  setup(){
    
    function navExpandToggle(){
      sideNavState.value.rightNavExpand =  !sideNavState.value.rightNavExpand;
        sideNavState.value.rightWidth = sideNavState.value.rightNavExpand ? 
                                          sideNavState.value.rightOpenWidth : sideNavState.value.rightCloseWidth
    }

    function watchLivestream(e,streamer,isLive){
      console.log(e.target.className)
      if(e.target.className != 'heart-click'){
        twitchPlayer.value.channel = streamer
      }
    }

    return {
      otvFriends,
      sideNavState,
      navExpandToggle,
      streamerContextEvent,
      watchLivestream,
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
  right : 0;
  background-color: var(--bg-primary);
  transition: width 150ms ease;
  overflow: scroll;
  overflow : hidden;

  top : 3rem;
  height: calc(100vh - 3rem);
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 1rem;
}

.nav-item {
  width: 100%;
  font-size : 14px;
}


.nav-link {
  display: flex;
  align-items: center;
  height: 3rem;
  color: var(--text-primary);
  text-decoration: none;
  /* filter: grayscale(100%) opacity(0.7); */
  transition: var(--transition-speed);
  border-bottom: 1px solid #23232e;
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

/* Large screens */
@media only screen and (min-width: 600px) {
  // .navbar {
    // top: 0;
    // width: 5rem;
    // height: 100vh;
  // }

  /* .navbar:hover {
    width: 16rem;
  } */

  .navbar:hover .link-text {
    display: inline;
  }

  /* .navbar:hover .logo svg
  {
    margin-left: 11rem;
  } */

  /* .navbar:hover .logo-text
  {
    left: 0px;
  } */
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
}


.streamer-details{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.streamer-who-what{
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  text-align: start;
}



.expand-nav{
  height: 4rem;
}

.avatar-container{
  margin-left: 0.5rem;
  
  .avatar{
      width: 2rem;
      height: 2rem;
      margin: 5% auto;
      border-radius: 50%;
      background-size: cover;
      border: 1px solid rgb(35, 35, 46);
  }
}

#expand-arrow{
  width: 1.5rem;
  min-width: .5rem;
  margin: 0 1rem;

  transform: rotate(0deg);
  transition: var(--transition-speed);
}

button{
  align-items: center;
  border: none;
  padding: 0;
  color: #fff;
  background-color: #23232e;
}
</style>