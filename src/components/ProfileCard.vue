<template>
    <div class="context-container" ancestor="card" :style="{left: profileCard.left, right:profileCard.right, top: profileCard.top, display : profileCard.display}">
        <div class="top-about" :style="{backgroundColor : avatarDominantColor, backgroundImage : 'url(' + profileCard.backgroundURL + ')'}">
            <div class="status" ancestor="card">
                <div class="avatar" ancestor="card" :style="{backgroundImage: profileCard.avatar == ''? '' : 'url(' + profileCard.avatar + ')'}"></div>
                <div class="name" ancestor="card" :title="profileCard.streamer">{{ profileCard.streamer }}</div>
                <div class="title" ancestor="card" :title="profileCard.title">{{ profileCard.title }}</div>
            </div>
             <span class="activity" ancestor="card" v-show="profileCard.isLive">
                <div class="activity-image" ancestor="card" :style="{backgroundImage: profileCard.activityTitle === '' ?  `url('https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-128x128.jpg')`  : 'url(' + profileCard.activityImage + ')'}"></div> 
                    <div class='activity-details' ancestor="card">
                        <div class="activity-name" ancestor="card" :title='profileCard.activityTitle === "" ? "Just Chatting" : profileCard.activityTitle'>{{ profileCard.activityTitle === "" ? "Just Chatting?" : profileCard.activityTitle }}</div>
                        <div class="activity-how-many">
                            <div class="activity-time" ancestor="card" :title='profileCard.activityTime'>{{ profileCard.activityTime }}</div>
                            <div class="activity-viewers" ancestor="card" :title='profileCard.activityViewersRaw' >👁️{{ profileCard.activityViewers }}</div>
                        </div>
                </div>
            </span>
        </div>

        <div class="bottom-about" ancestor="card" >
                <div class='streamer-links' ancestor="card" >
                    <div class="social-links" ancestor="card" v-if="socials">
                        <div class="social-item" v-for="(handle, website, index) in socials" v-bind:key="index"
                          @click="visitSocialLink(website,handle)">
                            <img class="one" ancestor='card' :title='website.charAt(0).toUpperCase() + website.substring(1)'
                                :src="require('../assets/icons/socials/' + website + '.svg')">
                        </div>
                    </div>
                    <button id='watch-button' ancestor="card" v-if="profileCard.isLive"
                    @mousedown.stop.left="watchLivestream(profileCard.streamer)">
                            Watch Stream
                    </button>
                </div>
        </div>
    </div>
</template>

<script>
import {profileCard,sideNavState} from '../store/state'
import {pullUpLivestream} from '../scripts/handleEvents'
import {streamers} from '../data/streamers'
import { ref, watch } from '@vue/runtime-core'
import analyze from 'rgbaster'

export default {
    setup(){
        let socials = ref('')
        let avatarDominantColor = ref('rgb(255,255,255)')

        function watchLivestream(streamer){
            pullUpLivestream('twitch',streamer)
            profileCard.value.display = 'none'
        }


        function visitSocialLink(website,handle){
            console.log(website,handle)
            if (website === 'twitch'){
                window.open('https://www.twitch.tv/' + handle, '_blank').focus();
            }else if (website === 'youtube'){
                window.open('https://www.youtube.com/channel/' + handle, '_blank').focus();
            }else if (website === 'instagram'){
                window.open('https://www.instagram.com/' + handle, '_blank').focus();
            }else if (website === 'twitter'){
                window.open('https://twitter.com/' + handle, '_blank').focus();
            }else if (website === 'reddit'){
                window.open('https://reddit.com/r/' + handle, '_blank').focus();
            }else if (website === 'spotify'){
                window.open('https://open.spotify.com/' + handle, '_blank').focus();
            }else if (website === 'discord'){
                window.open('https://discord.com/invite/' + handle, '_blank').focus();
            }else if (website === 'facebook'){
                window.open('https://www.facebook.com/' + handle, '_blank').focus();
            }else if (website === 'tumblr'){
                window.open('https://' + handle +'.tumblr.com/', '_blank').focus();
            }else if (website === 'medium'){
                window.open('https://medium.com/' + handle, '_blank').focus();
            }
        }

        function getDominantColor(imgPath){
            try{
                analyze(imgPath,{ ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ] })
                    .then(palette => {
                        console.log(palette[2].color)
                        avatarDominantColor.value = palette[2].color
                })
            }catch(err){
                console.log('Caught RGBaster Error: ' + err.message)
            }
        }

        // CALLED WHEN ProfileCard is displayed or dismissed
        watch(() => profileCard.value.display, (present, _) => {
            if (present == 'block'){

                // fetch dominant color from avatar
                avatarDominantColor.value = 'rgb(255,255,255)' // reset color
                getDominantColor(profileCard.value.avatar)

                // fetch social media links
                socials.value = streamers.value[profileCard.value.streamerKey].socials            
            }

        });


        return{
            profileCard,
            sideNavState,
            watchLivestream,
            socials,
            visitSocialLink,
            avatarDominantColor
        }
    }
}
</script>

