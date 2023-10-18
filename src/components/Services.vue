<template>
  <section id="services">
    <Ages />
    <Programs />
  </section>
</template>

<script>
import Ages from "./Services/Ages.vue";
import Programs from "./Services/Programs.vue";
export default {
  components: {
    Ages,
    Programs,
  },
};
</script>

<style scoped>
#services {
  padding-left: 2%;
}
</style>
