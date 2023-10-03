<template>
  <section id="landing">
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
          <img
            src="https://i.postimg.cc/VsnNqq0G/Pic-4.jpg"
            class="image"
            alt="Our history"
          />
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
  background-image: url("https://i.postimg.cc/C1tnf8pr/landing-i-2.png");
  background-size: cover;
  background-repeat: no-repeat;
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
  margin-bottom: 1%;
}

.text {
  max-width: 400px;
  padding-top: 5%;
  padding-bottom: 5%;
}

/* Average Devices */
@media only screen and (min-width: 770px) and (max-width: 1000px) {
  .holder {
    min-height: 40vh;
    background-repeat: no-repeat;
  }

  .p-holder {
    flex-direction: column;
  }

  .text {
    max-width: 90%;
  }

  .image {
    width: 70%;
  }
}
/* Medium Devices */
@media only screen and (min-width: 600px) and (max-width: 800px) {
  .holder {
    min-height: 40vh;
    background-repeat: no-repeat;
  }

  .p-holder {
    flex-direction: column;
  }

  .text {
    max-width: 90%;
  }

  .image {
    width: 90%;
  }
}
/* Small devices */
@media only screen and (max-width: 600px) {
  .holder {
    min-height: 40vh;
    background-repeat: no-repeat;
  }
  .p-holder {
    min-height: 30vh;
    flex-direction: column;
  }

  .text {
    max-width: 95%;
  }

  .image {
    width: 95%;
  }
}
</style>
