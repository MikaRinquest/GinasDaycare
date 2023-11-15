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
      <router-link class="route-name" to="/gallery" @click="toggle = !toggle"
        >Gallery</router-link
      >
      <router-link class="route-name" to="/contact" @click="toggle = !toggle"
        >Contact Us</router-link
      >
      <router-link class="route-name" to="/vacancies" @click="toggle = !toggle"
        >Vacancies</router-link
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
  background-color: white;
  box-shadow: 10px 10px 20px #5a5a5a, -10px -10px 20px #ffffff;
  z-index: 10;
  position: fixed;
  background: #e6f4f1;
}

.nav-holder {
  display: flex;
  justify-content: space-evenly;
  width: 65%;
}

.route-name {
  font-family: "SassoonPrimary", Helvetica, Arial;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
}

/* Media queries */
@media only screen and (max-width: 1000px) {
  #nav {
    display: none;
  }
}
</style>
