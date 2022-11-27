<template>
  <div class="container-fluid position-relative">
 

    <LoginForm />
  </div>
</template>

<script>



import LoginForm from './LoginForm.vue'
export default {
  name: "HomeMain",
  components: {
    
    LoginForm
    
  },
}
</script>

<style scoped>
.container-fluid {
  margin: 0;
  padding: 0;
  
  
}
</style>
