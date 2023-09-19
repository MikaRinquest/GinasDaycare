<template>
  <section class="section">
    <div class="holder">
      <div class="title-holder">
        <h1 id="title">Welcome to Gina's Daycare</h1>
      </div>
      <div class="img-holder">
        <img src="https://i.postimg.cc/KYNjyMd5/Gina-Logo-transformed.png" />
      </div>
    </div>
    <div class="info-holder">
      <div class="history">
        <h2>Our history</h2>
        <div class="p-holder">
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            culpa ad atque dignissimos nulla necessitatibus, ullam aperiam.
            Veritatis accusantium cum doloremque natus quos possimus, illo
            libero dignissimos praesentium officiis voluptatum?
          </p>
          <img
            src="https://i.postimg.cc/PqzZHHTy/crayons-1445054-1280.jpg"
            class="image"
          />
        </div>
      </div>
      <div class="classes">
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
    </div>
  </section>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  background-image: url("https://i.postimg.cc/NjzsrHHb/happy-1082921-1280.jpg");
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: auto;
  margin-top: -1%;
}

.info-holder {
  padding-left: 2%;
}

#title {
  font-weight: bold;
  font-size: 65px;
  color: ghostwhite;
}

.image {
  width: 35%;
}

.p-holder {
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
}

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
</style>
