<template>
  <form @submit.prevent="submitForm" class="form">
    <input type="text" name="name" v-model="name" class="query" />
    <input type="email" name="email" v-model="email" class="query" />
    <textarea name="message" v-model="message" class="query"></textarea>
    <button type="submit" class="button">Send Message</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "Insert your name here.",
      email: "Insert your email address here.",
      message: "Please give a description on what you would like.",
    };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.query {
  margin-bottom: 5px;
  width: 30%;
}

.button {
  width: 10%;
}
</style>
