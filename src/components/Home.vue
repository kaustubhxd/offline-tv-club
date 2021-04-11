<template>
    <div class="container" ref='homeContainer'>
        <Blob v-if="!isLoggedIn"/>
        <ProfileCard/>
        <!-- {{streamers}} -->
        <div class="twitch-play">
            <LiveStream/>
        </div>
    </div>
    
</template>

<script>
import {refreshStreams} from '../scripts/twitch'
import {onBeforeUnmount, onMounted, ref } from 'vue'
import {streamers} from '../data/streamers'
import Blob from '../components/Blob'
import {isLoggedIn,homeState} from '../store/state'
import ProfileCard from './ProfileCard'
import LiveStream from './LiveStream'


export default {
    components: {Blob,ProfileCard,LiveStream},
    setup(){
        const homeContainer = ref(null)
        var resizeObserver;

        function reportHomeResize(){
            console.log(homeContainer.value.clientWidth)
            homeState.value.width   = homeContainer.value.clientWidth
            homeState.value.height  = homeContainer.value.clientHeight
        }

        onMounted(() => {
            refreshStreams()
            resizeObserver = new ResizeObserver(reportHomeResize)
            resizeObserver.observe(homeContainer.value)
            // resizeObserver.disconnect()

        })

        onBeforeUnmount(() =>{
            if(resizeObserver){
                resizeObserver.disconnect()
            }
            console.log('docker unmounted')
        })
        

        return{
            streamers,
            isLoggedIn,
            homeContainer
        }
    }
}
</script>

<style lang='scss'>
.container{
    width: 100%;
    padding     : 1rem;
    transition  : margin 150ms ease 0s;

    position: relative;
    top: 3rem;
    height: calc(100vh - 3rem);
}
</style>

