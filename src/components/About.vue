<template>
  <section id="about">
    <div class="vision">
      <div class="p-holder1">
        <div>
          <h2 class="vision-title title">Our Vision</h2>
          <p class="text">
            Every child need to be cared by a family with LOVE, RESPECT &
            SECURITY.We visualise this role.
          </p>
        </div>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <img
            src="https://i.postimg.cc/rmdXMsNN/CLASSROOM-PICTURE.webp"
            class="image"
            alt="Our vision"
          />
        </transition>
      </div>
    </div>
    <div class="mission">
      <div class="p-holder2">
        <div>
          <h2 class="mission-title title">Our Mission</h2>
          <p class="text text-end">
            At Ginas Day-Educare we build children from different backgrounds,
            especially those in need. We help them to be disciplined and
            confident to shape their own future and be part of their community
            development.
          </p>
        </div>
        <transition
          appear
          @before-enter="beforeEnterMission"
          @enter="enterMission"
        >
          <img
            src="https://i.postimg.cc/cLmNcVJw/CLASSROOM-ACTVITY.webp"
            class="image mission-img"
            alt="Our mission"
          />
        </transition>
      </div>
    </div>
    <div class="values">
      <h2 class="value-title title">Values of our Centre Management</h2>
      <div class="card-holder">
        <div
          class="card"
          v-for="card in cards"
          :key="card.id"
          :data-index="card.id"
        >
          <p>{{ card.value }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap/all";
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          value: "Faithful",
        },
        {
          id: 2,
          value: "Loving",
        },
        {
          id: 3,
          value: "Kind",
        },
        {
          id: 4,
          value: "Trustworthy",
        },
        {
          id: 5,
          value: "Responsible",
        },
      ],
    };
  },

  methods: {
    beforeEnter(el) {
      el.style.transform = "translateX(60px)";
      el.style.opacity = 0;
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: "bounce.out",
        rotate: 5,
        onComplete: done,
      });
    },

    beforeEnterMission(el) {
      el.style.transform = "translateX(-60px)";
      el.style.opacity = 0;
    },

    enterMission(el, done) {
      gsap.to(el, {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: "bounce.out",
        rotate: 5,
        delay: 1,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
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

.vision-title {
  margin-top: 0px;
  padding-top: 2%;
}

.image {
  max-width: 350px;
  height: auto;
  margin-top: 4%;
}

.mission-img {
  margin-bottom: 3%;
}

.p-holder1,
.p-holder2 {
  max-width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.mission-title {
  text-align: end;
  padding-right: 2%;
}

.p-holder2 {
  flex-direction: row-reverse;
}

.text {
  max-width: 300px;
  margin-top: 5px;
}

.text-end {
  text-align: end;
}

.value-title {
  text-align: center;
}

.card-holder {
  display: flex;
  justify-content: center;
  padding-top: 3%;
}

.card {
  width: 120px;
  aspect-ratio: 1/1;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: goldenrod;
  color: black;
  font-weight: bold;
  justify-content: center;
  margin-right: 5%;
  margin-bottom: 3%;
  transition: all 0.4s ease;
}

.card:hover {
  transform: scale(1.5);
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
    text-align: center;
    margin-top: 5%;
  }

  .text {
    max-width: 98%;
    text-align: center;
  }

  .image {
    width: 60%;
  }

  .card-holder {
    flex-wrap: wrap;
  }

  .card {
    width: 200px;
  }

  .card:hover {
    transform: scale(1.2);
    margin-right: 6%;
    margin-bottom: 6%;
    margin-top: 3%;
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
    text-align: center;
    margin-top: 5%;
  }

  .text {
    max-width: 98%;
    text-align: center;
  }

  .image {
    width: 50%;
  }

  .card-holder {
    flex-wrap: wrap;
  }

  .card {
    width: 200px;
  }
  .card:hover {
    transform: scale(1.2);
    margin-right: 6%;
    margin-bottom: 6%;
    margin-top: 3%;
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
    text-align: center;
    margin-top: 10%;
  }

  .text {
    max-width: 98%;
    text-align: center;
  }

  .image {
    width: 55%;
  }

  .card-holder {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 200px;
  }

  .card:hover {
    transform: scale(1.1);
    margin-top: 3%;
    margin-bottom: 6%;
  }
}
</style>
