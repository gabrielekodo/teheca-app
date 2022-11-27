<template>
  <div class="row">
    <div class="container col">
      <div class="row">
        <div class="col-8 card" id="reg-wrapper">
          <div class="card-header">
            <h3>New Application</h3>
            <h5>Fill in the form below with the required information.</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="addUserProfile" method="POST" id="register" class="row mb-3 g-3">
              <div class="section row">
                <div class="col-md-4">
                  <label for="username" class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="firstName"
                    v-model.trim="firstName"
                  required
                  />
                </div>
                <div class="col-md-4">
                  <label for="username" class="form-label">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="lastName"
                    v-model.trim="lastName"
                    required
                  />
                </div>

                <div class="col-md-4">
                  <label for="user-email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    v-model.trim="email"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="userphone" class="form-label">Phone Number</label>
                  <input
                    type="tel"
                    class="form-control"
                    required
                    name="phone"
                    v-model.trim="phone"
                  />
                </div>
                <div class="col-md-4">
                  <label for="userphone" class="form-label">Age</label>
                  <input
                    type="number"
                    class="form-control"
                    
                    name="age"
                    v-model.trim="age"
                  />
                </div>

                <div class="col-md-4">
                  <label for="user-password" class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="address"
                    v-model.trim="address"
                  />
                </div>

                <div class="col-md-4">
                  <label for="user-password" class="form-label"
                    >Latitudes</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="latitude"
                    v-model.trim="latitude"
                  />
                </div>

                <div class="col-md-4">
                  <label for="user-password" class="form-label"
                    >Longitude</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="longitude"
                    v-model.trim="longitude"
                  />
                </div>

                <div class="col-md-4">
                  <label for="marital" class="form-label">Marital Status</label>
                  <select
                    name="maritalStatus"
                    v-model="maritalStatus"
                    id="marital"
                    class="form-select"
                  >
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="separated">Separated</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="gender" class="form-label">Gender </label>
                  <select
                    name="gender"
                    v-model="gender"
                    id="gender"
                    class="form-select"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
              </div>
              <!-- end of bio data -->
              <!-- education background -->
              <div class="section row">
                <div class="col-12 mt-3">
                  <h4>Education Background</h4>
                </div>
                <div class="col-md-4">
                  <label for="username" class="form-label"
                    >Name of Institution</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="institution"
                    v-model.trim="institution"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="username" class="form-label"
                    >Award Received</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="award"
                    v-model.trim="award"
                  required
                  />
                </div>
                <div class="col-md-4">
                  <label for="username" class="form-label"
                    >Date of Graduation</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    name="graduationDate"
                    v-model="graduationDate"
                    
                  />
                </div>
              </div>
              <!-- end of education -->
              <!-- work experience -->
      <div class="section row">
                <div class="col-12 mt-3">
                  <div>
                    <h4>Work Experience</h4>
                    <p>2 most recent</p>
                  </div>
                  
                </div>
                <div class="col-md-6">
                  <label for="username" class="form-label"
                    >1. Organization/Company</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="organizationOne"
                    v-model.trim="organizationOne"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="username" class="form-label"
                    >Organization Location</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="organizationLocationOne"
                    v-model.trim="organizationLocationOne"
                    
                  />
                </div>
                <div class="col-md-6">
                  <label for="username" class="form-label"
                    >Job Position</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="positionOne"
                    v-model.trim="positionOne"
                    
                  />
                </div>
                <div class="col-md-6">
                  <label for="username" class="form-label"
                    >Date you started Work</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    name="workStartDateOne"
                    v-model="workStartDateOne"
                    
                  />
                </div>
                <div class="col-md-6">
                  <label for="username" class="form-label"
                    >End Date</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    name="workEndDateOne"
                    v-model="workEndDateOne"
                  
                  />
                  
                  
                  
                </div>
                <div class="col-md-12">
                  <label for="username" class="form-label"
                    >Key Duties</label
                  >
                  <textarea
                    type="text"
                    class="form-control mb-3"
                    name="dutiesOne"
                    v-model.trim="dutiesOne"
                    placeholder="Brief summary of some of your key duties"
                    required
                  />
                </div>
                

                 <div class="col-md-6 ">
                  <label for="username" class="form-label"
                    >2. Organization/Company</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="organizationTwo"
                    v-model.trim="organizationTwo"
                    
                  />
                </div>
                
                <div class="col-md-6">
                  <label for="username" class="form-label"
                    >Organization Location</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="organizationLocationTwo"
                    v-model.trim="organizationLocationTwo"
                    
                  />
                </div>
                <div class="col-md-6">
                  <label for="username" class="form-label"
                    >Job Position</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="positionTwo"
                    v-model.trim="positionTwo"
                    
                  />
                </div>
                <div class="col-md-12">
                  <label for="username" class="form-label"
                    >Key Duties</label
                  >
                  <textarea
                    type="text"
                    class="form-control"
                    name="dutiesTwo"
                    v-model.trim="dutiesTwo"
                    placeholder="Brief summary of some of your key duties"
                    
                  />
                </div>
                <div class="col-md-6">
                  <label for="username" class="form-label"
                    >Date you started Work</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    name="workStartDateTwo"
                    v-model="workStartDateTwo"
                    
                  />
                </div>
                <div class="col-md-6">
                  <label for="username" class="form-label"
                    >End Date</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    name="workEndDateTwo"
                    v-model="workEndDateTwo"
                  
                  />
                </div>
              </div>
               <div class="col-md-6">
                  <label for="username" class="form-label"
                    >Attach your CV</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    name="userCV"
                    @change="uploadFile"
                    accept=".pdf,.doc,.docx"
                  
                  />
                </div>

              <!-- end of work experience -->

              

              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  SUBMIT
                </button>
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
      age:"",
      address:"",
      latitude:"",
      longitude:"",
      maritalStatus:"",
      gender:"",
      institution:"",
      award:"",
      graduationDate:"",
      organizationOne:"",
      organizationLocationOne:"",
      positionOne:"",
      workStartDateOne:"",
      workEndDateOne:"",
      dutiesOne:"",
      organizationTwo:"",
      organizationLocationTwo:"",
      positionTwo:"",
      workStartDateTwo:"",
      workEndDateTwo:"",
      dutiesTwo:"",
      imageUrl:"",
      resumeUrl:"",
      file:"",

