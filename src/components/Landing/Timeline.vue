<template>
  <div class="tl">
    <div
      class="tl-container tl-left"
      v-motion
      :initial="{
        x: -100,
        opacity: 0,
      }"
      :enter="{
        x: 0,
        opacity: 1,
        transition: {
          delay: 1300,
          duration: 800,
        },
      }"
    >
      <div class="tl-content">
        <p class="p1">
          Gina's Day-educare was established in 2005 by Owner Georgina Lukas .
        </p>
        <p>In 2013 Gina's Day-Educare expanded.</p>
      </div>
    </div>
    <div
      class="tl-container tl-right"
      v-motion
      :initial="{
        x: 100,
        opacity: 0,
      }"
      :enter="{
        x: 0,
        opacity: 1,
        transition: {
          delay: 2100,
          duration: 800,
        },
      }"
    >
      <div class="tl-content">
        <h2 class="text-title">What we offer</h2>
        <span class="text-holder" v-for="(offer, i) in offers" :key="i">
          <p>-</p>
          <p class="text">{{ offer.text }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          text: "Classes from 0- 6 Years old.",
        },
        {
          text: "Daily Program.",
        },
        {
          text: "Menu pepared Daily by kitchen staff (Breakfast & Lunch).",
        },
        {
          text: "Potty Training.",
        },
        {
          text: "CCTV Camera on both premises.",
        },
        {
          text: "Qualified Teachers.",
        },
        {
          text: "Aftercare ( Teacher will assist with homework and reading skills, School holiday assistance aswell).",
        },
        {
          text: "Class Rooms and Play Area.",
        },
        {
          text: "Reports ( All kids are evaluated the end of the Year by Teacher).",
        },
        {
          text: "Parent Meetings.",
        },
        {
          text: "Year End Party for all kids ( includes slides & jumping Castles etc.).",
        },
        {
          text: "Year End Graduation Concert.",
        },
      ],
    };
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
.tl {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.tl::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #fff;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.tl-container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

.tl-container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: #fff;
  border: 4px solid #ff9f55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.tl-left {
  left: 0;
}

.tl-right {
  left: 50%;
}

.tl-left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid #fff;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #fff;
}

.tl-right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #fff;
  border-width: 10px 10px 10px 0;
  border-color: transparent #fff transparent transparent;
}

.tl-right::after {
  left: -16px;
}

.tl-content {
  padding: 20px 30px;
  background-color: #fff;
  position: relative;
  border-radius: 6px;
}

.p1 {
  margin-bottom: 2%;
}

.text-title {
  margin-bottom: 2%;
}

.text-holder {
  display: flex;
}

.text {
  margin-left: 5px;
}

@media screen and (max-width: 1000px) {
  p {
    font-size: 17px;
  }

  .text-holder {
    margin-top: 1%;
  }
  .tl::after {
    left: 31px;
  }

  .tl-container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .tl-container::before {
    left: 60px;
    border: medium solid #fff;
    border-width: 10px 10px 10px 0;
    border-color: transparent #fff transparent transparent;
  }

  .tl-left::after,
  .tl-right::after {
    left: 15px;
  }

  .tl-right {
    left: 0%;
  }
}
</style>
