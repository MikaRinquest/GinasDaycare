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
            src="https://i.postimg.cc/zX7m6qbZ/Pic-1.jpg"
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
            especially those in need. We help them to be disciplined, confident
            to shape their own future and be part of their community
            development.
          </p>
        </div>
        <transition
          appear
          @before-enter="beforeEnterMission"
          @enter="enterMission"
        >
          <img
            src="https://i.postimg.cc/c40yFvJB/Pic-2.jpg"
            class="image"
            alt="Our mission"
          />
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, DrawSVGPlugin } from "gsap/all";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
export default {
  methods: {
    beforeEnter(el) {
      el.style.transform = "translateX(60px)";
      el.style.opacity = 0;
    },

    enter(el, done) {
      console.log("Start of the animation process");
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
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
        },
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
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
}

.title {
  margin-bottom: 5px;
}

.vision-title {
  margin-top: 0px;
  padding-top: 2%;
}

.image {
  width: 25%;
  margin-top: 5%;
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

p + img:nth-child(2) {
  transform: rotate(5deg);
  margin-bottom: 5%;
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
  }

  .text {
    max-width: 98%;
    text-align: center;
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
    text-align: center;
  }

  .text {
    max-width: 98%;
    text-align: center;
  }

  .image {
    width: 50%;
  }
}
/* Small devices */
@media only screen and (max-width: 600px) {
  #about-holder {
    background-repeat: repeat-y;
  }

  .p-holder1,
  .p-holder2 {
    flex-direction: column;
  }

  .title {
    text-align: center;
  }

  .text {
    max-width: 98%;
    text-align: center;
  }

  .image {
    width: 55%;
  }
}
</style>
