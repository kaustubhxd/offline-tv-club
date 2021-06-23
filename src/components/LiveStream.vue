<template>
  <VueTwitchPlayer v-if="twitchPlayer.channel != ''"
    :channel="twitchPlayer.channel"
  ></VueTwitchPlayer>
  <YTPlayer v-if="ytPlayer.channel != ''"
    :channel="ytPlayer.channel"
  ></YTPlayer>
  <!-- <FBPlayer v-if="fbPlayer.channel != ''"
    :channel="fbPlayer.channel"
    ></FBPlayer> -->
</template>

<script>
import VueTwitchPlayer from './TwitchPlayer';
import YTPlayer from './YTPlayer'
import FBPlayer from './FBPlayer'
import {twitchPlayer,ytPlayer,fbPlayer} from '../store/state'

export default {
    components: {VueTwitchPlayer, YTPlayer,FBPlayer},
    data(){
        return {
            twitchPlayer,
            ytPlayer,
            fbPlayer
        }
    }
}
</script>

<style>

</style>