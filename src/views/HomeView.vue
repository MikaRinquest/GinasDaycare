<template>
  <section id="landing">
    <Home />
    <Timeline />
    <Teachers />
  </section>
</template>

<script>
import Home from "@/components/Landing/Home.vue";
import Timeline from "@/components/Landing/Timeline.vue";
import Teachers from "@/components/Landing/Teachers.vue";
export default {
  components: {
    Home,
    Timeline,
    Teachers,
  },
};
</script>

<style scoped></style>
