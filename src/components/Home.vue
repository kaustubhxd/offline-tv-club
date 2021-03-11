<template>
    <div class="container">
        <h1>Hello Hello</h1>
        <button @click="authorizePublic">Authorize</button>
                <button @click="getStreamInfo">Refresh</button>
        <p>{{streamers}}</p>
        <!-- <ImplicitAuth/> -->
    </div>
</template>

<script>
import ImplicitAuth from './ImplicitAuth'
import {authorizePublic, parseAccessToken,getStreamInfo} from '../scripts/twitch_implicit_auth'
import { onMounted } from 'vue'
import {streamers} from '../data/streamers'


export default {
    components: {ImplicitAuth},
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
            streamers
        }
    }
}
</script>

<style lang='scss'>
.container{
    margin-left : 5rem;
    margin-right: 5rem;
    padding     : 1rem;
}


</style>

