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

export default {
  components: {Header,Navbar,NavbarRight, Home}
}
</script>

<style lang="scss">

</style>
