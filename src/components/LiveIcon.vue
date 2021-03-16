<template>
    <!-- This one from: https://codepen.io/eereeska/pen/gOPdBZg -->
    <div class="is-live" v-show="stream.isLive"></div>
</template>

<script>
import {streamers} from '../data/streamers'

export default {
    props : ['streamer'],
    setup(props){
        // console.log(props.streamer)
        const streamer = props.streamer
        const stream = streamers.value[streamer]

        return {
            stream
        }
    }
}
</script>

<style lang='scss' scoped>
 .is-live{
    position: relative; 
    bottom:10px; 
    left : 95%;
    width: 5px;
    height: 5px;

    &:before {
      content: "";
      position: relative;
      display: block;
      width: 250%;
      height: 250%;
      box-sizing: border-box;
      margin-left: -75%;
      margin-top: -75%;
      border-radius: 45px;
      background-color: #75daad;
      animation: live-pulse 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }

    // &:after {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   display: block;
    //   width: 100%;
    //   height: 100%;
    //   background-color: #75daad;
    //   border-radius: 50px;
    //   animation: live-circle 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
    // }
  }
</style>