<template>
  <input @click="toggleClicked()" type="checkbox" id="switch"/>
    <label for="switch"/>
</template>

<script>
import {sideNavState} from '../store/state'

export default {
    setup(){
        let toggleOn = false;

        function toggleClicked(){
            toggleOn = !toggleOn
            sideNavState.value
            if(toggleOn){
                sideNavState.value.leftNavExpand =  false;
                sideNavState.value.rightNavExpand =  false;
                sideNavState.value.leftWidth = '0'
                sideNavState.value.rightWidth = '0'
            }else{
                sideNavState.value.leftWidth  =  sideNavState.value.leftCloseWidth
                sideNavState.value.rightWidth = sideNavState.value.rightCloseWidth
            }
            console.log(`toggle clicked: ${toggleOn}`)
        }   

        return{
            toggleClicked
        }
    }
}
</script>

<style scoped>
input[type=checkbox] {
	height: 0;
	width: 0;
	visibility: hidden;
    display: none;
}

label {
	cursor: pointer;
    margin: auto 0;
    margin-right: -7px;
	text-indent: -9999px;
	width: 40px;
	height: 20px;
	background: #fbfbfb;
	/* border: 1px solid #e8eae9; */
	display: block;
	border-radius: 100px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
    top:1.5px;
	left: 2px;
	width: 17px;
	height: 17px;
	background: #fbfbfb;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, .22), 0 4px 0 rgba(0, 0, 0, .08);
	border-radius: 30px;
	transition: 0.1s;
}

input:checked+label {
	background: #d7426b;
}

input:checked+label:after {
	left: calc(100% - 2px);
	transform: translateX(-100%);
}

label:active:after {
	width: 20px;
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #222222;
}

@media only screen and (max-width: 600px) {
    label {
        margin-right: 5px;
        width : 70px;
    }
}
</style>