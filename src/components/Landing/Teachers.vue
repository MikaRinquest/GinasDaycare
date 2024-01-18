<template>
  <div class="stars">
    <h2 class="title star-t">Meet Our Staff</h2>
    <div class="teacher-holder">
      <div class="teacher" v-for="(teacher, i) in teachers1" :key="i">
        <img :src="teacher.img" :alt="teacher.name" class="t-img" />
        <p class="t-class">{{ teacher.name }} - {{ teacher.class }}</p>
      </div>
      <div class="holder">
        <div class="teacher" v-for="(teacher, i) in teachers2" :key="i">
          <img :src="teacher.img" :alt="teacher.name" class="t-img" />
          <p class="t-class">{{ teacher.name }} - {{ teacher.class }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teachers1: [
        {
          img: "https://i.postimg.cc/KY1nq6cc/Whats-App-Image-2023-11-03-at-11-39-48.webp",
          name: "Chante Skinner",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/qvrw2DwR/Mariska-Deelman-ECD-Teacher-1.jpg",
          name: "Mariska Deelman",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/MZhdppj1/Vivian-Fisher-ECD-Teacher-1.jpg",
          name: "Vivian Fisher",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/85YfwsV4/Maxree-Anne-David-ECD-Teacher-1.jpg",
          name: "Maxree Anne David",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/RFhncK2q/Nonceba-Ngqokoma-ECD-Teacher-1.jpg",
          name: "Nonceba Ngqokoma",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/23RbRJyB/Caron-Koopman-Assistant-ECD-Teacher-1.jpg",
          name: "Caron Koopman",
          class: "Assistant ECD Teacher",
        },
      ],
      teachers2: [
        {
          img: "https://i.postimg.cc/Qx1S9Zpw/Lauren-Aftercare-Administrator-1.jpg",
          name: "Lauren",
          class: "Aftercare & Administration",
        },
        {
          img: "https://i.postimg.cc/J0BDFmrL/Anthea-Matiesie-Kitchen-Staff-1.jpg",
          name: "Anthea Matiesie",
          class: "Kitchen Staff",
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
  justify-content: space-around;
}

.holder {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
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
  aspect-ratio: 1/1;
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

  .t-class {
    font-size: 17px;
  }
}
</style>
