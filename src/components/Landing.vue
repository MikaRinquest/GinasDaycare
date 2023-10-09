<template>
  <section id="landing">
    <h1>Our story</h1>
    <div class="landing">
      <span class="title-holder">
        <h2 class="quote">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        </h2>
        <p>- Owner</p>
      </span>
      <img
        src="https://i.postimg.cc/ydF307sx/GinaLogo.jpg"
        class="l-image"
        alt="Landing"
      />
    </div>
    <h1>Our History</h1>
    <div class="tl">
      <div class="tl-container tl-left">
        <div class="tl-content">
          <h2>2017</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="tl-container tl-right">
        <div class="tl-content">
          <h2>2016</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="tl-container tl-left">
        <div class="tl-content">
          <h2>2015</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="tl-container tl-right">
        <div class="tl-content">
          <h2>2012</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="tl-container tl-left">
        <div class="tl-content">
          <h2>2011</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="tl-container tl-right">
        <div class="tl-content">
          <h2>2007</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
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

h1 {
  padding-top: 3%;
  padding-bottom: 1%;
  text-align: center;
  font-size: 35px;
}

.landing {
  display: flex;
  justify-content: center;
  margin-top: 1%;
}

.l-image {
  width: 25%;
}

.title-holder {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.quote {
  font-style: italic;
}

#title {
  font-weight: bold;
  font-size: 65px;
  color: ghostwhite;
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

@media screen and (max-width: 600px) {
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
