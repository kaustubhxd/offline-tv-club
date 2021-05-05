<template>
  <a href="#" class="glitch" 
    :class="{'glitch-once' : glitchLogoOnce}"
    @animationend = "handleAnimationEnd()"
    @mouseup.left='logoClicked()'>オフラインテレビ</a>
</template>

<script>
// https://codepen.io/DevchamploO/pen/QBWdqd  
import {glitchLogoOnce} from '../store/state'
import {twitchPlayer,ytPlayer} from '../store/state'
import {pullUpLivestream} from '../scripts/handleEvents'


export default {
  setup(){


    function logoClicked(){
      console.log('logo clicked')
      twitchPlayer.value.channel = ''
      // ytPlayer.value.channel = 'UCWxlUwW9BgGISaakjGM37aw'
      pullUpLivestream('facebook','disguisedtoast')
    }

    function handleAnimationEnd(){
      console.log('animation ended')
      if(glitchLogoOnce.value === true){
        glitchLogoOnce.value = false
      }
    } 

    return {
      glitchLogoOnce,
      logoClicked,
      handleAnimationEnd
    }
  }
}
</script>
<style scoped>

  .glitch{

    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    font-size  : 20px;
    color: var(--text-secondary);
    text-decoration:none;
    margin: 5px;
    position: relative;
  }


  .glitch:before,
  .glitch:after{
    content: 'オフラインテレビ';
    opacity: 0.8;
    position: absolute;
    top:0;
    left:0;
  }

  .glitch:before{
    color: #0ff;
    z-index: -1;
  }
  .glitch:after{
    color: #f0f;
    z-index: -2;
  }

  .glitch:hover:before {
	  animation: glitch .5s cubic-bezier(.25, .46, .45, .94) both
  } 

  .glitch:hover:after {
    font-family: 'Open Sans';
    font-weight: 300;
  }

.glitch-once::before, .glitch-once::after {
	animation: glitch .5s cubic-bezier(.25, .46, .45, .94) both;
}

@media only screen and (max-width: 600px) {
  a{
    font-size : 0.9rem;
  }
  .nav__links li {
    padding: 0 5px;
  }

  header{
    padding-right: 0;
  }

  .glitch {
    font-size : 1.1rem;
    display: block ruby;
  }

}

</style>