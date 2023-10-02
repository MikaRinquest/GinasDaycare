<template>
  <Navbar />
  <MobileNav />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MobileNav from "./components/MobileNav.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    MobileNav,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: "SassoonPrimary";
  src: local("SassoonPrimary"),
    url(./assets/fonts/Sassoon-Primary.otf) format("truetype");
  font-family: "ComicSans";
  src: local("ComicSans"),
    url(./assets/fonts/LDFComicSans.ttf) format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: beige;
}

h1,
h2,
h3 {
  font-family: "SassoonPrimary", Helvetica, Arial;
  font-weight: 600;
  font-size: 25px;
}

p {
  font-family: "SassoonPrimary", Helvetica, Arial;
  font-size: 18px;
}

#landing,
#about,
#services,
#contact {
  padding-top: 5%;
}

#app {
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white;
}

/* Medium Devices*/
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  h1,
  h2,
  h3 {
    font-size: 45px;
  }

  p {
    font-size: 27px;
  }

  #landing,
  #about,
  #services,
  #contact {
    padding-top: 0%;
  }
}

/* Small Devices*/
@media only screen and (max-width: 600px) {
  h1,
  h2,
  h3 {
    font-size: 26px;
  }

  p {
    font-size: 20px;
  }

  #landing,
  #about,
  #services,
  #contact {
    padding-top: 0%;
  }
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
