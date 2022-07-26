<template>
<div class="row">
  <SideBar />
  <div id="notification" class=" col card login-card mx-3 ">
          <h1 class="text-danger card-header bg-primary">
            The following products are out of stock.
          </h1>
          <div class="container d-flex flex-wrap">
            <p class="card px-3 py-3 w-25 fs-4">Beans</p>
            <p class="card px-3 py-3 w-25 fs-4">Maize</p>
            <p class="card px-3 py-3 w-25 fs-4">Cowpeas</p>
            <p class="card px-3 py-3 w-25 fs-4">Soybeans</p>
            <p class="card px-3 py-3 w-25 fs-4">Soybeans</p>
            <p class="card px-3 py-3 w-25 fs-4">Soybeans</p>
            <p class="card px-3 py-3 w-25 fs-4">Soybeans</p>
          </div>
        </div>
</div>
</template>

<script>
import SideBar from '../SideBar.vue';
export default {
    name: "NoticeSection",
    components: { SideBar }
}
</script>

<style>

</style>