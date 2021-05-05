<template>
    <div class="chest">
        <div class="heart-click" @click="toggleAnimation()" ></div>
        <div class="Heart" :class="{'animate' : isFollowed}" ></div>
  </div>
</template>

<script>
// https://codepen.io/rahz7/pen/omoWGP
import { computed, ref } from '@vue/runtime-core';
import {otvFriends,followedStreamers} from '../data/streamers'

export default {
    props: ['streamer'],
    data(props){
        const isFollowed = computed(() => otvFriends.value[props.streamer].isFollowed)

        function toggleAnimation(){
            otvFriends.value[props.streamer].isFollowed = !otvFriends.value[props.streamer].isFollowed
            if(otvFriends.value[props.streamer].isFollowed){
                followedStreamers.value.push(props.streamer)
            }else{
                followedStreamers.value = followedStreamers.value.filter(element => element !== props.streamer)
            }

            console.log(followedStreamers.value)

            localStorage.setItem("FOLLOWED", JSON.stringify(followedStreamers.value))

            console.log(`${props.streamer} = ${otvFriends.value[props.streamer].isFollowed}`)
        }

        return {
            isFollowed,
            toggleAnimation
        }
    }
}
</script>

<style>
/* Parts are from twitter.com */

.chest {
  width: 15px;
  position: relative;
  margin-right: 10px;    
}
 
.Heart,.heart-click {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.heart-click   {
    z-index: 10;
    height: 20px;
    width: 20px;
    left: -50%;
    top: -7px;
}

.Heart {
    /* padding-top: 2em; */
    filter: hue-rotate(715deg) saturate(90%);
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/66955/web_heart_animation.png');
    background-repeat: no-repeat;
    background-size: 2900%;
    background-position: left;
    opacity: 60%;   
    height: 5px;
    width: 10px;
    cursor: pointer;
    transform: scale(5);
}

.heart-click:hover + .Heart{
    opacity: 100%;   
}

.animate {
    opacity : 100%;
    animation: heart-burst .8s steps(28) forwards;
}

@keyframes heart-burst {
	0% {
		background-position: left
	}
	100% {
		background-position: right
	}
}
</style>