<template>
  <div class="stars">
    <h2 class="title star-t">Meet Our Staff</h2>
    <div class="teacher-holder">
      <div class="teacher" v-for="(teacher, i) in teachers1" :key="i">
        <img :src="teacher.img" :alt="teacher.name" class="t-img" />
        <p class="t-class">{{ teacher.name }} - {{ teacher.class }}</p>
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
          img: "https://i.postimg.cc/B6hkpVbH/Chante-Skinner.jpg",
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
          img: "https://i.postimg.cc/RFhncK2q/Nonceba-Ngqokoma-ECD-Teacher-1.jpg",
          name: "Nonceba Ngqokoma",
          class: "ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/23RbRJyB/Caron-Koopman-Assistant-ECD-Teacher-1.jpg",
          name: "Caron Koopman",
          class: "Assistant ECD Teacher",
        },
        {
          img: "https://i.postimg.cc/Qx1S9Zpw/Lauren-Aftercare-Administrator-1.jpg",
          name: "Lauren",
          class: "Aftercare & Administration",
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
  width: 217px;
  height: 324px;
  border: 2px solid black;
  border-radius: 50%;
}

.t-class {
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
