<template>
<div class="row container-fluid">
  <SidebarNav />
<ReportTable />
</div>
</template>

<script>
// import SideBar from '../SideBar.vue';
import ReportTable from '../ReportTable.vue';
import SidebarNav from './SidebarNav.vue';

export default {
  name: "ReportsPage",
  
  components:{
    // SideBar,
    ReportTable,
    SidebarNav
}
};
</script>

<style></style>