id:3
      
      
    };
  },
  
  methods: {
    uploadFile(){
      alert("file added")
    },
     async addUserProfile() {
      this.id=JSON.parse(localStorage.getItem("user")).id;
        const userInfo={
          firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      phone:this.phone ,
      age:this.age,
      address:this.address,
      latitude:this.latitude,
      longitude:this.longitude,
      maritalStatus:this.maritalStatus,
      gender:this.gender,
      institution:this.institution,
      award:this.award,
      graduationDate:this.graduationDate,
      organizationOne:this.organizationOne,
      organizationLocationOne:this.organizationLocationOne,
      positionOne:this.positionOne,
      workStartDateOne:this.workStartDateOne,
      workEndDateOne:this.workEndDateOne,
      dutiesOne:this.dutiesOne,
      organizationTwo:this.organizationTwo,
      organizationLocationTwo:this.organizationLocationTwo,
      positionTwo:this.positionTwo,
      workStartDateTwo:this.workStartDateTwo,
      workEndDateTwo:this.workEndDateTwo,
      dutiesTwo:this.dutiesTwo,
      imageUrl:this.imageUrl,
      resumeUrl:this.resumeUrl
        }
    
      //post request
    let response=await axios.put('http://localhost:7000/api/users/'+this.id,userInfo)
    console.log(response);
    if(response.data.status==='ok'){
      alert('submitted successfully')
      this.$router.replace("/profile/1");
    
    }
    else if(response.data.status==='fail'){
    alert("error in submitting data, try again!")
    }
    },
  },
};
</script>

<style scoped>
.card {
  margin: 30px auto;
}

.container {
  width: 1200px !important;
}
</style>
