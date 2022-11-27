<template>
  <div class="col-md-9 profile">
    <!-- <router-view></router-view> -->
    <upload-files/>
    <h1 class="text-dark">PROFILE</h1>
  </div> 
</template>

<script>
import UploadFiles from './UploadFiles.vue'

export default {
  components: { UploadFiles },
name:'DashboardMainsection',
computed: {

}

}
</script>

<style>

</style>