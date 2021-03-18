import {ref} from 'vue';

const sideNavState = ref({
    leftNavExpand   : false,
    leftOpenWidth   : '15rem',
    leftCloseWidth  : '5rem',
    leftWidth       : '5rem',

    rightNavExpand  : false,
    rightWidth       : '3.5rem',
    rightOpenWidth   : '13rem',
    rightCloseWidth  : '3.5rem',

})

const isLoggedIn = ref(false)

const glitchLogoOnce = ref(false)

const navBarLeft = ref({
    width : '5rem'
})

const profileCard = ref({
    display : 'none',
    isLive  : false,
    left: '20rem',
    top : '5rem',

    avatar    : '',
    streamer  : '',
    title     : '',
    
    activityImage  :   '',
    activityTitle  :    '',
    activityTime   :   '',
    activityViewers : 0,
})

const homeState = ref({
    width : 300,
    height : 300,
})

const twitchPlayer = ref({
    channel : ''
})

export {
    sideNavState,
    isLoggedIn,
    glitchLogoOnce,
    profileCard,
    navBarLeft,
    homeState,
    twitchPlayer
}


// broadcaster_language: "en"
// ​
// broadcaster_login: "baboabe"
// ​
// display_name: "BaboAbe"
// ​
// game_id: "511224"
// ​
// id: "52028814"
// ​
// is_live: true
// ​
// started_at: "2021-03-13T07:44:51Z"
// ​
// tag_ids: Array [ "6ea6bca4-4712-4ab9-a906-e3336a9d8039" ]
// ​
// thumbnail_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/b46164f8-25a9-45f0-b1c3-97342f9b90fe-profile_image-300x300.png"
// ​
// title: "Short chill stream | Apex?"
// ​
// <prototype>: Object { … }

// Date.parse(new Date().toUTCString()) - Date.parse("2021-03-13T07:44:51Z")
