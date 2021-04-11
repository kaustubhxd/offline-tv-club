<template>
    <div class="fb-player">
        <!-- <div class="fb-video" :data-href="`https://www.facebook.com/${channel}/live`"  data-show-text="true"></div> -->
        <iframe :src="`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/${channel}/live&show_text=false`" 
        style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
</template>

<script>
export default {
    props : ['channel'],
    setup(props){
        const channel = props.channel
        return {
            channel,
        }
    }
}
</script>

<style scoped>
/* https://www.ostraining.com/blog/coding/responsive-facebook-videos/ */
.fb-player {
    overflow:hidden;
    /* padding-bottom:56.25%; */
    position:inherit;
    /* height:0; */
}

.fb-player iframe {
    left:0;
    top:0;
    max-height:calc(100vh - 5rem);
    height : 40vw;
    width:100%;
}
</style>