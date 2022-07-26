<template>
  <div class="card login position-absolute" id="login-wrapper">
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
    </form>
    <SpinnerBox  v-if="authPending" />
    <ErrorCard v-if="authFailure" @close-error="removeErr" :error="errMsg" />
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import ErrorCard from "./ErrorCard.vue";
import axios from "axios";
import { mapMutations } from "vuex";
import SpinnerBox from "./SpinnerBox.vue";

export default {
  name: "LoginForm",
  emits:['close-error'],
  components: {
    ErrorCard,
    BaseButton,
    SpinnerBox
},

  data() {
    return {
      email: "",
      password: "",
      authPending: false,
      authFailure: false,
  
      errMsg:null,
    
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    login() {
      return "Log In";
    },
    removeErr(){
      
      this.authFailure=false
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

      // console.log(onSubmit());
      await axios.post("http://localhost:3000/api/auth/login", {
        email: this.email,
        password: this.password,
      })
      .then(Res=>{
if (Res.data.token) {
        this.authPending = false;
        const { token, user } = Res.data;
        // this.authenticateUser = Object.assign({}, Res.data.user);
        console.log(user);
        this.setUser(user);
        this.setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

this.authPending = false;
//redirect authenticated user to dashboard
this.$router.push("/dashboard");

      }
      else if (Res.data.status === "fail") {
         this.authPending = true;
            this.errMsg=Res.data.message
          this.authPending = false;
         this.authFailure=true
        this.$router.replace("/");
      }
      }

      ).catch(err=>{
        // console.log(err.response.status)
        if(err.response.status===500){
          // this.authFailure= true
          this.authPending = false;
          this.errMsg="Check your network Connection"
          // this.authFailure= false

            this.authFailure = true;
          
          this.$router.replace("/");
        }
        
      })
       
      
  },
  
}}
</script>

<style scoped>
.card {
  top: 20%;
  right: 10%;
  z-index: 10001;
  width: 20rem;
  height: 20rem;
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
