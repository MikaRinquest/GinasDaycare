<template>
  <Navbar />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
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

body {
  background-color: beige;
}

h1,
h2,
h3 {
  font-family: "SassoonPrimary", Helvetica, Arial;
  font-weight: 500;
  font-size: 25px;
}

p {
  font-family: "SassoonPrimary", Helvetica, Arial;
  font-size: 18px;
}

#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
    font-size: 30px;
  }

  p {
    font-size: 24px;
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
}
</style>
