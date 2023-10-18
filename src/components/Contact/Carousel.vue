<template>
  <Carousel
    :autoplay="2000"
    :breakpoints="breakpoints"
    :wrap-around="true"
    :items-to-show="1.5"
  >
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="contact-img">
        <img :src="slide.img" class="img" />
      </div>
    </Slide>

    <template #addons> </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "Breakpoints",
  data() {
    return {
      //carousel breakpoints
      breakpoints: {
        700: {
          itemsToShow: 3.5,
        },
        1000: {
          itemsToShow: 5,
        },
      },
      slides: [
        {
          id: "1",
          img: "https://i.postimg.cc/ZqDCq6bX/Contact-2.png",
        },
        {
          id: "2",
          img: "https://i.postimg.cc/cL3XQ4Lz/0-2.jpg",
        },
        {
          id: "3",
          img: "https://i.postimg.cc/76GbJbbh/Contact-3.png",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
.img {
  height: 250px;
}
</style>
