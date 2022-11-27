<template>
  <div class="card login " id="login-wrapper">
    <div class="card-header text-center text-primary">
      <h3>Login Here</h3>
    </div>

    <form @submit.prevent="onSubmit" class="d-flex flex-column">
      <input
        type="text"
        name="email"
        v-model="email"
        placeholder="email"
        id="inputEmail3"
      />

      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password"
        id="inputPassword3"
      />

      <base-button :title="login()" @auth-user="authenticateUser">
      </base-button>
      <a href="/register" class="nav-link">Have no Account? Sign up </a>
    </form>
    <SpinnerBox v-if="authPending" />
    <ErrorCard v-if="authFailure" @close-error="removeErr" :error="errMsg" />
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import ErrorCard from "./ErrorCard.vue";
import axios from "axios";
import SpinnerBox from "./SpinnerBox.vue";

export default {
  name: "LoginForm",
  
  components: {
    ErrorCard,
    BaseButton,
    SpinnerBox,
  },

  data() {
    return {
      email: "",
      password: "",
      authPending: false,
      authFailure: false,

      errMsg: null,
    };
  },
  methods: {
        login() {
      return "Log In";
    },
    removeErr() {
      this.authFailure = false;
    },
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.user = user;
      this.email = "";
      this.password = "";
      return user;
    },
    async authenticateUser() {
      this.authPending = true;

      
      await axios
        .post("http://localhost:7000/api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((Res) => {
          if (Res.data.status === "ok") {
            this.authPending = false;
            const { token, user } = Res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            this.authPending = false;
            this.authFailure = false;
            //redirect authenticated user to dashboard
            this.$router.replace("/profile");
          } else if (Res.data.status === "fail") {
            this.authPending = true;
            this.errMsg = Res.data.message;
            this.authPending = false;
            this.authFailure = true;
            this.$router.replace("/");
          }
        })
        .catch(() => {
          
          this.authFailure = true;
          this.authPending = false;
          this.$router.replace("/");
        });
    },
  },
};
</script>

<style scoped>
.card {
  margin:50px auto;
  width: 20rem;
  height: 23rem;
  border: 2px solid #000;
  background: transparent;
}

input {
  margin: 1.5rem;
  padding: 0.4rem;
  font-size: 1.3rem;
  background: transparent;
}

div button {
  margin-left: 1.5rem;
}
</style>
