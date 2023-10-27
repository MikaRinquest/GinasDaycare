<template>
  <div class="age-group">
    <h2 class="class-title">Our Classes</h2>
    <div class="class-holder">
      <transition-group appear @before-enter="beforeEnter" @enter="enter">
        <div
          class="classes"
          v-for="group in groups"
          :key="group.id"
          :data-index="group.id"
        >
          <img :src="group.image" class="grade-img" />
          <p class="grade-text">{{ group.age }}</p>
          <p class="grade-text" v-if="group.extra !== null">
            {{ group.extra }}
          </p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      groups: [
        {
          id: "1",
          age: "0 - 3 years old",
          image: "https://i.postimg.cc/pTgNTv0b/concert.webp ",
          extra: "",
        },
        {
          id: "2",
          age: "3 - 4 years old",
          image: "https://i.postimg.cc/LsHb652Z/ACTIVITY.webp",
          extra: "",
        },
        {
          id: "3",
          age: "4 - 5 years old",
          image:
            "https://i.postimg.cc/XJPH8gFw/Whats-App-Image-2023-10-27-at-11-12-46.webp",
          extra: "",
        },
        {
          id: "4",
          age: "Extra Mural",
          image: "https://i.postimg.cc/021R18M7/computer-classes.webp",
          extra: "Computer Kids",
        },
      ],
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = "translateY(100px)";
      el.style.opacity = 0;
    },

    enter(el, done) {
      gsap.to(el, {
        duration: 1.5,
        y: 0,
        opacity: 1,
        onComplete: done,
        delay: el.dataset.index * 0.3,
      });
    },
  },
};
</script>

<style scoped>
.class-title {
  text-align: center;
  margin-bottom: 3%;
  margin-top: 3%;
}

.class-holder > div {
  flex: 50%;
}

.classes {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin: 10px;
  background-color: #ddc;
  border: solid 5vmin #eee;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  justify-content: center;
}
.grade-img {
  max-width: 370px;
  width: 70%;
  height: -webkit-fill-available;
  height: -moz-available;
  height: fill-available;
  margin-top: 5px;
}

.grade-text {
  width: 250px;
  text-align: center;
  margin: 5px;
}

.class-holder {
  display: flex;
}

/* Medium Devices */
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .class-holder {
    flex-direction: column;
    align-items: center;
  }

  .classes {
    width: 65%;
    margin-bottom: 11px;
  }

  .grade-img {
    width: 60%;
  }
}
/* Small devices */
@media only screen and (max-width: 600px) {
  .class-holder {
    flex-direction: column;
    align-items: center;
  }

  .classes {
    width: 65%;
    margin-bottom: 11px;
  }

  .grade-img {
    width: 60%;
  }
}
</style>
