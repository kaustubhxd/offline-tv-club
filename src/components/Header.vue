<template>
  <header>
    <div class="header-content">
        <Logo/>
        <nav>
            <ul class="nav__links">
                <li><a href="#">Streams</a></li>
                <li><a href="#">Feed</a></li>
                <li><a href="#">Merch</a></li>
            </ul>
        </nav>
        <!-- <a class="cta" href="#">About</a> -->
    </div>
  </header>

</template>

<script scoped>
import Logo from '../components/Logo'
export default {
    components: {Logo}
}
</script>

<style scoped lang ='scss'>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


li,
a,
button {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 20px;
  color: #edf0f1;
  text-decoration: none;
}

header {
  /* justify-content: space-between;
  align-items: center; */
  padding: 0 15px;
  background-color: #141418;

  height: 3rem;

  position: sticky; /* Added for making nav sticky */
  display: block;
  min-width: auto;
  top: 0; /* Added for making nav sticky */
  left: 0;
  width: 100%;
  z-index: 5050;
}

.header-content{
  display: flex;
  justify-content: space-between;
}

main {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}


.nav__links {
  list-style: none;
  margin: 5px;
}

.nav__links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav__links li a {
  transition: all 0.3s ease 0s;
}

.nav__links li a:hover {
  color: #d7426b;
  }

</style>