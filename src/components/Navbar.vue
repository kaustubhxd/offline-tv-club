<template>
  <nav class="navbar" :style="{width : sideNavState.leftWidth}">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="#" class="nav-link expand-nav" @click="navExpandToggle()">
          <span class="link-text logo-text" :style="{left: sideNavState.leftNavExpand? '0px':'-999px'}">Members</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            :style="{marginLeft : sideNavState.leftNavExpand? '12rem':'1.5rem', transform: sideNavState.leftNavExpand? 'rotate(-180deg)':'rotate(0deg)'}"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

        <li class="nav-item" v-for='(streamer,streamer_id) in streamers' :key='streamer' @contextmenu.prevent="streamerContextEvent($event, streamer_id)" :title="streamer_id">
          <a href="#" class="nav-link">
            <div class="avatar-container">
              <img class="streamer-icon" :src="require('../assets/avatars/' + streamer['avatar_name'])" :style="{filter: streamer.isLive? 'opacity(1)' : 'opacity(0.5)'}">
              <LiveIcon :streamer='streamer_id'/>
            </div>
            <div class="streamer-details">
              <span class="streamer-name">{{streamer['display_name']}}</span>
              <span class="streamer-game">{{streamer['game_name']}}</span>
            </div>        
          </a>
        </li>
    </ul>
  </nav>
</template>

<script>
import {streamers} from '../data/streamers'
import {sideNavState} from '../store/state'
import LiveIcon from './LiveIcon'
import {streamerContextEvent} from '../scripts/handleEvents'

export default {
  components : {LiveIcon},
  setup(){

    function navExpandToggle(){
      sideNavState.value.leftNavExpand =  !sideNavState.value.leftNavExpand;
        sideNavState.value.leftWidth = sideNavState.value.leftNavExpand ? 
                                          sideNavState.value.leftOpenWidth : sideNavState.value.leftCloseWidth
    }

    return {
      streamers,
      sideNavState,
      streamerContextEvent,
      navExpandToggle
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
}

.navbar-nav {
  width : 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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

.nav-link svg {
  width: 1.5rem;
  min-width: .5rem;
  margin: 0 1.5rem;
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
  margin-bottom: 10px;
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-size: 1.5rem;
  /* letter-spacing: 0.3ch; */
  width: 100%;
}

.logo svg {
  transform: rotate(0deg);
  transition: var(--transition-speed);
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
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }


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

// .member-streams{
//   overflow-y: auto;
//   overflow-x: hidden  ;
// }
</style>