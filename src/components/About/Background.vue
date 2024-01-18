<template>
  <div class="bg-holder">
    <div class="bg"></div>
  </div>
</template>
<style scoped>
.bg-holder {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  max-height: 50vh;
}

.bg {
  background-image: url("https://i.postimg.cc/c1nWSkVD/About-Page-1.jpg"); /*320 px*/
  background-image: url("https://i.postimg.cc/XqmTzPSy/About-Page-1.jpg"); /*640 px*/
  background-image: url("https://i.postimg.cc/4dptck88/About-Page-1.jpg"); /*800 px*/
  background-image: url("https://i.postimg.cc/yxCzZfX7/About-Page-1.jpg"); /*1024px*/
  background-image: url("https://i.postimg.cc/yxCzZfX7/About-Page-1.jpg"); /*1280 px*/
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 50vh;
}

/* 1280px */
@media only screen and (min-width: 1025px) and (max-width: 1290px) {
  .bg {
    background-image: url("https://i.postimg.cc/yxCzZfX7/About-Page-1.jpg"); /*1280 px*/
  }
}
/* 1024px */
@media only screen and (min-width: 801px) and (max-width: 1025px) {
  .bg {
    background-image: url("https://i.postimg.cc/gJpjfwDD/About-Page-1.jpg"); /*1024px*/
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
}
/* 800px */
@media only screen and (min-width: 641px) and (max-width: 801px) {
  .bg {
    background-image: url("https://i.postimg.cc/4dptck88/About-Page-1.jpg"); /*800 px*/
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top;
  }
}
/* 640px */
@media only screen and (min-width: 321px) and (max-width: 641px) {
  .bg {
    background-image: url("https://i.postimg.cc/XqmTzPSy/About-Page-1.jpg"); /*640 px*/
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top;
  }
}
/* 320px */
@media only screen and (max-width: 321px) {
  .bg {
    background-image: url("https://i.postimg.cc/c1nWSkVD/About-Page-1.jpg"); /*320 px*/
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top;
    height: 25vh;
  }
}
</style>
