<template>
  <div class="stars">
    <h2 class="title star-t">Meet Our Stars</h2>
    <div class="teacher-holder">
      <div class="teacher" v-for="(teacher, i) in teachers" :key="i">
        <img :src="teacher.img" :alt="teacher" class="t-img" />
        <h3 class="t-name">{{ teacher.name }}</h3>
        <p class="t-class">{{ teacher.class }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teachers: [
        {
          img: "https://i.postimg.cc/SQLggZ4S/Spring.webp",
          name: "Spring Day",
          class: "Ages 0-2",
        },
        {
          img: "https://i.postimg.cc/SQLggZ4S/Spring.webp",
          name: "Spring Day",
          class: "Ages 0-2",
        },
        {
          img: "https://i.postimg.cc/SQLggZ4S/Spring.webp",
          name: "Spring Day",
          class: "Ages 0-2",
        },
        {
          img: "https://i.postimg.cc/SQLggZ4S/Spring.webp",
          name: "Spring Day",
          class: "Ages 0-2",
        },
        {
          img: "https://i.postimg.cc/SQLggZ4S/Spring.webp",
          name: "Spring Day",
          class: "Ages 0-2",
        },
      ],
    };
  },
};
</script>

<style scoped>
.star-t {
  text-align: center;
}

.teacher-holder {
  display: flex;
  flex-wrap: wrap;
}

.teacher {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 20%;
  margin-bottom: 1%;
}

.t-img {
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
}

.t-name {
  font-size: 23px;
}

@media only screen and (max-width: 1000px) {
  .teacher {
    margin: 1%;
  }

  .t-name {
    font-size: 20px;
  }
}
</style>
