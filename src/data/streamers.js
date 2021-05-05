const { ref, watch } = require("vue");
// https://www.reddit.com/user/FullAtomicBoY/

const streamers = ref({
    'lilypichu' : {
        id          :   31106024,
        display_name:   'LilyPichu',
        channel_name:   'lilypichu',
        avatar_name :   'lilypichu.png',
        platform    :   'Twitch',
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Busy petting Temmie 🌸',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'pokimane' : {
        id          :   44445592,
        display_name:   'Pokimane',
        channel_name:   'pokimane',
        avatar_name :   'pokimane.png',
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'See you soon! ^_^',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'scarra' : {
        id          :   22253819,
        display_name:   'Scarra',
        channel_name:   'scarra',
        avatar_name :   'scarra.png',
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Reading some novel',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'michaelreeves' : {
        id          :   469790580,
        display_name:   'Michael Reeves',
        channel_name:   'michaelreeves',
        avatar_name :   'michael.png',
        platform    :   'Twitch',
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   `Temmie ate the stream key, I'll be back eventually...`,
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'disguisedtoast' : {
        id          :   87204022,
        display_name:   'DisguisedToast',
        channel_name:   'disguisedtoast',
        avatar_name :   'toast.png',
        platform    :   'Facebook',
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   `I stream on Facebook.`,
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'yvonnie' : {
        id          :   45184940,
        display_name:   'Yvonnie',
        channel_name:   'yvonnie',
        avatar_name :   'yvonne.png',
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Grinding LoL probably',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'ludwig' : {
        id          :   40934651,
        display_name:   'Ludwig',
        channel_name:   'ludwig',
        avatar_name :   'NA',
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   false,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Making Mogul moves off stream',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'quarterjade' : {
        id          :   173758090,
        display_name:   'QuarterJade',
        channel_name:   'quarterjade',
        avatar_name :   'NA',
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   false,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Busy playing with Genji',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'masayoshi' : {
        id          :   46673989,
        display_name:   'Masayoshi',
        channel_name:   'masayoshi',
        avatar_name :   'NA',
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   false,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Busy playing with Genji',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'starsmitten' : {
        id          :   61852275,
        display_name:   'Starsmitten',
        channel_name:   'starsmitten',
        avatar_name :   'NA',  
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   false,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Microwaving poptarts. Want one?',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'xchocobars' : {
        id          :   42583390,
        display_name:   'xChocoBars',
        channel_name:   'xchocobars',
        avatar_name :   'NA',  
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   false,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Microwaving poptarts. Want one?',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'sykkuno' : {
        id          :   26154978,
        display_name:   'Sykkuno',
        channel_name:   'sykkuno',
        avatar_name :   'NA',  
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   false,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Microwaving poptarts. Want one?',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    },
    'tinakitten' : {
        id          :   42032495,
        display_name:   'TinaKitten',
        channel_name:   'tinakitten',
        avatar_name :   'NA',  
        isLive      :   false,
        thumbnailURL:  '',
        backgroundURL: '',
        isOTVMember :   false,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Microwaving poptarts. Want one?',
        view_count  :   '',
        timestamp : '',
        isFollowed: false,
    }
}); 

// <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCWxlUwW9BgGISaakjGM37aw" frameborder="0" allowfullscreen></iframe>
// UCWxlUwW9BgGISaakjGM37aw


// https://stackoverflow.com/a/60548518
const otvCore = ref(Object.fromEntries(
    Object.entries(streamers.value).slice(0, 6)
))

const otvFriends = ref(Object.fromEntries(
    Object.entries(streamers.value).slice(6, )
))


// https://masteringjs.io/tutorials/fundamentals/filter-object
// https://www.codegrepper.com/code-examples/javascript/js+filter+object+of+objects
const otvCoreOnline = ref(Object.fromEntries(
    Object.entries(otvCore.value).filter(([key, info]) => info.isLive == true)
))

const otvCoreOffline = ref(Object.fromEntries(
    Object.entries(otvCore.value).filter(([key, info]) => info.isLive == false)
))

const otvFriendsOnline = ref(Object.fromEntries(
    Object.entries(streamers.value).slice(6, ).filter(([key, info]) => info.isLive == true)
))

const otvFriendsOffline = ref(Object.fromEntries(
    Object.entries(streamers.value).slice(6, ).filter(([key, info]) => info.isLive == false)
))

// console.log(otvCore.value.pokimane.display_name)
// console.log(streamers.value.pokimane.display_name)

console.log(Object.entries(otvFriendsOnline.value))
console.log(Object.entries(otvFriendsOffline.value))

var followedStreamers = ref([])

if(localStorage.getItem('FOLLOWED')){
    followedStreamers.value = JSON.parse(localStorage.getItem("FOLLOWED"))
    for(var streamer in followedStreamers.value)
    {
        streamers.value[followedStreamers.value[streamer]].isFollowed = true
        console.log(`followed ${followedStreamers.value[streamer]}`)
    }
}

export {
    streamers,
    otvCore,
    otvFriends,
    otvCoreOnline,
    otvCoreOffline,
    otvFriendsOnline,
    otvFriendsOffline,
    followedStreamers
}