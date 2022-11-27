<template>
  <div class="container-fluid row">
    <SidebarNav />
    <div class="col-md-9 mt-5">
      <UploadFiles />
    </div>
  </div>
</template>

<script>
import SidebarNav from "./dashboard/SidebarNav.vue";
import UploadFiles from "./UploadFiles.vue";

export default {
  name: "DashboardSection",
  components: {
    SidebarNav,
    UploadFiles,
  },
};
</script>

<style scoped>
.container-fluid {
  height: 100%;
}
</style>
