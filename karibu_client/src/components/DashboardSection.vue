<template>
  <div class="container-fluid row">
    <SidebarNav />

    <DashboardMainsection />
  </div>
</template>

<script>
import SidebarNav from "./dashboard/SidebarNav.vue";

export default {
  name: "DashboardSection",
  components: {
    SidebarNav,
  },
};
</script>

<style scoped>
.container-fluid {
  height: 100%;
  background: royalblue;
}
</style>
