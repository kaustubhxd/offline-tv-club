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
    let QUERY = ''
    let gameInfo = {}
    for (var streamer in streamers.value){
        // console.log(streamer)
        QUERY += 'user_login=' +  streamers.value[streamer]['channel_name'] + '&'
    }
        console.log(QUERY)

        await fetch(
            'https://api.twitch.tv/helix/streams?' + QUERY,
            {
                "headers": {
                    "Client-ID": "vod65kbxn5l31e3czznop13kkfdk7n",
                    "Authorization": "Bearer ad12tfpfni5d725ji8vgc266vfbbct"
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
            // console.log(resp.data.length)
            if(resp.data.length){
                let response = resp.data
                console.log(response)
                // https://stackoverflow.com/a/16626758
                response.forEach((xstreamer, index, wholeArray) => {
                    // console.log(xstreamer)
                    let streamer_name = xstreamer.user_login
                    // console.log(streamer_name)
                    streamers.value[streamer_name]['isLive']         = xstreamer['type'] === 'live'
                    streamers.value[streamer_name]['title']          = xstreamer['title']
                    streamers.value[streamer_name]['game_id']        = xstreamer['game_id']
                    streamers.value[streamer_name]['game_name']      = xstreamer['game_name']
                    streamers.value[streamer_name]['timestamp']      = parseStartTime(xstreamer['started_at'])
                    streamers.value[streamer_name]['view_count']     = xstreamer['viewer_count']

                    gameInfo[xstreamer['game_id']] = streamer_name
                });
                getGameThumbnails(gameInfo)
                // console.log(streamers.value[streamer])
            }
            for(var zstream in streamers.value){
                // console.log(streamers.value[zstream].isLive)
                if(!streamers.value[zstream].isLive){
                    streamers.value[zstream].game_name = 'Offline'
                }
            }
        })
        .catch(err => {
            console.log('Error in getStreamInfo!')
            console.log(err);
        });
    
}

// https://dev.twitch.tv/docs/api/reference#get-users
async function getChannelInfo(){
    let QUERY = ''
    for (var streamer in streamers.value){
        // console.log(streamer)
        QUERY += 'id=' +  streamers.value[streamer]['id'] + '&'
    }
        console.log(QUERY)

        await fetch(
            'https://api.twitch.tv/helix/users?' + QUERY,
            {
                "headers": {
                    "Client-ID": "vod65kbxn5l31e3czznop13kkfdk7n",
                    "Authorization": "Bearer ad12tfpfni5d725ji8vgc266vfbbct"
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
        }).then(resp => {
            console.log(resp.data.length)
            if(resp.data.length){
                let response = resp.data
                console.log(response)
                // https://stackoverflow.com/a/16626758
                response.forEach((xstreamer, index, wholeArray) => {
                    // console.log(xstreamer)
                    let streamer_name = xstreamer.login
                    // console.log(streamer_name)
                    if(streamers.value[streamer_name]){
                        streamers.value[streamer_name]['thumbnailURL']  = xstreamer['profile_image_url']
                    }
                });
            }
    }).catch(err => {
            console.log('Error in getStreamInfo!')
            console.log(err);
        });
    
}

async function getGameThumbnails(gameInfo){
    let GAME_IDS = Object.keys(gameInfo)
    console.log(GAME_IDS)
    let QUERY = ''
    for (const id of GAME_IDS){
        QUERY += 'id=' +  id + '&'
    }
    console.log(QUERY)
    await fetch(
        'https://api.twitch.tv/helix/games?' + QUERY,
        {
            "headers": {
                "Client-ID": "vod65kbxn5l31e3czznop13kkfdk7n",
                "Authorization": "Bearer ad12tfpfni5d725ji8vgc266vfbbct"
            }
        }
    )
    .then(resp => resp.json())
    .then(resp => {
		resp.length
        console.log('success!')
        // console.log(resp)
        console.log(resp.data[0])
        let gameDetails = resp.data
        for(const game in gameDetails){
            let xstreamer = gameInfo[gameDetails[game].id]
            console.log(xstreamer)
            let boxArtURL = gameDetails[game].box_art_url.replace("{width}x{height}",'64x64')
            console.log(boxArtURL)
            streamers.value[xstreamer]['game_art'] = boxArtURL
        }
    })
    .catch(err => {
        console.log('error!')
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
            getChannelInfo()
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








// fetch(
//     'https://api.twitch.tv/helix/streams?user_login=lilypichu&user_login=pokimane&user_login=scarra&user_login=michaelreeeves&user_login=DisguisedToast&user_login=shiphtur&',
//     {
//         "headers": {
//             "Client-ID": "vod65kbxn5l31e3czznop13kkfdk7n",
//             "Authorization": "Bearer ad12tfpfni5d725ji8vgc266vfbbct"
//         }
//     }
// )
// .then(resp => resp.json())
// .then(resp => {
//     resp.length
//     console.log('success!')
//     console.log(resp)
//     console.log(resp.data[0])
//     for(var key in resp.data[0]){
//         console.log(`${key} - ${resp.data[0][key]}`)
//     }
// })
// .catch(err => {
//     console.log('error!')
//     console.log(err);
// });


// get streamer info

// fetch(
//     'https://api.twitch.tv/helix/users?login=lilypichu&login=pokimane&login=scarra&login=michaelreeeves&login=DisguisedToast',
//     {
//         "headers": {
//             "Client-ID": "vod65kbxn5l31e3czznop13kkfdk7n",
//             "Authorization": "Bearer ad12tfpfni5d725ji8vgc266vfbbct"
//         }
//     }
// )
// .then(resp => resp.json())
// .then(resp => {
//     resp.length
//     console.log('success!')
//     console.log(resp)
//     console.log(resp.data[0])
//     for(var key in resp.data[0]){
//         console.log(`${key} - ${resp.data[0][key]}`)
//     }
// })
// .catch(err => {
//     console.log('error!')
//     console.log(err);
// });