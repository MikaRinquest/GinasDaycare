<template>
  <section id="services">
    <Ages />
    <Programs />
  </section>
</template>

<script>
import Ages from "@/components/Services/Ages.vue";
import Programs from "@/components/Services/Programs.vue";
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
