<template>
  <section>
    <Carousel :autoplay="2000" :items-to-show="5" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="contact-img">
          <img :src="slide.img" class="img" />
        </div>
      </Slide>

      <template #addons> </template>
    </Carousel>
    <div id="contact-section">
      <h2 class="title">Book a free tour</h2>

      <div class="info-holder">
        <div class="contact-holder">
          <div id="icon-holder">
            <span class="span">
              <fa :icon="['fas', 'phone']" class="icon" />
              <p class="contact-info">073 283 6633</p>
            </span>
            <span class="span">
              <fa :icon="['fas', 'envelope']" class="icon" />
              <p class="contact-info">georgina1@gmail.com</p>
            </span>
            <span class="span">
              <fa :icon="['fas', 'clock']" class="icon" />
              <p class="contact-info">
                Operating hours: Mon - Thurs 06:30 - 17:00
              </p>
              <p class="contact-info">Operating hours: Fridays 06:30 - 16:00</p>
            </span>
          </div>
          <div class="map-holder">
            <span class="span">
              <fa :icon="[fas, 'location-dot']" class="icon" />
              <p class="contact-info">Come find us</p>
            </span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6595071098363!2d18.723184975400372!3d-33.87266491925846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc536c01e2579b%3A0x8075589bd9bc99ba!2sGina%20DayCare!5e0!3m2!1sen!2sza!4v1695104469361!5m2!1sen!2sza"
              width="300"
              height="250"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="form-holder">
          <form @submit.prevent="submitForm" class="form">
            <div class="input-holder">
              <input
                type="text"
                name="name"
                v-model="name"
                placeholder="Name"
                class="input"
                required
                autocomplete="on"
              />
              <input
                type="text"
                name="surname"
                v-model="surname"
                placeholder="Surname"
                class="input"
                required
                autocomplete="on"
              />
            </div>
            <div class="input-holder">
              <input
                type="email"
                name="email"
                v-model="email"
                placeholder="Email address"
                class="input"
                required
                autocomplete="on"
              />
              <input
                type="tel"
                name="phone"
                v-model="phone"
                placeholder="Phone number"
                maxlength="10"
                class="input"
                required
                autocomplete="on"
              />
            </div>
            <div class="input-holder">
              <textarea
                name="message"
                v-model="message"
                placeholder="Please give a description on what you would like."
                class="textbox"
              ></textarea>
            </div>
            <div class="input-holder">
              <button type="submit" class="button">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
      name: "",
      slides: [
        {
          id: "1",
          img: "https://i.postimg.cc/ZqDCq6bX/Contact-2.png",
        },
        {
          id: "2",
          img: "https://i.postimg.cc/cL3XQ4Lz/0-2.jpg",
        },
        {
          id: "3",
          img: "https://i.postimg.cc/76GbJbbh/Contact-3.png",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
#contact-section {
  height: 70%;
  background-color: #5cbde466;
}

.img {
  height: 250px;
}

.title {
  margin: 0;
  padding-top: 1%;
  padding-bottom: 5px;
  height: 10%;
  font-size: 40px;
  text-align: center;
}
.info-holder {
  display: flex;
}

#icon-holder {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10%;
}

.span {
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
}

.contact-info {
  padding-left: 10%;
  width: 250px;
}

.icon {
  font-size: 25px;
}

.map-holder {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10%;
}

.contact-holder,
.form-holder {
  width: 50%;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-holder {
  display: flex;
  width: 80%;
  justify-content: space-evenly;
}

.input {
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
  font-size: 15px;
}

.textbox {
  width: 70%;
  height: 60px;
  font-size: 15px;
}

.input,
.textbox {
  border: none;
  border-radius: 5px;
}

.button {
  width: 25%;
  height: 30px;
  margin-top: 10px;
  font-size: 15px;
  background-color: #00b055;
  color: white;
  border: none;
}
</style>
