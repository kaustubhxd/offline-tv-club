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
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Busy petting Temmie 🌸',
        view_count  :   '',
        timestamp : ''
    },
    'pokimane' : {
        id          :   44445592,
        display_name:   'Pokimane',
        channel_name:   'pokimane',
        avatar_name :   'pokimane.png',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'See you soon! ^_^',
        view_count  :   '',
        timestamp : ''
    },
    'scarra' : {
        id          :   22253819,
        display_name:   'Scarra',
        channel_name:   'scarra',
        avatar_name :   'scarra.png',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Reading some novel',
        view_count  :   '',
        timestamp : ''
    },
    'michaelreeves' : {
        id          :   469790580,
        display_name:   'Michael Reeves',
        channel_name:   'michaelreeves',
        avatar_name :   'michael.png',
        platform    :   'Twitch',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   `Temmie ate the stream key, I'll be back eventually...`,
        view_count  :   '',
        timestamp : ''
    },
    'kristoferyee' : {
        id          :   87204022,
        display_name:   'DisguisedToast',
        channel_name:   'kristoferyee',
        avatar_name :   'toast.png',
        platform    :   'Facebook',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   `I stream on Facebook.`,
        view_count  :   '',
        timestamp : ''
    },
    'shiphtur' : {
        id          :   2506,
        display_name:   'Yvonnie',
        channel_name:   'shiphtur',
        avatar_name :   'yvonne.png',
        isLive      :   false,
        thumbnailURL:  '',
        isOTVMember :   true,
        game_id     :   0,
        game_name   :   '',
        game_art    :   '',
        title       :   '',
        offlineTitle:   'Grinding LoL probably',
        view_count  :   '',
        timestamp : ''
    },

}); 

export {
    streamers
}