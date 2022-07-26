<template>
  <div class="col col-md-3 sidebar">

    <div class="d-flex w-100 flex-column">
      <router-link to="/reports/cashclients">
        <a data-id="procure" class="nav-link text-light btn mb-3 ">
          Cash Clients
        </a>
      </router-link>
      <router-link to="/reports/creditclients">
        <a data-id="procure" class="nav-link text-light btn mb-3">
          Credit Clients
        </a>
      </router-link>

      <router-link to="/reports/suppliers">
        <a data-id="cash" class="nav-link text-light btn mb-3">
          Supplied Produce
        </a>
      </router-link>

      <router-link to="/reports/productslist">
        <a data-id="credit" class="nav-link text-light btn mb-3">
          Inventory
        </a>
      </router-link>
      <router-link to="/reports/branchreport">
        <a id="summary-btn" class="nav-link text-light btn mb-3"
          >Branch One reports</a
        >
      </router-link>

      <router-link to="/reports/branch-two">
        <a data-id="notification" class="nav-link text-light btn mb-3">
          Branch Two
        </a>
      </router-link>
      <router-link to="/reports/newbranch">
        <a data-id="notification" class="nav-link text-light btn mb-3">
          Create New Branch
        </a>
      </router-link>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarNav",
  components: {},
};
</script>

<style scoped>
.sidebar {
  padding: 0;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
}
a {
  color: #fff !important;
  font-size: 1.5rem;
  margin: 5px 0 !important;
  padding: 5px 10px !important;
  padding-right: 0 !important;
}
.sidebar-nav.nav-link {
  display: block;
  width: 100%;
}
.flex-column a
 {
  text-align: left;
  margin: 0.3rem 0 0;
}

/* .flex-column a:hover
 {
  border-radius: 0%;
  background-color: #1d73c9;
} */

.active-btn,.flex-column a:hover {
  border-radius: 0% !important;
  background-color: #1d73c9;
}
</style>
