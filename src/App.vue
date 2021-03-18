<template>
  <div class="main-container">
    <Header/>
    <div class='the-content'>
      <Navbar/>
      <Home/>
      <NavbarRight/>
    </div>  
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
    document.addEventListener('click', (e) => {
      // console.log('left-click')
      leftClickEvent(e)

    })
  }
}
</script>

<style lang="scss">
#app{
  min-height: 100%;
  display: flex;
  flex-direction: column;
  min-width: auto;
}


.the-content{
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  flex: 1 0 auto;
}
</style>
