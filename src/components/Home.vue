<template>
    <div class="container">
        <h1>Hello Hello</h1>
        <button @click="authorizePublic">Authorize</button>
                <button @click="getStreamInfo">Get Pokimane</button>
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
    padding     : 1rem;
}


</style>

