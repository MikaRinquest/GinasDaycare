<template>
  <section id="contact">
    <Carousel />
    <div id="contact-section">
      <h2 class="title">Book a free tour</h2>

      <div class="info-holder">
        <Info />
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "./Contact/Carousel.vue";
import Info from "./Contact/Info.vue";
import ContactForm from "./Contact/ContactForm.vue";
export default {
  components: {
    Carousel,
    Info,
    ContactForm,
  },
};
</script>

<style scoped>
#contact-section {
  height: 70%;
  background-color: #5cbde466;
}

.title {
  margin: 0;
  padding-top: 1%;
  padding-bottom: 1%;
  height: 10%;
  font-size: 40px;
  text-align: center;
}
.info-holder {
  display: flex;
}

.contact-holder,
.form-holder {
  width: 50%;
  margin-bottom: 2%;
}

/* Medium Devices */
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .info-holder {
    flex-direction: column-reverse;
  }

  .contact-holder,
  .form-holder {
    width: 100%;
    padding-bottom: 5%;
  }
}
/* Small devices */
@media only screen and (max-width: 600px) {
  .info-holder {
    flex-direction: column-reverse;
  }

  .contact-holder,
  .form-holder {
    width: 100%;
  }
}
</style>
