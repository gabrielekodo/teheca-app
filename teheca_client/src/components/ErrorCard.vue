<template>
  <div  class="position-absolute position-relative">
    <p class="text-danger">{{error ? error : 'Authentication failure'}}</p>
  <button @click="close" class="btn-primary btn position-absolute">X</button>
  </div>
</template>

<script>
export default {
  props:['error'],
    name:'ErrorCard',
    data(){
      return {

      }
    },
    methods:{
close(){
  this.$emit('close-error')
}
    }
};
</script>

<style scoped>
div{
  width: 100%;
  height: 100%;
    background-color: rgba(17, 17, 17,0.78);
    color: rgb(220, 53, 69);
}
div p{
  text-align: center;
  font-size:25px;
  margin: 150px auto;
}

button{
  right:10px;
  top: 10px;
  font-size: 1.2rem;
}
button:hover{
  background: #dc3545;
  outline: none !important;
  border: none !important;
  color: #000;
}
</style>
