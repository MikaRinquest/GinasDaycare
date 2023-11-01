<template>
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
</template>

<script>
import { gsap } from "gsap/all";

export default {
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
  },
};
</script>

<style scoped>
.vision-title {
  margin-top: 0px;
  padding-top: 2%;
}
</style>
