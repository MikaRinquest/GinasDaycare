<template>
  <nav id="nav">
    <div class="nav-holder">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  width: 94vw;
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 10px #828282, -5px -5px 10px #ffffff;
}

.nav-holder {
  display: flex;
  justify-content: space-evenly;
  width: 45%;
}
</style>
