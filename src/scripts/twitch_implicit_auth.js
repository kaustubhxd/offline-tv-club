import { computed } from '@vue/runtime-core';
import {streamers} from '../data/streamers'
import {isLoggedIn,glitchLogoOnce,profileCard} from '../store/state'

const CLIENT_ID     = 'vod65kbxn5l31e3czznop13kkfdk7n';
const REDIRECT_URL  = 'http://localhost:8080';

const REQUEST_ACCESS_TOKEN_URL = 'https://id.twitch.tv/oauth2/authorize?client_id=' + CLIENT_ID + '&redirect_uri=' + encodeURIComponent(REDIRECT_URL) + '&response_type=token'

var ACCESS_TOKEN = ''

function authorizePublic(){
    window.location.href = REQUEST_ACCESS_TOKEN_URL;
}

function parseAccessToken(){
    if (localStorage.getItem("ACCESS_TOKEN")){
        ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");  
        isLoggedIn.value = true;
        return true
    }else if (document.location.hash && document.location.hash != '') { 
        var parsedHash = new URLSearchParams(window.location.hash.substr(1));
        if (parsedHash.get('access_token')) {
            ACCESS_TOKEN = parsedHash.get('access_token');
            localStorage.setItem("ACCESS_TOKEN", ACCESS_TOKEN); 
            isLoggedIn.value = true;
            window.location.hash = ''
            return true
        }
    }
    console.log('cannot find access token')
    return false;
}


function getUserInfo(){
    
    fetch(
        'https://api.twitch.tv/helix/users',
        {
            "headers": {
                "Client-ID": CLIENT_ID,
                "Authorization": "Bearer " + ACCESS_TOKEN
            }
        }
    )
    .then(resp => resp.json())
    .then(resp => {
        console.log('success!')
        console.log(resp.data)
        console.log(resp.data[0])
        for(var key in resp.data[0]){
            console.log(`${key} - ${resp.data[0][key]}`)
        }
    })
    .catch(err => {
        console.log('error!')
        console.log(err);
    });
}

function getStreamInfoUsingID(){

    fetch(
        'https://api.twitch.tv/helix/channels?broadcaster_id=41245072',
        {
            "headers": {
                "Client-ID": CLIENT_ID,
                "Authorization": "Bearer " + ACCESS_TOKEN
            }
        }
    )
    .then(resp => resp.json())
    .then(resp => {
        console.log('success!')
        console.log(resp.data)
        console.log(resp.data[0])
        for(var key in resp.data[0]){
            console.log(`${key} - ${resp.data[0][key]}`)
        }
    })
    .catch(err => {
        console.log('error!')
        console.log(err);
    });
}

function handleTwitchResponseErrors(code){
    // 401 unauthorized, needs logging in
    console.log("TWITCH RESPONSE ERROR ", code)
    if(code === 401){
        isLoggedIn.value = false;
        if(localStorage.getItem("ACCESS_TOKEN")){
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
}

async function getStreamInfo (){

    for (var streamer in streamers.value){
        console.log(streamer)
        await fetch(
            'https://api.twitch.tv/helix/search/channels?query=' + streamers.value[streamer]['channel_name'],
            {
                "headers": {
                    "Client-ID": CLIENT_ID,
                    "Authorization": "Bearer " + ACCESS_TOKEN
                }
            }
        )
        .then(resp => {
            // console.log(resp.status); // Will show you the status
            if(resp.ok){
                return resp.json()
            }else{
                handleTwitchResponseErrors(resp.status)
                throw new Error("HTTP status " + response.status);
            }
        })
        .then(resp => {
            // console.log('fetched' + name)
            // console.log(resp.data)
            // console.log(resp.data[0])
            // for(var key in resp.data[0]){
            //     console.log(`${key} - ${resp.data[0][key]}`)
            // }
            if(resp){
                let xstreamer = resp.data[0]
                streamers.value[streamer]['isLive']         = xstreamer['is_live']
                streamers.value[streamer]['title']          = xstreamer['title']
                streamers.value[streamer]['thumbnailURL']   = xstreamer['thumbnail_url']    
                streamers.value[streamer]['game_id']        = xstreamer['game_id']
                streamers.value[streamer]['timestamp']      = xstreamer['started_at']

                
                console.log(xstreamer)

                if (streamers.value[streamer]['isLive']){
                    getGameName(xstreamer['game_id'],streamer)   
                    
                    // temp: set profileCard
                    // profileCard.value.avatar        = streamers.value[streamer]['thumbnailURL']
                    // profileCard.value.streamer      = streamers.value[streamer]['display_name'] 
                    // profileCard.value.title         = streamers.value[streamer]['title'] 
                    // profileCard.value.activityTitle =  computed(() => streamers.value[streamer]['game_name'])  
                    // profileCard.value.activityTime  = parseStartTime(streamers.value[streamer]['timestamp']) 

                    // console.log(profileCard)

                }else{
                    streamers.value[streamer]['game_name'] = 'Offline';
                }
    
                // console.log(streamers.value[streamer])
            }
        })
        .catch(err => {
            console.log('Error in getStreamInfo!')
            console.log(err);
        });
    }
    
}

async function getGameName(game_id,streamer){
    await fetch(
        'https://api.twitch.tv/helix/games?id=' + game_id,
        {
            "headers": {
                "Client-ID": CLIENT_ID,
                "Authorization": "Bearer " + ACCESS_TOKEN
            }
        }
    )
    .then(resp => resp.json())
    .then(resp => {
        let data = resp.data[0]
        for(var key in data){
            console.log(`${key} - ${data[key]}`)
        }
        console.log(`game name: ${data['name']}`)
        if(streamer){
            streamers.value[streamer]['game_name'] = data['name'];
        }
        return data['name'];
    })
    .catch(err => {
        console.log('Error in getGameName')
        console.log(err);
    });
}

function parseStartTime(startedAt){
    let minutes = parseInt((Date.parse(new Date().toUTCString()) - Date.parse(startedAt)) / 60000)
    let hours   = parseInt(minutes / 60)

    if (hours > 0){
        return `Since ${hours} hours`
    }else if (minutes > 0){
        return `Since ${minutes} minutes`
    }else{
        return `Since god knows?`
    }
}


function refreshStreams(){
    if(parseAccessToken()) 
    {   
        console.log('listener on')
        if(navigator.onLine) {
            getStreamInfo()
        }
        glitchLogoOnce.value = true
        setTimeout(() => glitchLogoOnce.value = false, 3000); 
               
        var refreshStreams =  setInterval(()=> {
            console.log('refreshing data..')

            glitchLogoOnce.value = true
            setTimeout(() => glitchLogoOnce.value = false, 3000);

                if(isLoggedIn.value && navigator.onLine ){
                    getStreamInfo()
                }else if(!navigator.onLine){
                    console.log('internet down. will retry later.')
                }
                else{
                    clearInterval(refreshStreams)
                    console.log('routine stream refresh now stopped')
                }
        },30000)
    }else{
        console.log('check token or offline')
    }
}

export{
    authorizePublic,
    parseAccessToken,
    getStreamInfo,
    refreshStreams,
    parseStartTime
}