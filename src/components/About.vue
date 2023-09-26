<template>
  <section id="about-holder">
    <div class="vision">
      <div class="p-holder1">
        <div>
          <h2 class="vision-title">Our Vision</h2>
          <p class="text">
            Every child need to be cared by a family with LOVE, RESPECT &
            SECURITY.We visualise this role.
          </p>
        </div>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <img src="https://i.postimg.cc/zX7m6qbZ/Pic-1.jpg" class="image" />
        </transition>
      </div>
    </div>
    <div class="mission">
      <div class="p-holder2">
        <div>
          <h2 class="mission-title">Our Mission</h2>
          <p class="text">
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
          <img src="https://i.postimg.cc/c40yFvJB/Pic-2.jpg" class="image" />
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, DrawSVGPlugin } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
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
#about-holder {
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

.vision-title {
  margin-top: 0px;
  padding-top: 2%;
}

.image {
  width: 35%;
}

.p-holder1,
.p-holder2 {
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
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
  text-align: end;
}

div + p:nth-child(2) {
  text-align: end;
}

p + img:nth-child(2) {
  transform: rotate(5deg);
}
</style>
