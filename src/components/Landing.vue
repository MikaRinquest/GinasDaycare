<template>
  <section class="section">
    <div class="holder">
      <div class="title-holder"></div>
    </div>
    <div class="info-holder">
      <div class="history">
        <div class="p-holder">
          <div>
            <h2>Our History</h2>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur culpa ad atque dignissimos nulla necessitatibus, ullam
              aperiam. Veritatis accusantium cum doloremque natus quos possimus,
              illo libero dignissimos praesentium officiis voluptatum?
            </p>
          </div>
          <img src="https://i.postimg.cc/VsnNqq0G/Pic-4.jpg" class="image" />
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
  background-image: url("https://i.postimg.cc/Jh6Mk83W/Landing-gina.png");
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
  width: 25%;
}

.p-holder {
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1%;
}

.text {
  max-width: 400px;
}

.babies,
.toddlers,
.aftercare,
.extra-mural {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grade-img {
  width: 75%;
  height: 70%;
}

.grade-text {
  width: 250px;
  text-align: center;
}

.class-holder {
  display: flex;
}
</style>
