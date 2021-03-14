<template>
    <div class="container" 
      :style="{ marginLeft : sideNavState.leftNavExpand ? '14rem':'5rem',
                marginRight : sideNavState.rightNavExpand ? '14rem':'5rem'}">
        <Blob v-if="!isLoggedIn"/>
        <ProfileCard/>
    </div>
    
</template>

<script>
import {refreshStreams} from '../scripts/twitch_implicit_auth'
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

