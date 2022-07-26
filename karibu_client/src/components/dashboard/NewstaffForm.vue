<template>
<div class="row">
  <SideBar />
  <div class="container col">
      <div class="row">
        <div class="col-12 card login" id="reg-wrapper">
          <div class="card-header">
            <h3>Create New Employee</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="addUser"  method="POST" id="register" class="row mb-3 g-3">
              <div class="col-md-6">
                <label for="username" class="form-label">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  v-model.trim="name"
                  id="username"
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
                />
              </div>

              <div class="col-md-6">
                <label for="user-password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="user-password"
                  name="password"
                    v-model.trim="password"
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
                />
              </div>
<div class="col-md-6">
                <label for="userid" class="form-label">Employee ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="userphone"
                  name="employeeID"
                v-model="employeeID"
                />
              </div>

              <div class="col-md-6">
                <label for="role" class="form-label">Role</label>
                <select name="role" v-model="role" id="role" class="form-select">
                  <option value="default">Role</option>
                  <option value="agent">Sales Attendant</option>
                  <option value="manager">Branch Manager</option>
                  <option value="director">Director</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="branch"  class="form-label">Branch</label>
                <input 
                v-if="user.role ==='director'"
                  type="text"
                  class="form-control"
                  id="branch"
                  name="branch"
                v-model="branch"
                />
                <input v-if="user.role ==='manager'"
                  type="text"
                  class="form-control"
                  id="branch"
                  name="branch"
                  
                  readonly="true"
                v-model="branch"
                />
                
                
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Create Employee</button>
              </div>
            </form>
          </div>
        </div>
          
          
        </div>
      </div>
    
</div>
</template>

<script>
import SideBar from '../SideBar.vue';
import axios from 'axios'
export default {
    name: "NewstaffForm",
    components: { SideBar },
  data(){
    return {
      name:'',
      email:'',
      phone:'',
      employeeID:'',
      role:'',
      branch:'',
      password:''
    }
  },
  computed:{
    user() {
      return this.$store.getters.authenticatedUser;
    },
  },
  methods:{
     async addUser() {
        const user={
          name:this.name,
          branch:this.branch,
          email:this.email,
          phone:this.phone,
          employeeID:this.employeeID,
          role:this.role,
          password:this.password
         
        }
      //   
      //   //post request
      let response=await axios.post('http://localhost:3000/api/auth/createUser',user)
      // console.log(response);
      if(response.data.status==='ok'){
        alert('user added successfully')
        this.$router.replace("/dashboard");

        //reset fields
        

      }
      else if(response.data.status==='fail'){
      alert(response.data.message)
      }
    },
  }
}
</script>

<style scoped>
.card{
  margin:30px auto;
}

</style>