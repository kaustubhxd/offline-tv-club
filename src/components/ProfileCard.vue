<template>
    <div class="context-container" ancestor="card" :style="{left: profileCard.left, top: profileCard.top, display : profileCard.display}">
        <div class="status" ancestor="card">
            <div class="avatar" ancestor="card" :style="{backgroundImage: profileCard.avatar == ''? '' : 'url(' + profileCard.avatar + ')'}"></div>
            <div class="name" ancestor="card" :title="profileCard.streamer">{{ profileCard.streamer }}</div>
            <div class="title" ancestor="card" :title="profileCard.title">{{ profileCard.title }}</div>
            <span class="activity" ancestor="card" v-show="profileCard.isLive">
                <div class="activity-image" ancestor="card" :style="{backgroundImage: profileCard.activityTitle === '' ?  `url('https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-128x128.jpg')`  : 'url(' + profileCard.activityImage + ')'}"></div> 
                <div class='activity-details' ancestor="card">
                    <div class="activity-name" ancestor="card" :title='profileCard.activityTitle === "" ? "Just Chatting" : profileCard.activityTitle'>{{ profileCard.activityTitle === "" ? "Just Chatting?" : profileCard.activityTitle }}</div>
                    <div class="activity-how-many">
                        <div class="activity-time" ancestor="card" :title='profileCard.activityTime'>{{ profileCard.activityTime }}</div>
                        <div class="activity-viewers" ancestor="card" :title='profileCard.activityViewers'>👁️{{ profileCard.activityViewers.toString() }}K</div>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>

<script>
import {profileCard,sideNavState} from '../store/state'

export default {
    setup(){
        return{
            profileCard,
            sideNavState
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
        width: 300px;
        padding-bottom: 6rem;
        border-radius: 4%;
        overflow: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: 1px solid #df4973;
        transition: left 150ms ease;

        &:focus{
            animation: card-slide-down .3s ease-out;
        }

        .status{
            display: flex;
            flex-direction: column;
            background-color: #df4973;
            width: 100%;
            // height: 45%;
            overflow: clip;

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
            }

            .title{
                font-family: 'Open Sans','sans serif';
                font-weight: 400;
                margin: 5px 10px;
                text-align: center;
            }

            .activity{
                font-family: 'Open Sans','sans serif';
                font-weight: 400;
                width: 100%;
                display: flex;
                flex-direction: row;
                background-color: #d5426b;
                padding: 10px;

                .activity-image{
                    width:  4rem;
                    height: 4rem;
                    border-radius: 7px;
                    background-size: contain;

                    flex: 0 0 auto;                    
                }

                .activity-details{
                    padding: 5px;
                    flex: 1 1 auto;
                    margin: auto;
                    overflow: auto;
                    
                    
                    // https://stackoverflow.com/questions/15292708/text-overflow-css-truncation
                    .activity-name{
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }

                    .activity-how-many{
                        display : flex;
                        flex-direction: row;
                        justify-content: space-between;

                        .activity-time{
                            font-family: 'Open Sans','sans serif';
                            font-weight: 300;
                            font-size: 14px;
                        }

                        .activity-viewers{
                            font-family: 'Open Sans','sans serif';
                            font-weight: 400;
                            font-size: 14px;                        }
                    }
                    

                }
            }
        }
    }

</style>

​
