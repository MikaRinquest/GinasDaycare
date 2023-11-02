<template>
  <section id="photos">
    <div class="memory-holder">
      <div class="memory" v-for="(memory, i) in memories" :key="i">
        <img :src="memory.img" :alt="memory.title" class="memory-img" />
        <h2 class="memory-title">{{ memory.title }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      memories: [
        {
          title: "Spring Day",
          img: "https://i.postimg.cc/SQLggZ4S/Spring.webp",
        },
        {
          title: "Year End Class Party",
          img: "https://i.postimg.cc/76RmpL9S/year-end-1.webp",
        },
        {
          title: "Movie Day",
          img: "https://i.postimg.cc/26m1Cpjy/movie.webp",
        },
        {
          title: "Pajama Day",
          img: "https://i.postimg.cc/yYLw70jz/pj.webp",
        },
        {
          title: "Dress Up Day(Doctor)",
          img: "https://i.postimg.cc/NjLZFLC2/Dress2.webp",
        },
        {
          title: "Dress Up Day(Firemen)",
          img: "https://i.postimg.cc/25ZJdMDz/Dress3.webp",
        },
        {
          title: "Dress Up Day(Police)",
          img: "https://i.postimg.cc/L87w1RGC/Dress1.webp",
        },
        {
          title: "Baking Day",
          img: "https://i.postimg.cc/Hs1N0dWj/Bake.webp",
        },
        {
          title: "Graduation Day",
          img: "https://i.postimg.cc/tJ6vWmnK/grad.webp",
        },
        {
          title: "Class Birthday",
          img: "https://i.postimg.cc/7LBRkzyW/bday.webp",
        },
        {
          title: "Class Birthday",
          img: "https://i.postimg.cc/506RNt4N/bday-2.webp",
        },
        {
          title: "Class Birthday",
          img: "https://i.postimg.cc/Pqf7940D/bday-3.webp",
        },
      ],
    };
  },
};
</script>

<style scoped>
.memory-holder {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 3%;
}

.memory {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: #dd9b61;
  border: solid 5vmin #eee;
  border-top-color: #bf8048;
  border-right-color: #a1662f;
  border-bottom-color: #a1662f;
  border-left-color: #bf8048;
  border-radius: 2px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
}

.memory:before {
  content: "";
  position: relative;
  width: 20px;
  height: 20px;
  border: 1.5px solid black;
  top: -45px;
  border-bottom: none;
  border-right: none;
  transform: rotate(45deg);
}

.memory-title {
  margin: 3%;
}

.memory-img {
  width: 300px;
  height: -webkit-fill-available;
  height: -moz-available;
  height: fit-content;
  margin-top: -20px;
}
</style>
