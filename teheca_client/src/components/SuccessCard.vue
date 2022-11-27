<template>
  <div  class="position-absolute position-relative">
    <p class="text-success">{{msg ? msg : 'Success.........'}}</p>
  <button @click="close" class="btn-success btn position-absolute">X</button>
  </div>
</template>

<script>
export default {
  props:['msg'],
    name:'SuccessCard',
   
    methods:{
close(){
  this.$emit('close-msg')
}
    }
};
</script>

<style scoped>
div{
  width: 100%;
  height: 100%;
    background-color: rgba(17, 17, 17,0.78);
    color: rgb(3, 87, 34);
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

  outline: none !important;
  border: none !important;
  color: #000;
}
</style>
