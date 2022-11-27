<template>
  <div class="col col-md-3 sidebar">
    <div class="d-flex w-100 flex-column">
      <img
        class="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZsL6PVn0SNiabAKz7js0QknS2ilJam19QQ&usqp=CAU"
        alt="name"
      />
<p>Hello </p>
      <router-link to="/apply">
        <a data-id="procure" class="nav-link text-light btn mb-3">
          Submit your CV
        </a>
      </router-link>
      <router-link to="/profile/{{id}}">
        <a data-id="procure" class="nav-link text-light btn mb-3">
          Preview Your CV
        </a>
      </router-link>

      <router-link to="/download">
        <a data-id="cash" class="nav-link text-light btn mb-3">
          Download your CV
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarNav",
  components: {},
  data() {
    return {
      id: "",
      
    };
  },
  methods: {
    mounted() {
      this.id = JSON.parse(localStorage.getItem("user")).id;
      
    },
  },
};
</script>

<style scoped>
.sidebar {
  padding: 0;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
}
a {
  color: #fff !important;
  font-size: 1.5rem;
  margin: 5px 0 !important;
  padding: 5px 10px !important;
  padding-right: 0 !important;
}
.sidebar-nav.nav-link {
  display: block;
  width: 100%;
}
.flex-column a {
  text-align: left;
  margin: 0.3rem 0 0;
}

.image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 30px auto;
}

.active-btn,
.flex-column a:hover {
  border-radius: 0% !important;
  background-color: #499f68;
}
</style>
