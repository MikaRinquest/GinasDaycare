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
}

.nav-holder {
  display: flex;
  justify-content: space-evenly;
  width: 45%;
}

/* router transitions */
/* .route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
} */
</style>
