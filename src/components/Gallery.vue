<template>
  <section id="photos">
    <div class="memory-holder">
      <div class="memory" v-for="(memory, i) in memories" :key="i">
        <h2>{{ memory.title }}</h2>
        <img :src="memory.img" />
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
        {
          title: "Graduation Day",
          img: "https://i.postimg.cc/tJ6vWmnK/grad.webp",
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin: 3%;
}

img {
  height: 450px;
}
</style>
