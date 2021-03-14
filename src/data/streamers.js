const { ref } = require("vue");
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
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        title       :   '',
        offlineTitle:   'Busy petting Temmie 🌸',
        view_count  :   '',
        timestamp : ''
    },
    'pokimane' : {
        id          :   0,
        display_name:   'Pokimane',
        channel_name:   'pokimane',
        avatar_name :   'pokimane.png',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        title       :   '',
        offlineTitle:   'See you soon! ^_^',
        view_count  :   '',
        timestamp : ''
    },
    'scarra' : {
        id          :   0,
        display_name:   'Scarra',
        channel_name:   'Scarra',
        avatar_name :   'scarra.png',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        title       :   '',
        offlineTitle:   'Reading some novel',
        view_count  :   '',
        timestamp : ''
    },
    'michael' : {
        id          :   225413536,
        display_name:   'Michael Reeves',
        channel_name:   'michaelreeeves',
        avatar_name :   'michael.png',
        platform    :   'Twitch',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        title       :   '',
        offlineTitle:   `Temmie ate the stream key, I'll be back eventually...`,
        view_count  :   '',
        timestamp : ''
    },
    'toast' : {
        id          :   0,
        display_name:   'DisguisedToast',
        channel_name:   'DisguisedToast',
        avatar_name :   'toast.png',
        platform    :   'Facebook',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        title       :   '',
        offlineTitle:   `I stream on Facebook.`,
        view_count  :   '',
        timestamp : ''
    },
    'yvonne' : {
        id          :   0,
        display_name:   'Yvonnie',
        channel_name:   'ludwiig',
        avatar_name :   'yvonne.png',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        title       :   '',
        offlineTitle:   'Grinding LoL probably',
        view_count  :   '',
        timestamp : ''
    },

}); 

export {
    streamers
}