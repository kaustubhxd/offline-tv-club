<template>

    <div class="container" >
        <Blob v-if="!isLoggedIn"/>
        <ProfileCard/>
        <!-- {{streamers}} -->
    </div>
    
</template>

<script>
import {refreshStreams} from '../scripts/twitch'
import { onMounted } from 'vue'
import {streamers} from '../data/streamers'
import {sideNavState} from '../store/state'
import Blob from '../components/Blob'
import {isLoggedIn} from '../store/state'
import ProfileCard from './ProfileCard'

export default {
    components: {Blob,ProfileCard},
    setup(){

        onMounted(() => {
            refreshStreams()
        })

        return{
            streamers,
            sideNavState,
            isLoggedIn
        }
    }
}
</script>

<style lang='scss'>
.container{
    padding     : 1rem;
    transition  : margin 150ms ease 0s;
}
</style>