<style lang='scss' scoped>

    .context-container{
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: #23232e;
        width: 17rem;
        // padding-bottom: 6rem;
        border-radius: 5px;
        overflow: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: 1px solid #652f3e;        
        box-shadow: 1px 1px 15px -3px #878787;
        // transition: left 150ms ease;
        // transition: transform 3s ease-out,-webkit-transform 3s ease-out;
        // transform: translateX(0px);

        &:focus{
            animation: card-slide-down .3s ease-out;
        }

        .top-about{
            background-size: contain;
            transition: background-color 0.4s ease-in-out;

            .status{
                display: flex;
                flex-direction: column;
                width: 100%;
                // height: 45%;
                overflow: clip;
                background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255, 255, 255,1));

                .avatar{
                    width: 5rem;
                    height: 5rem;
                    margin: 5% auto;
                    border-radius: 50%;
                    background-size: cover;
                    border: 1px solid rgb(35, 35, 46);
                }

                .name{
                    margin: 0 auto;
                    margin-bottom: 2%;
                    font-family: 'Open Sans','sans serif';
                    font-weight: 400;
                    font-size: 14px;
                }

                .title{
                    font-family: 'Open Sans','sans serif';
                    font-weight: 400;
                    margin: 5px 10px;
                    text-align: center;
                    font-size: 13px;
                }
            }

            .activity{
                font-family: 'Open Sans','sans serif';
                font-weight: 400;
                width: 100%;
                display: flex;
                flex-direction: row;
                background-color: white;
                padding: 10px;

                .activity-image{
                    width:  4rem;
                    height: 4rem;
                    border-radius: 7px;
                    background-size: contain;

                    flex: 0 0 auto;                    
                }

                .activity-details{
                    padding: 5px 5px 5px 10px;
                    flex: 1 1 auto;
                    margin: auto;
                    overflow: auto;
                    
                    
                    // https://stackoverflow.com/questions/15292708/text-overflow-css-truncation
                    .activity-name{
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        font-size: 14px;
                    }

                    .activity-how-many{
                        display : flex;
                        flex-direction: row;
                        justify-content: space-between;

                        .activity-time{
                            font-family: 'Open Sans','sans serif';
                            font-weight: 300;
                            font-size: 13px;
                        }

                        .activity-viewers{
                            font-family: 'Open Sans','sans serif';
                            font-weight: 400;
                            font-size: 14px;                        }
                    }
                    

                }
            }
        }

        .bottom-about{
            // height: 4rem;
            overflow-x: hidden;
            background-color: #fff;
            border-top: 1px dashed black;

            .streamer-links{
                width: auto;
                // height: 3rem;
                background-color: #fff;

                .social-links{
                    // display: inline;
                    // cursor: pointer;
                    // margin: 0.5rem auto;
                    // height: 3rem;
                    // width: 16rem;
                    // border: 1.5px solid #df4973;
                    // border-radius: 5px;
                    // text-align: center;
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0.7rem 1rem;
                    justify-content: center;
                
                    .one{
                        display     :   block;
                        width       :   30px;
                        margin      :   0 2px;
                        object-fit  :   contain;
                        cursor      :   pointer;
                    }
                }


                #watch-button{
                    display: block;
                    cursor: pointer;
                    margin: 0.5rem auto;
                    height: 3rem;
                    width: 16rem;
                    border: 1.5px solid #000;
                    border-radius: 5px;
                    text-align: center;
                    font-family: 'Open Sans','sans serif';
                    font-weight: 400;
                    color: #000;
                    background-color: #fff;
                }
            }
        }
    }

</style>

​
