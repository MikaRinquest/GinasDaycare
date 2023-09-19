<template>
  <div class="form-holder">
    <form @submit.prevent="submitForm" class="form">
      <div class="input-holder">
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder="Name"
          class="input"
          required
        />
        <input
          type="text"
          name="surname"
          v-model="surname"
          placeholder="Surname"
          class="input"
          required
        />
      </div>
      <div class="input-holder">
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="Email address"
          class="input"
          required
        />
        <input
          type="tel"
          name="phone"
          v-model="phone"
          placeholder="Phone number"
          maxlength="10"
          class="input"
          required
        />
      </div>
      <div class="input-holder">
        <textarea
          name="message"
          v-model="message"
          placeholder="Please give a description on what you would like."
          class="textbox"
        ></textarea>
      </div>
      <div class="input-holder">
        <button type="submit" class="button">SUBMIT</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
    };
  },
};
</script>

<style>
.form-holder {
  margin-top: 18.72px;
  width: 50%;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-holder {
  display: flex;
  width: 80%;
  justify-content: space-evenly;
}

.input {
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
  font-size: 15px;
}

.textbox {
  width: 70%;
  height: 60px;
  font-size: 15px;
}

.input,
.textbox {
  border: none;
  border-radius: 5px;
}

.button {
  width: 25%;
  height: 30px;
  margin-top: 10px;
  font-size: 15px;
  background-color: #00b055;
  color: white;
  border: none;
}
</style>
