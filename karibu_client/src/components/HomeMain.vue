<template>
  <div class="container-fluid position-relative">
 
<ImageSlider />
    <LoginForm />
  </div>
</template>

<script>


import ImageSlider from './ImageSlider.vue'
import LoginForm from './LoginForm.vue'
export default {
  name: "HomeMain",
  components: {
    ImageSlider,
    LoginForm
    
  },
}
</script>

<style scoped>
.container-fluid {
  margin: 0;
  padding: 0;
  background-color: red;
  
}
</style>
