<template>
  <Transition name="fade">
    <nav id="nav" v-if="toggle">
      <div class="icon-holder">
        <fa :icon="['fas', 'x']" class="icon" @click="toggle = !toggle" />
      </div>
      <div class="nav-holder">
        <router-link class="route-name" to="/" @click="toggle = !toggle"
          >Home</router-link
        >
        <router-link class="route-name" to="/about" @click="toggle = !toggle"
          >About Us</router-link
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
        <router-link
          class="route-name"
          to="/vacancies"
          @click="toggle = !toggle"
          >Vacancies</router-link
        >
      </div>
    </nav>
  </Transition>
  <div>
    <fa :icon="['fas', 'bars']" class="icon bars" @click="toggle = !toggle" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
};
</script>

<style scoped>
#nav {
  width: 100vw;
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 10px #828282, -5px -5px 10px #ffffff;
  background-size: contain;
  z-index: 10;
  position: fixed;
  height: 100vh;
  background-color: #528aae;
  flex-direction: column;
}

.nav-holder {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
}

.icon-holder {
  height: 5%;
  display: flex;
  justify-content: flex-end;
}

.icon {
  font-size: 30px;
  color: white;
  display: block;
  z-index: 5;
}

.bars {
  position: fixed;
  color: black;
  margin-left: 5%;
  border: grey 1px solid;
  border-radius: 5px;
  padding: 10px;
  background-color: beige;
  margin-top: 5px;
}

.route-name {
  font-family: "SassoonPrimary", Helvetica, Arial;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
  font-size: 30px;
  padding-top: 25%;
  width: 300px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-100vw);
}

/* Media Queries */
@media only screen and (max-width: 1000px) {
  #mobinav {
    display: flex;
  }
}

@media only screen and (min-width: 600px) and (max-width: 1000px) {
  #nav {
    width: 70vw;
  }
}

@media only screen and (max-width: 600px) {
  .icon {
    font-size: 17px;
  }

  .bars {
    padding: 7px;
  }
}
</style>
