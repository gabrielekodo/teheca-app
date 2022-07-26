<template>
<div class="row">
  <SidebarNav></SidebarNav>
<div class="col col-md-9">
  <BaseContainer>
  <h1 >BRANCH REPORTS</h1>

  <table class="table table-striped">
        <thead class="table-dark text-light">
          <tr>
            <th scope="col">Produce</th>
            <th scope="col"><span>Quantity Sold(kgs)</span></th>
            <th scope="col"><span>Revenue(Ugx)</span></th>
            <th scope="col">Cash (Ugx)</th>
            <th scope="col">Credit (Ugx)</th>
            <th scope="col">Amount Due (Ugx)</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">Maize</th>
            
            <td>50000</td>
            <td>34500000</td>
            <td>
              250000000
            </td>
            <td>
              100000000
            </td>
            <td>50000000</td>
          </tr>
        </tbody>
        <tfoot class="table-dark text-light">
          <tr>
            <th scope="row">OTHERS</th>
            <td>#########</td>
          </tr>
        </tfoot>
      </table>

  </BaseContainer>
</div>
</div>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import SidebarNav from './dashboard/SidebarNav.vue';

export default {
    components: { BaseContainer, SidebarNav }
}
</script>

<style>

</style>