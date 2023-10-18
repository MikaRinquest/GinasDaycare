<template>
  <section id="contact">
    <Carousel
      :autoplay="2000"
      :breakpoints="breakpoints"
      :wrap-around="true"
      :items-to-show="1.5"
    >
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
              <p class="contact-info">georginalukas1@gmail.com</p>
            </span>
            <span class="span">
              <fa :icon="['fas', 'clock']" class="icon" />
              <div class="op-holder">
                <p class="contact-info">
                  Operating hours: Mon - Thurs 06:30 - 17:00
                </p>
                <p class="contact-info">
                  Operating hours: Fridays 06:30 - 16:00
                </p>
              </div>
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
              class="map"
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
                v-model="address"
                placeholder="Email address"
                class="input"
                required
                autocomplete="on"
              />
              <input
                type="tel"
                name="phone"
                v-model="tel"
                placeholder="Phone number"
                maxlength="10"
                class="input"
                required
                autocomplete="on"
              />
            </div>
            <div class="select-holder">
              <h3 class="select">
                Please tick which Age Group you are applying for in below:
              </h3>
              <div class="checkbox-holder">
                <span class="checkbox">
                  <input
                    type="checkbox"
                    name="babies"
                    class="check"
                    value=" Ages 0 - 3 Class"
                    v-model="assist"
                  />
                  <label class="label" for="babies">Ages 0 - 3</label>
                </span>
                <span class="checkbox">
                  <input
                    type="checkbox"
                    name="toddler"
                    class="check"
                    value=" Ages 3 - 6 Class"
                    v-model="assist"
                  />
                  <label class="label" for="toddler">Ages 3 - 6</label>
                </span>
              </div>
              <div class="checkbox-holder">
                <span class="checkbox">
                  <input
                    type="checkbox"
                    name="aftercare"
                    class="check"
                    value=" Aftercare"
                    v-model="assist"
                  />
                  <label class="label" for="aftercare">Aftercare</label>
                </span>
                <span class="checkbox">
                  <input
                    type="checkbox"
                    name="extra"
                    class="check"
                    value=" Extra Mural Class"
                    v-model="assist"
                  />
                  <label class="label" for="extra"
                    >Extra Mural Activities</label
                  >
                </span>
              </div>
            </div>
            <div class="input-holder">
              <button type="submit" class="button" @click="send">SUBMIT</button>
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
  name: "Breakpoints",
  data() {
    return {
      //carousel breakpoints
      breakpoints: {
        700: {
          itemsToShow: 3.5,
        },
        1000: {
          itemsToShow: 5,
        },
      },
      name: "",
      surname: "",
      address: "",
      tel: "",
      assist: [],
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

  methods: {
    send() {
      const emailBody = {
        name: this.name,
        surname: this.surname,
        address: this.address,
        tel: this.tel,
        message: this.assist,
      };
      // console.log(emailBody);
      return this.$store.dispatch("sendEmail", emailBody);
    },
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
  padding-bottom: 20px;
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
  flex-direction: column;
  padding-left: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
}

.op-holder {
  display: flex;
}

.contact-holder,
.form-holder {
  width: 50%;
  margin-bottom: 2%;
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

.select-holder {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.input {
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
  font-size: 15px;
}

.select {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: left;
  width: 80%;
  padding-left: 5%;
}

.input {
  border: none;
  border-radius: 5px;
}

.checkbox-holder {
  display: flex;
  justify-content: space-evenly;
  width: 80%;
}

.checkbox {
  display: inline-flex;
  align-items: center;
  transform: scale(1.5);
  width: 25%;
  margin-top: 10px;
}

.label {
  font-size: 15px;
  padding-left: 5px;
  padding-bottom: 6px;
}

.button {
  width: 22%;
  height: 30px;
  margin-top: 10px;
  font-size: 15px;
  background-color: #008956;
  color: white;
  border: none;
  border-radius: 10px;
}

.button:hover {
  cursor: pointer;
  background-color: #42aa6e;
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

  .form,
  .input-holder {
    width: 100%;
  }
  .input-holder {
    flex-direction: column;
    align-items: center;
  }

  .select-holder {
    align-items: center;
  }

  .input {
    width: 70%;
    height: 50px;
    font-size: 20px;
  }

  .button {
    font-size: 20px;
    height: 50px;
  }
  .map {
    align-self: center;
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

  .form,
  .input-holder {
    width: 100%;
  }
  .input-holder {
    flex-direction: column;
    align-items: center;
  }

  .select-holder {
    align-items: center;
  }

  .checkbox-holder {
    flex-direction: column;
    align-items: center;
  }

  .checkbox {
    width: 50%;
  }

  .input {
    width: 70%;
    height: 45px;
    font-size: 16px;
  }

  .button {
    font-size: 16px;
    height: 45px;
  }

  .span {
    padding-top: 15px;
  }

  .contact-info {
    font-size: 15px;
  }

  .op-holder {
    flex-direction: column;
  }
  .map {
    align-self: center;
  }
}
</style>
