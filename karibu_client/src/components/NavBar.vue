<template>
   <nav
    
      class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark text-light"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/"
          ><img src="/images/logo.PNG" alt="KGL logo"
        /></a>
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div v-if="this.$store.getters.isLoggedIn" class="d-flex float-end" id="navbarSupportedContent">
          
          <router-link to="/dashboard">
          <a class="nav-link text-light">Dashboard</a>
          </router-link>
           <router-link to="/">
          <a class="nav-link text-light  ">Log out</a>
        </router-link>
        </div>
      </div>
    </nav>
   
</template>

<script>

export default {
components:{
    
}
}
</script>

<style scoped>
nav{
  height: 10vh;
}

a:hover{
  background-color:#1d73c9 ;
    
}
</style>