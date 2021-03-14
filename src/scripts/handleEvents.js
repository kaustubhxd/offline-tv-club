import {profileCard,sideNavState} from '../store/state'
import {streamers} from '../data/streamers'
import {parseStartTime} from '../scripts/twitch_implicit_auth'


function leftClickEvent(){
    profileCard.value.display = 'none' 
}


// function rightClickEvent(){
//     profileCard.value.display = 'block' 
// }


function streamerContextEvent(e,streamer){
    profileCard.value.display = 'none'
    console.log('streamer context')
    console.log(e)
    console.log(streamer)

    profileCard.value.isLive = streamers.value[streamer].isLive
    profileCard.value.avatar = streamers.value[streamer].thumbnailURL
    profileCard.value.streamer = streamers.value[streamer]['display_name']
    profileCard.value.avatar = streamers.value[streamer].thumbnailURL
    if(profileCard.value.isLive){
        profileCard.value.activityTitle = streamers.value[streamer]['game_name']
        profileCard.value.activityTime = parseStartTime(streamers.value[streamer].timestamp) 
        profileCard.value.title = streamers.value[streamer].title
    }else{
        profileCard.value.title = streamers.value[streamer].offlineTitle
    }
    positionContextCard(e)
    profileCard.value.display = 'block'
}

function positionContextCard(e){
    // profileCard.value.top = '20em' 
    profileCard.value.left = parseInt(sideNavState.value.leftWidth) + 0.5 + 'rem'
}

export{ 
    leftClickEvent,
    streamerContextEvent
}

