<template>
  <div class="mission">
    <div class="p-holder2">
      <div>
        <h2 class="mission-title title">Our Mission</h2>
        <p class="text text-end">
          At Ginas Day-Educare we build children from different backgrounds,
          especially those in need. We help them to be disciplined and confident
          to shape their own future and be part of their community development.
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
</template>

<script>
import { gsap } from "gsap/all";

export default {
  methods: {
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
.mission-title {
  text-align: end;
  padding-right: 2%;
}

.text-end {
  text-align: end;
}

.mission-img {
  margin-bottom: 3%;
}
</style>
