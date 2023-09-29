import { createStore } from "vuex";

export default createStore({
  state: {
    email: null,
  },

  mutations: {
    setEmail: (state, email) => {
      state.email = email;
    },
  },

  actions: {
    sendEmail(context, emailBody) {
      fetch("https://gina-email.onrender.com/email", {
        method: "POST",
        body: JSON.stringify(emailBody),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => context.commit("setEmail", data));
    },
  },
});
