<template>
  <div class="meal-program">
    <h2 class="exp-title">
      Meal Plan, Stationary List, Food Contributions & Extra Mural Activities
    </h2>
    <p class="exp">
      Click the buttons below to download a copy of our Meal Plan,Stationary
      List or Extra Mural Activities for the kids.
    </p>
    <div class="download-content">
      <a href="/MENU.pdf" download class="download"> Meal Plan </a>
      <a href="/Needs_List.pdf" download class="download">
        Stationery and Food Contributions
      </a>
      <a href="/Application_form.pdf" download class="download">
        Extra Mural Activities
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.exp {
  margin-top: 5%;
  margin-bottom: 5%;
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
  font-family: "SassoonPrimary", Helvetica, Arial;
  text-decoration: none;
  color: black;
  background-color: #95adcf;
  height: 20%;
  border-radius: 7px;
  padding: 15px;
  align-items: center;
  font-weight: 600;
}

.download:hover {
  background-color: #617999;
}

@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .download-content {
    flex-direction: column;
    align-items: center;
  }

  .exp-title {
    text-align: Center;
  }

  .exp {
    text-align: center;
  }

  .download {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 27px;
    margin-bottom: 1%;
  }
}
/* Small devices */
@media only screen and (max-width: 600px) {
  .download-content {
    flex-direction: column;
    align-items: center;
  }

  .exp-title {
    text-align: Center;
  }

  .exp {
    text-align: center;
  }

  .download {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 15px;
    margin-bottom: 4%;
  }
}
</style>
