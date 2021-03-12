<template>
    <div class="container" 
      :style="{ marginLeft : sideNavState.leftNavExpand ? '14rem':'5rem',
                marginRight : sideNavState.rightNavExpand ? '14rem':'5rem'}">
<!-- 
        <div id='content'>
                <h1>Hello Hello</h1>
                <button @click="authorizePublic">Authorize</button>
                        <button @click="getStreamInfo">Refresh</button>
                <p>{{streamers}}</p>
                <ImplicitAuth/>
        </div> -->
        <Blob/>
    </div>
    
</template>

<script>
import ImplicitAuth from './ImplicitAuth'
import {authorizePublic, parseAccessToken,getStreamInfo} from '../scripts/twitch_implicit_auth'
import { onMounted } from 'vue'
import {streamers} from '../data/streamers'
import {sideNavState} from '../store/state'
import Blob from '../components/Blob'

export default {
    components: {ImplicitAuth,Blob},
    setup(){

        onMounted(() => {
            parseAccessToken()
            getStreamInfo()
            setInterval(()=> {
                console.log('refreshing data..')
                getStreamInfo()
            },30000)
        })

        return{
            authorizePublic,
            getStreamInfo,
            streamers,
            sideNavState
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

