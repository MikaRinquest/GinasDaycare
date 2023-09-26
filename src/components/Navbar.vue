<template>
  <nav id="nav">
    <div class="nav-holder">
      <router-link class="route-name" to="/">Home</router-link>
      <router-link class="route-name" to="/about">About</router-link>
      <router-link class="route-name" to="/services">Services</router-link>
      <router-link class="route-name" to="/contact">Contact Us</router-link>
    </div>
  </nav>
  <router-view />
  <!-- <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view> -->
</template>

<script>
export default {};
</script>

<style>
#nav {
  width: 94vw;
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 10px #828282, -5px -5px 10px #ffffff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://i.postimg.cc/13mTT3Zj/nav-2-1-2.pngg");
  background-size: contain;
}

.nav-holder {
  display: flex;
  justify-content: space-evenly;
  width: 45%;
}

.route-name {
  font-family: "ComicSans", Helvetica, Arial;
  font-size: 18px;
  text-transform: uppercase;
  color: White;
  font-weight: 500;
}

/* router transitions */
/* .route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.2s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.2s ease-in;
} */
</style>
