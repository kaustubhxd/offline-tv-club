<template>
  <VueTwitchPlayer v-if="twitchPlayer.channel != '' "
    :channel="twitchPlayer.channel"
  ></VueTwitchPlayer>
</template>

<script>
import VueTwitchPlayer from './TwitchPlayer';
import {twitchPlayer} from '../store/state'

export default {
    components: {VueTwitchPlayer},
    data(){
        return {
            twitchPlayer
        }
    }
}
</script>

<style>

</style>