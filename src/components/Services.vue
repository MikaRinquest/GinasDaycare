<template>
  <section id="services-holder">
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
    <div class="meal-program">
      <h2>Meal Plan, Stationary List & Extra Mural Activities</h2>
      <p>
        Click the buttons below to download a copy of our Meal Plan,Stationary
        List or Extra Mural Activities for the kids.
      </p>
      <div class="download-content">
        <a href="/Meal_plan.pdf" download class="download"> MEAL PLAN </a>
        <a href="/Stationary_list.pdf" download class="download">
          STATIONERY
        </a>
        <a href="/Application_form.pdf" download class="download">
          EXTRA MURAL ACTIVITIES
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      groups: [
        {
          id: "1",
          age: "0 - 2 years old",
          image: "https://i.postimg.cc/Gpp4rXCk/Contact-1.png",
          extra: "",
        },
        {
          id: "2",
          age: "3 - 6 years old",
          image: "https://i.postimg.cc/FHxJt2WR/3-6.jpg",
          extra: "",
        },
        {
          id: "3",
          age: "Aftercare",
          image: "https://i.postimg.cc/j5fxTfxX/aftercare.jpg",
          extra: "",
        },
        {
          id: "4",
          age: "Extra Mural",
          image: "https://i.postimg.cc/k4Z2D6jD/Extra-mural-new.jpg",
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
#services-holder {
  padding-left: 2%;
}
.class-title {
  text-align: center;
}

.class-holder > div {
  flex: 50%;
}

.classes {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 75%;
  height: 70%;
  /* border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb; */
}

.grade-text {
  width: 250px;
  text-align: center;
  margin: 5px;
}

.class-holder {
  display: flex;
}

.p-holder {
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
}

.text {
  max-width: 500px;
}

.image {
  width: 25%;
}

.meal-program {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
}
.download-content {
  height: 25%;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1%;
}

.download {
  display: flex;
  font-family: "ComicSans", Helvetica, Arial;
  border: 1px solid white;
  text-decoration: none;
  color: black;
  background-color: burlywood;
  height: 20%;
  border-radius: 7px;
  padding: 15px;
  align-items: center;
  font-weight: 600;
}
</style>
