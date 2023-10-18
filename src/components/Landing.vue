<template>
  <section id="landing">
    <h1>Our story</h1>
    <div class="landing">
      <transition appear @before-enter="beforeTitle" @enter="enter">
        <span class="title-holder">
          <h2 class="quote">
            "A good Daycare is like a second home for children."
          </h2>
        </span>
      </transition>
      <transition appear @before-enter="beforeImage" @enter="enter">
        <img
          src="https://i.postimg.cc/SR1hqSXC/Trans-Logo.png"
          class="l-image"
          alt="Landing"
        />
      </transition>
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
import gsap from "gsap";
// gsap.registerPlugin(ScrollTrigger);
export default {
  methods: {
    beforeTitle(el) {
      el.style.transform = "translateX(-100px)";
      el.style.opacity = "0";
    },
    beforeImage(el) {
      el.style.transform = "translateX(100px)";
      el.style.opacity = "0";
    },
    enter(el) {
      gsap.to(el, {
        duration: 1.5,
        x: 0,
        opacity: 1,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 3%;
  padding-bottom: 1%;
  text-align: center;
  font-size: 35px;
}

.landing {
  display: flex;
  justify-content: center;
  margin-top: 5%;
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
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .landing {
    flex-direction: column;
    align-items: center;
  }

  .title-holder {
    width: 65%;
  }

  .quote {
    font-size: 40px;
    text-align: center;
  }

  .l-image {
    width: 50%;
  }
}

/* Small devices */
@media only screen and (max-width: 600px) {
  .landing {
    flex-direction: column;
    align-items: center;
  }

  .title-holder {
    width: 85%;
  }

  .quote {
    font-size: 25px;
    text-align: center;
  }

  .l-image {
    width: 75%;
  }
}
</style>
