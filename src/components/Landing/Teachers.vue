<template>
  <div class="stars">
    <h2 class="title star-t">Meet Our Staff</h2>
    <div class="teacher-holder">
      <div class="teacher" v-for="(teacher, i) in teachers" :key="i">
        <img :src="teacher.img" :alt="teacher" class="t-img" />
        <p class="t-class">{{ teacher.name }} - {{ teacher.class }}</p>
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
          img: "https://i.postimg.cc/d1dGvGTz/Whats-App-Image-2023-11-03-at-11-39-21.webp",
          name: "Anthea Matiesie",
          class: "Kitchen Staff",
        },
        {
          img: "https://i.postimg.cc/KY1nq6cc/Whats-App-Image-2023-11-03-at-11-39-48.webp",
          name: "Chante Skinner",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/gjW80rVr/Whats-App-Image-2023-11-03-at-11-40-12.webp",
          name: "Mariksa Deelman",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/CK9bWcdG/Whats-App-Image-2023-11-03-at-11-40-53.webp",
          name: "Vivian Fishe",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/VL7gKB9R/Whats-App-Image-2023-11-03-at-11-47-10.webp",
          name: "Maxree Anne David",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/FHQXGv9m/Whats-App-Image-2023-11-03-at-11-54-28.webp",
          name: "Nonceba Ngqokoma",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/J47K3dX0/Whats-App-Image-2023-11-03-at-11-45-05.webp",
          name: "Caron Koopman",
          class: "Assistant ECD Teacher",
        },
      ],
    };
  },
};
</script>

<style scoped>
.star-t {
  margin-top: 3%;
  margin-bottom: 3%;
  text-align: center;
  font-size: 30px;
}

.teacher-holder {
  display: flex;
  flex-wrap: wrap;
}

.teacher {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 30%;
  margin-bottom: 4%;
}

.t-img {
  width: 200px;
  aspet-ratio:1/1;
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
