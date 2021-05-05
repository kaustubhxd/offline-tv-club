import {profileCard,sideNavState,twitchPlayer,ytPlayer,fbPlayer} from '../store/state'
import {streamers} from '../data/streamers'
import { computed } from '@vue/runtime-core'


function leftClickEvent(e){
    // console.log(e)
    if(e.target.hasAttribute('ancestor')){
        if(e.target.getAttribute('ancestor') == 'card'){
        }
    }else{
        profileCard.value.display = 'none' 
    }
}


// function rightClickEvent(){
//     profileCard.value.display = 'block' 
// }


function streamerContextEvent(e,streamer,navSide){
    profileCard.value.display = 'none'
    // console.log('streamer context')
    // console.log(e)
    // console.log(streamer)

    profileCard.value.isLive = streamers.value[streamer].isLive
    profileCard.value.avatar = streamers.value[streamer].thumbnailURL
    profileCard.value.streamer = streamers.value[streamer]['display_name']
    profileCard.value.backgroundURL = streamers.value[streamer]['backgroundURL']
    if(profileCard.value.isLive){
        profileCard.value.title = streamers.value[streamer].title
        profileCard.value.activityTitle = streamers.value[streamer]['game_name']
        profileCard.value.activityTime = streamers.value[streamer].timestamp
        profileCard.value.activityImage = streamers.value[streamer].game_art
        profileCard.value.activityViewers =  computed(() => (streamers.value[streamer].view_count / 1000).toFixed(1)) 
    }else{
        profileCard.value.title = streamers.value[streamer].offlineTitle
    }
    
    positionContextCard(e,navSide)
    profileCard.value.display = 'block'
}

function positionContextCard(e,navSide){
    // profileCard.value.top = '20em' 
    // console.log(`LEFT WIDTH ${sideNavState.value.leftWidth}`)
    if(navSide == 'left'){
        profileCard.value.left = '1rem'
        profileCard.value.right = ''

    }else if (navSide == 'right'){
        profileCard.value.right = '1rem'
        profileCard.value.left = ''
    }
}



function isSmartPhone(){
    if(navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)) { 
        return true;
    }else{
        return false;
    };
}

function pullUpLivestream(provider,channel){
    ytPlayer.value.channel = ''
    twitchPlayer.value.channel = ''
    fbPlayer.value.channel = ''

    if( provider == 'youtube'){
        ytPlayer.value.channel = channel
    }else if(provider == 'twitch'){
        twitchPlayer.value.channel = channel
    }else if(provider == 'facebook'){
        fbPlayer.value.channel = channel
    }
}

export{ 
    leftClickEvent,
    streamerContextEvent,
    isSmartPhone,
    pullUpLivestream
}

