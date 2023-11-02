<template>
  <section id="landing">
    <Home />
    <Timeline />
  </section>
</template>

<script>
import Home from "@/components/Landing/Home.vue";
import Timeline from "@/components/Landing/Timeline.vue";
export default {
  components: {
    Home,
    Timeline,
  },
};
</script>

<style scoped></style>
