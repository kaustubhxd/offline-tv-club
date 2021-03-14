<template>
  <Header/>
  <div class='main-container'>
    <Navbar/>
    <Home/>
    <NavbarRight/>
  </div>
</template>

<script>
// import Navbar from './components/Navbar'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Header from './components/Header'
import NavbarRight from './components/NavbarRight'
import {leftClickEvent, rightClickEvent} from './scripts/handleEvents'

export default {
  components: {Header,Navbar,NavbarRight, Home},
  setup(){
    document.addEventListener('click', () => {
      console.log('left-click')
      leftClickEvent()

    })
  }
}
</script>

<style lang="scss">
.main-container{
  display: flex;
}
</style>
