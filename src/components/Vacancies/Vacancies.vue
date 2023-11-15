<template>
  <div v-if="vacancies.length == 0" class="n-vac">
    <h1 class="nv-title">No vacancies available.</h1>
  </div>
  <div class="a-vac" v-else>
    <h2 class="heading">Vacancies</h2>
    <div class="vac-holder">
      <div v-for="(job, i) in vacancies" :key="i" class="vac">
        <h3 class="v-title">{{ job.title }}</h3>
        <p class="v-desc">{{ job.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vacancies: [],
    };
  },
};
</script>
<style scoped>
.n-vac {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 87vh;
}

.nv-title {
  font-size: 35px;
  text-align: center;
}

.heading {
  font-size: 30px;
  text-align: center;
  padding-top: 2%;
}

.vac-holder {
  padding-top: 3%;
  padding-left: 5%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

.vac {
  width: 30%;
  border: 1px solid black;
  padding: 10px;
  margin-right: 2%;
  margin-bottom: 2%;
}

.v-title {
  text-decoration: underline;
  text-align: center;
  padding-bottom: 15px;
}

@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .vac {
    width: 48%;
  }
}

@media only screen and (max-width: 600px) {
  .vac {
    width: 100%;
  }
}
</style>
