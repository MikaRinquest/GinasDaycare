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
          autocomplete="on"
        />
        <input
          type="text"
          name="surname"
          v-model="surname"
          placeholder="Surname"
          class="input"
          required
          autocomplete="on"
        />
      </div>
      <div class="input-holder">
        <input
          type="email"
          name="email"
          v-model="address"
          placeholder="Email address"
          class="input"
          required
          autocomplete="on"
        />
        <input
          type="tel"
          name="phone"
          v-model="tel"
          placeholder="Phone number"
          maxlength="10"
          class="input"
          required
          autocomplete="on"
        />
      </div>
      <div class="select-holder">
        <h3 class="select">
          Please tick which age group you are applying for:
        </h3>
        <div class="checkbox-holder">
          <!-- <span class="checkbox" v-for="check in checks" :key="check.id">
            <input
              type="checkbox"
              :name="check.name"
              class="check"
              v-model="assist"
            />
            <label
              :for="check.name"
              class="label"
              @click="addCheck(check.value)"
              >{{ check.label }}</label
            >
          </span> -->
          <span class="checkbox">
            <input
              type="checkbox"
              id="babies"
              class="check"
              value=" Ages 0 - 3 Class"
              v-model="assist"
            />
            <label for="babies" class="label">Ages 0 - 3</label>
          </span>
          <span class="checkbox">
            <input
              type="checkbox"
              id="toddler"
              class="check"
              value=" Ages 3 - 4 Class"
              v-model="assist"
            />
            <label for="toddler" class="label">Ages 3 - 4</label>
          </span>
        </div>
        <div class="checkbox-holder">
          <span class="checkbox">
            <input
              type="checkbox"
              id="kid"
              class="check"
              value=" Ages 4 - 5"
              v-model="assist"
            />
            <label for="kid" class="label">Ages 4 - 5</label>
          </span>
          <span class="checkbox">
            <input
              type="checkbox"
              id="aftercare"
              class="check"
              value=" Extra Mural Class"
              v-model="assist"
            />
            <label for="aftercare" class="label">Aftercare</label>
          </span>
          <span class="checkbox">
            <input
              type="checkbox"
              id="extra"
              class="check"
              value=" Extra Mural Class"
              v-model="assist"
            />
            <label for="extra" class="label">Extra Mural Activities</label>
          </span>
        </div>
      </div>
      <div class="input-holder">
        <button type="submit" class="button" @click="send">SUBMIT</button>
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
      address: "",
      tel: "",
      assist: [],
    };
  },

  methods: {
    send() {
      const emailBody = {
        name: this.name,
        surname: this.surname,
        address: this.address,
        tel: this.tel,
        message: this.assist,
      };
      console.log(emailBody);
      this.$swal({
        icon: "success",
        text: "Your query has been sent.",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          (this.name = null),
            (this.surname = null),
            (this.address = null),
            (this.tel = null),
            (this.message = null),
            console.log("Everything deleted");
        } else {
          console.log("Nothing to report");
        }
      });
      // return this.$store.dispatch("sendEmail", emailBody);
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.input-holder {
  display: flex;
  width: 80%;
  justify-content: space-evenly;
}

.select-holder {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.input {
  margin-bottom: 10px;
  width: 40%;
  height: 40px;
  font-size: 18px;
  padding-left: 25px;
}

.select {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: left;
  width: 80%;
  padding-left: 5%;
}

.input {
  border: none;
  border-radius: 5px;
}

.checkbox-holder {
  display: flex;
  justify-content: space-evenly;
  width: 80%;
}

.checkbox {
  display: inline-flex;
  align-items: baseline;
  width: 30%;
  margin-top: 10px;
}

.check {
  transform: scale(1.5);
}

.label {
  font-size: 18px;
  padding-left: 15px;
  padding-bottom: 6px;
  font-weight: 600;
}

.button {
  width: 22%;
  height: 30px;
  margin-top: 10px;
  font-size: 15px;
  background-color: #008956;
  color: white;
  border: none;
  border-radius: 7px;
}

.button:hover {
  cursor: pointer;
  background-color: #42aa6e;
}

/* Medium Devices */
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .form,
  .input-holder {
    width: 100%;
  }
  .input-holder {
    flex-direction: column;
    align-items: center;
  }

  .select-holder {
    align-items: center;
  }

  .input {
    width: 70%;
    height: 50px;
    font-size: 20px;
  }

  .button {
    font-size: 20px;
    height: 50px;
  }
}
/* Small devices */
@media only screen and (max-width: 600px) {
  .form,
  .input-holder {
    width: 100%;
  }
  .input-holder {
    flex-direction: column;
    align-items: center;
  }

  .select-holder {
    align-items: center;
  }

  .checkbox-holder {
    flex-direction: column;
    align-items: center;
  }

  .checkbox {
    width: 50%;
  }

  .input {
    width: 70%;
    height: 45px;
    font-size: 16px;
  }

  .button {
    font-size: 16px;
    height: 45px;
  }
}
</style>
