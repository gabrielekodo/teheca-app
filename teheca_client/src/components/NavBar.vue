<template>
  <nav
    class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark text-light"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
        ><img
          src="../assets/logo.png"
          alt="teheca logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top logo"
      /></a>

      <div  class="d-flex float-end" id="navbarSupportedContent">
        <a href="/profile" class="mx-auto py-3 px-3">Profile</a>
        <button class="btn btn-warning" @click="logout">Log out</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      
    };
  },
  computed:{
    
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
nav {
  height: 10vh;
}
.logo {
  object-fit: contain;
}
a:hover {
  background-color: #499f68;
}
</style>
