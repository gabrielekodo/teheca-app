<template>
  <div class="container-fluid row">
    
    <div class="col-md-12 mt-1">
      <div class="container">
        <div class="header">
			hdlhshsldhsl
          <div class="full-name">
            <span class="first-name">{{ user.firstName }}</span>
            <span class="last-name">{{ user.lastName }}</span>
          </div>
          <div class="contact-info">
            <span class="email">Email: </span>
            <span class="email-val">{{ user.email }}</span>
            <span class="separator"></span>
            <span class="phone">Phone: </span>
            <span class="phone-val">{{ user.phone }}</span>
            <span class="separator"></span>
            <span class="email">Address: </span>
            <span class="phone-val">{{ user.address }}</span>
          </div>
        </div>
        <div class="details">
          <div class="section">
            <div class="section__title">Experience</div>
            <div class="section__list">
              <div class="section__list-item">
                <div class="left">
                  <div class="name">{{ user.organizationOne }}</div>
                  <div class="addr">{{ user.organizationLocationOne }}</div>
                  <div class="duration">
                    {{ new Date(user.workStartDateOne).getMonth() + 1 }}/
                    {{ new Date(user.workStartDateOne).getFullYear() }} -
                    {{ new Date(user.workEndDateOne).getMonth() + 1 }}/
                    {{ new Date(user.workEndDateOne).getFullYear() }}
                  </div>
                  <div class="name mt-1">{{ user.positionOne }}</div>
                  <div class="desc text mt-1">{{ user.dutiesOne }}</div>
                </div>
              </div>
              <div class="section__list-item">
                <div class="left">
                  <div class="name">{{ user.organizationTwo }}</div>
                  <div class="addr">{{ user.organizationLocationTwo }}</div>
                  <div class="duration">
                    {{ new Date(user.workStartDateTwo).getMonth() + 1 }}/
                    {{ new Date(user.workStartDateTwo).getFullYear() }} -
                    {{ new Date(user.workEndDateTwo).getMonth() + 1 }}/
                    {{ new Date(user.workEndDateTwo).getFullYear() }}
                  </div>
                  <div class="name mt-1">{{ user.positionTwo }}</div>
                  <div class="desc text mt-1">{{ user.dutiesTwo }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="section__title">Education</div>
            <div class="section__list">
              <div class="section__list-item">
                <div class="left">
                  <div class="name">{{ user.institution }}</div>

                  <div class="duration">
                    {{ new Date(user.graduationDate).getMonth() }}/{{
                      new Date(user.graduationDate).getFullYear()
                    }}
                  </div>
                </div>
                <div class="right">
                  <div class="name">Award</div>
                  <div class="desc">{{ user.award }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "DashboardSection",
  components: {
    
  },
  data() {
    return {
      user: null,
      id: null,
    };
  },
  async created() {
    this.id = JSON.parse(localStorage.getItem("user")).id;
    const user = await axios.get(`http://localhost:7000/api/applicants/${this.id}`);
    if (user.data) {
      this.user = user.data;
      console.log(user.data);
    }
  },
  
};
</script>

<style scoped>
.container-fluid {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  background: #eee;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
  line-height: 26px;
  padding-bottom: 50px;
}
.container {
  max-width: 700px;
  background: #fff;
  margin: 0px auto 0px;
  box-shadow: 1px 1px 2px #dad7d7;
  border-radius: 3px;
  padding: 40px;
  margin-top: 50px;
}
.header {
  margin-bottom: 30px;
}
.header .full-name {
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.header .first-name {
  font-weight: 700;
}
.header .last-name {
  font-weight: 300;
}
.header .contact-info {
  margin-bottom: 20px;
}
.header .email,
.header .phone {
  color: #999;
  font-weight: 300;
}
.header .separator {
  height: 10px;
  display: inline-block;
  border-left: 2px solid #999;
  margin: 0px 10px;
}
.header .position {
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  text-decoration: underline;
}
.details {
  line-height: 20px;
}
.details .section {
  margin-bottom: 40px;
}
.details .section:last-of-type {
  margin-bottom: 0px;
}
.details .section__title {
  letter-spacing: 2px;
  color: #54afe4;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.details .section__list-item {
  margin-bottom: 40px;
}
.details .section__list-item:last-of-type {
  margin-bottom: 0;
}
.details .left,
.details .right {
  vertical-align: top;
  display: inline-block;
}
.details .left {
  width: 60%;
}
.details .right {
  text-align: right;
  width: 39%;
}
.details .name {
  font-weight: bold;
}
.details a {
  text-decoration: none;
  color: #000;
  font-style: italic;
}
.details a:hover {
  text-decoration: underline;
  color: #000;
}
.details .skills__item {
  margin-bottom: 10px;
}
.details .skills__item .right input {
  display: none;
}
.details .skills__item .right label {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #c3def3;
  border-radius: 20px;
  margin-right: 3px;
}
.details .skills__item .right input:checked + label {
  background: #79a9ce;
}
</style>
