<template>
  <section id="landing">
    <Home />
    <Timeline />
  </section>
</template>

<script>
import Home from "./Landing/Home.vue";
import Timeline from "./Landing/Timeline.vue";
export default {
  components: {
    Home,
    Timeline,
  },
};
</script>

<style scoped></style>
