<template>
  <div v-if="vacancies.length == 0">
    <h1>No vacancies available.</h1>
  </div>
  <div>
    <div v-for="(job, i) in vacancies" :key="i">
      <p>{{ job.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vacancies: [
        // {
        //   title: "Hello world",
        // },
      ],
    };
  },
};
</script>

<style></style>
