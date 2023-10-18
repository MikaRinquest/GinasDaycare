<template>
  <h1>Our story</h1>
  <div class="landing">
    <transition appear @before-enter="beforeTitle" @enter="enter">
      <span class="title-holder">
        <h2 class="quote">
          "A good Daycare is like a second home for children."
        </h2>
      </span>
    </transition>
    <transition appear @before-enter="beforeImage" @enter="enter">
      <img
        src="https://i.postimg.cc/rpdsS8xV/Trans-Logo.webp"
        class="l-image"
        alt="Landing"
        fetchpriority="high"
      />
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
// gsap.registerPlugin(ScrollTrigger);
export default {
  methods: {
    beforeTitle(el) {
      el.style.transform = "translateX(-100px)";
      el.style.opacity = "0";
    },
    beforeImage(el) {
      el.style.transform = "translateX(100px)";
      el.style.opacity = "0";
    },
    enter(el) {
      gsap.to(el, {
        duration: 1.5,
        x: 0,
        opacity: 1,
      });
    },
  },
};
</script>

<style scoped>
h1 {
  padding-top: 3%;
  padding-bottom: 1%;
  text-align: center;
  font-size: 35px;
}

.landing {
  display: flex;
  justify-content: center;
  margin-top: 5%;
}

.l-image {
  max-width: 350px;
  aspect-ratio: 1;
}

.title-holder {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.quote {
  font-style: italic;
}

#title {
  font-weight: bold;
  font-size: 65px;
  color: ghostwhite;
}

/* Average Devices */
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .landing {
    flex-direction: column;
    align-items: center;
  }

  .title-holder {
    width: 65%;
  }

  .quote {
    font-size: 40px;
    text-align: center;
  }

  .l-image {
    width: 50%;
  }
}

/* Small devices */
@media only screen and (max-width: 600px) {
  .landing {
    flex-direction: column;
    align-items: center;
  }

  .title-holder {
    width: 85%;
  }

  .quote {
    font-size: 25px;
    text-align: center;
  }

  .l-image {
    width: 75%;
  }
}
</style>
