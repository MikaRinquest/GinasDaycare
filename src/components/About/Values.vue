<template>
  <div class="values">
    <h2 class="value-title title">Values of our Centre Management</h2>
    <div class="card-holder">
      <div
        class="card"
        v-for="card in cards"
        :key="card.id"
        :data-index="card.id"
      >
        <p>{{ card.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          value: "Faithful",
        },
        {
          id: 2,
          value: "Loving",
        },
        {
          id: 3,
          value: "Kind",
        },
        {
          id: 4,
          value: "Trustworthy",
        },
        {
          id: 5,
          value: "Responsible",
        },
      ],
    };
  },
};
</script>

<style scoped>
.value-title {
  text-align: center;
}

.card-holder {
  display: flex;
  justify-content: center;
  padding-top: 3%;
}

.card {
  width: 120px;
  aspect-ratio: 1/1;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: goldenrod;
  color: black;
  font-weight: bold;
  justify-content: center;
  margin-right: 5%;
  margin-bottom: 3%;
  transition: all 0.4s ease;
}

.card:hover {
  transform: scale(1.5);
}

@media only screen and (min-width: 770px) and (max-width: 1000px) {
  .card-holder {
    flex-wrap: wrap;
  }

  .card {
    width: 200px;
  }

  .card:hover {
    transform: scale(1.2);
    margin-right: 6%;
    margin-bottom: 6%;
    margin-top: 3%;
  }
}

@media only screen and (min-width: 600px) and (max-width: 800px) {
  .card-holder {
    flex-wrap: wrap;
  }

  .card {
    width: 200px;
  }
  .card:hover {
    transform: scale(1.2);
    margin-right: 6%;
    margin-bottom: 6%;
    margin-top: 3%;
  }
}

@media only screen and (max-width: 600px) {
  .card-holder {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 200px;
  }

  .card:hover {
    transform: scale(1.1);
    margin-top: 3%;
    margin-bottom: 6%;
  }
}
</style>
