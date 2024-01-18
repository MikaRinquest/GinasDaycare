<template>
  <section id="about">
    <Vision />
    <Mission />
    <Values />
    <Background />
  </section>
</template>

<script>
import Background from "@/components/About/Background.vue";
import Vision from "@/components/About/Vision.vue";
import Mission from "@/components/About/Mission.vue";
import Values from "@/components/About/Values.vue";
export default {
  components: {
    Background,
    Vision,
    Mission,
    Values,
  },
};
</script>

<style>
#about {
  padding-left: 2%;
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

@media only screen and (max-width: 801px) {
  #about {
    padding-top: 0;
  }
}

/* Average Devices */
@media only screen and (min-width: 770px) and (max-width: 1000px) {
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
