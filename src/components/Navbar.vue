<template>
  <nav id="nav">
    <div class="nav-holder">
      <router-link class="route-name" to="/" @click="toggle = !toggle"
        >Home</router-link
      >
      <router-link class="route-name" to="/about" @click="toggle = !toggle"
        >About</router-link
      >
      <router-link class="route-name" to="/services" @click="toggle = !toggle"
        >Services</router-link
      >
      <router-link class="route-name" to="/contact" @click="toggle = !toggle"
        >Contact Us</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  width: 100vw;
  height: 10%;
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 10px #828282, -5px -5px 10px #ffffff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://i.postimg.cc/13mTT3Zj/nav-2-1-2.pngg");
  background-size: contain;
  z-index: 10;
  position: fixed;
}

.nav-holder {
  display: flex;
  justify-content: space-evenly;
  width: 45%;
}

.route-name {
  font-family: "SassoonPrimary", Helvetica, Arial;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
}

/* Media queries */
@media only screen and (max-width: 1000px) {
  #nav {
    display: none;
  }
}
</style>
