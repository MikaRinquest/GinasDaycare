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
  font-family: "ComicSans", Helvetica, Arial;
  font-weight: 500;
  font-size: 25px;
}

p {
  font-family: "ComicSans", Helvetica, Arial;
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
</style>
