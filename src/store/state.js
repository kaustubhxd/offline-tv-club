import {ref} from 'vue';

const sideNavState = ref({
    leftNavExpand   : false,
    rightNavExpand  : false,
})

const isLoggedIn = ref(false)

const glitchLogoOnce = ref(false)

export {
    sideNavState,
    isLoggedIn,
    glitchLogoOnce
}