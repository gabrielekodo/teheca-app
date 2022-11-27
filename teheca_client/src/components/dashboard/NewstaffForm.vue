<template>
  <div class="row">
    <!-- <SideBar /> -->
    <div class="container col">
      <div class="row">
        <div class="col-12 card login" id="reg-wrapper">
          <div class="card-header">
            <h3>Create Account</h3>
          </div>
          <div class="card-body">
            <form
              @submit.prevent="addUser"
              method="POST"
              id="register"
              class="row mb-3 g-3"
            >
              <div class="col-md-6">
                <label for="username" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  v-model.trim="firstName"
                  id="username"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="username" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  v-model.trim="lastName"
                  id="username"
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="user-email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  v-model.trim="email"
                  id="user-email"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="userphone" class="form-label">Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  id="userphone"
                  name="phone"
                  v-model.trim="phone"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="userphone" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  v-model.trim="password"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="userphone" class="form-label"
                  >Confirm Password</label
                >
                <input
                  required
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  v-model.trim="confirmPassword"
                />
              </div>
              <div class="col-md-6 form-check">
                <input
                  class="form-check-input mx-2"
                  type="checkbox"
                  name="acceptedTerms"
                  value=""
                  v-model="acceptedTerms"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Tick to Accept Terms and conditions
                </label>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "NewstaffForm",

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      acceptedTerms: null,
      password: "",

      confirmPassword: "",
    };
  },
  computed: {},
  methods: {
    async addUser() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
email:this.email,
        acceptedTerms: this.acceptedTerms,
        phone: this.phone,
        confirmPassword: this.confirmPassword,
        password: this.password,
      };

      console.log(user);
      //post request
      let response=await axios.post('http://localhost:7000/api/users',user)
      console.log(response);
      if(response.data.status==='ok'){
        alert('account created successfully')
        this.$router.replace("/profile");

      }
      else if(response.data.status==='fail'){
      alert("something not right")
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin: 30px auto;
}
</style>
