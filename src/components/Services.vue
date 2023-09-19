<template>
  <div class="age-group">
    <h2>Our classes</h2>
    <div class="class-holder">
      <div class="babies">
        <img
          src="https://i.postimg.cc/PqzZHHTy/crayons-1445054-1280.jpg"
          class="grade-img"
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div class="grade-r">
        <img
          src="https://i.postimg.cc/PqzZHHTy/crayons-1445054-1280.jpg"
          class="grade-img"
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="aftercare">
        <img
          src="https://i.postimg.cc/PqzZHHTy/crayons-1445054-1280.jpg"
          class="grade-img"
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
  <div class="afercare">
    <h2>Aftercare</h2>
    <div class="p-holder">
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        culpa ad atque dignissimos nulla necessitatibus, ullam aperiam.
        Veritatis accusantium cum doloremque natus quos possimus, illo libero
        dignissimos praesentium officiis voluptatum?
      </p>
      <img
        src="https://i.postimg.cc/PqzZHHTy/crayons-1445054-1280.jpg"
        class="image"
      />
    </div>
  </div>
  <div class="meal-program">
    <h2>Meal Plan & Program</h2>
    <p>
      Click the buttons below to download a copy of our meal plan and program
      for the kids.
    </p>
    <div class="download-content">
      <a href="/Meal_plan.pdf" download class="download"> MEAL PLAN </a>
      <a href="/Program.pdf" download class="download"> PROGRAM </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text {
  max-width: 300px;
}

.grade-img {
  width: 75%;
  height: auto;
}

.class-holder {
  display: flex;
}
.week-holder {
  display: flex;
  justify-content: space-around;
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
  border: 1px solid white;
  text-decoration: none;
  color: black;
  background-color: burlywood;
  height: 20%;
  border-radius: 7px;
  padding: 15px;
  align-items: center;
}
</style>
