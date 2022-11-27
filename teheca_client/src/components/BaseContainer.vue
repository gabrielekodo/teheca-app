
<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'BaseContainer'

}
</script>

<style scoped>
div{
    margin: 3rem auto;
  
  box-shadow: 2.5px 3px 5px #1a1c1e;
}
</style>

