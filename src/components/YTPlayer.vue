<template>
    <div class="ytplayer">
     <iframe id='player' :src="`https://www.youtube.com/embed/live_stream?channel=${channel}`"  frameborder="0" allowfullscreen></iframe>
         <div id="ytchat">
    <iframe :src="`https://www.youtube.com/live_chat?v=5qap5aO4i9A&embed_domain=` + hostname" frameborder="0"></iframe>
         </div>
    </div>
</template>

<script>
export default {
    props : ['channel'],
    setup(props){
        const channel = props.channel

        return {
            channel,
            hostname : window.location.hostname
        }
    }
}
</script>

<style scoped>
.ytplayer{
    display: flex;
}

#player {
    height: calc(100vh - 5rem);
    /* width: 65%; */
    flex:69;
}

#ytchat{
    flex: 31;    
    height: calc(100vh - 5rem);
}

iframe{
    width: 100%;
    height: 100%;
}
</style>