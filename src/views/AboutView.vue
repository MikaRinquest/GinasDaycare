<template>
  <section id="about">
    <Vision />
    <Mission />
    <Values />
    <Teachers />
  </section>
</template>

<script>
import Vision from "@/components/About/Vision.vue";
import Mission from "@/components/About/Mission.vue";
import Values from "@/components/About/Values.vue";
import Teachers from "@/components/About/Teachers.vue";
export default {
  components: {
    Vision,
    Mission,
    Values,
    Teachers,
  },
};
</script>

<style>
#about {
  padding-left: 2%;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://i.postimg.cc/yNLg4rcm/About-bg.jpg");
  background-repeat: repeat;
  background-size: 110vw;
  color: white;
  min-height: 97vh;
}
.title {
  margin-bottom: 5px;
}
.image {
  max-width: 350px;
  height: auto;
  margin-top: 4%;
}

.p-holder1,
.p-holder2 {
  max-width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.p-holder2 {
  flex-direction: row-reverse;
}

.text {
  max-width: 300px;
  margin-top: 5px;
}

/* Average Devices */
@media only screen and (min-width: 770px) and (max-width: 1000px) {
  #about {
    background-repeat: repeat-y;
  }

  .p-holder1,
  .p-holder2 {
    flex-direction: column;
  }

  .title {
    text-align: center !important;
    margin-top: 5%;
  }

  .text {
    max-width: 98%;
    text-align: center !important;
  }

  .image {
    width: 60%;
  }
}
/* Medium Devices */
@media only screen and (min-width: 600px) and (max-width: 800px) {
  #about {
    background-repeat: repeat-y;
  }

  .p-holder1,
  .p-holder2 {
    flex-direction: column;
  }

  .title {
    text-align: center !important;
    margin-top: 5%;
  }

  .text {
    max-width: 98%;
    text-align: center !important;
  }

  .image {
    width: 50%;
  }
}
/* Small devices */
@media only screen and (max-width: 600px) {
  #about {
    background-repeat: repeat-y;
  }

  .p-holder1,
  .p-holder2 {
    flex-direction: column;
  }

  .title {
    text-align: center !important;
    margin-top: 10%;
  }

  .text {
    max-width: 98%;
    text-align: center !important;
  }

  .image {
    width: 55%;
  }
}
</style>
