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
  <div class="meals-plan">
    <h2>Meal Plan</h2>
    <div class="week-holder">
      <div class="week-1">
        <h3>Week 1</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div class="we">
        <h3>Week 2</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
  <div class="daily-program">
    <h2>Daily Program</h2>
    <div class="program-holder">
      <table style="border: thin solid black">
        <thead>
          <td>Time</td>
          <td>Activity</td>
        </thead>
        <tr>
          <td>08:00 - 09:00</td>
          <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
          <td>10:00 - 11:00</td>
        </tr>
        <tr>
          <td>9:00 - 10:00</td>
          <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
        </tr>
        <tr>
          <td>10:00 - 11:00</td>
          <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</td>
        </tr>
      </table>
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

.program-holder {
  display: flex;
  justify-content: center;
}
</style>
