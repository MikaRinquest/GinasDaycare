<template>
  <section id="vacancies">
    <Vacancies />
  </section>
</template>

<script>
import Vacancies from "@/components/Vacancies/Vacancies.vue";
export default {
  components: {
    Vacancies,
  },
};
</script>

<style scoped>
#vacancies {
  min-height: 97vh;
}
</style>
