<template>
  <div class="container-fluid">

    <div class="row">
        <div class="col-12">
<router-view></router-view>

        </div>
    </div>
  </div>
</template>

<script>
export default {
name:'BodySection'
}
</script>

<style scoped>
.container-fluid{
    margin: 0 !important;
    padding: 0;
    min-height: 80vh!important;
}
</style>