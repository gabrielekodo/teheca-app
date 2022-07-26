<template>
<div class="row">
  <SidebarNav></SidebarNav>
<div class="col col-md-9">
       <h1 class="text-center mt-4">LIST OF SUPPLIERS</h1>
      <div v-if="suppliers.length" class="card-body">
        <table class="table table-striped">
          <thead class="table-dark text-light">
            <tr>
              <th scope="col">Supplier</th>
              <th scope="col">Contact</th>
              <th scope="col"><span>Produce Supplied</span></th>
              <th scope="col">Category</th>
              <th scope="col"><span> Quantity(Kgs)</span></th>
              <th scope="col">Purchase Price(Ugx)</th>
              <th scope="col">Selling Price(Ugx)</th>
              <th scope="col">Purchase Date</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="supplier in suppliers" :key="supplier._id">
              <td>{{ supplier.supplierName }}</td>
              <th >{{ supplier.supplierContact }}</th>
              <td>{{ supplier.produce ? supplier.produce.name : 'No such produce' }}</td>
              <td>{{ supplier.produceSource }}</td>
              <td>{{ supplier.tonnage }}</td>
              <td>{{ supplier.costPrice}}</td>
              <td>{{ supplier.sellingPrice}}</td>
              <td>{{ supplier.purchaseDate}}</td>
              <td>
                <form v-on:submit.prevent="onEdit(supplier._id)" action="">
                  <input
                    type="hidden"
                    ref="value"
                    :value="supplier._id"
                    name="id"
                  />
                  <button type="submit" class="btn btn-primary">
                                              <i class="fa fa-pencil" aria-hidden="true"></i>

                  </button>
                </form>
              </td>
              <td>
                <form
                  v-on:submit.prevent="deleteSupplier(supplier._id)"
                  action=""
                >
                  <input type="hidden" :value="supplier._id" name="id" />
                  <button type="submit" class="btn btn-danger">
                                              <i class="fa fa-trash" aria-hidden="true"></i>

                  </button>
                </form>
              </td>
            </tr>
          </tbody>
          <tfoot class="table-dark text-light">
            <tr>
              <th scope="row">NUMBER OF SUPPLIERS</th>
              <td class="text-success"><h3>{{ suppliers.length }}</h3></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div v-else class="card-body">
        <h3 class="lead mt-5 fs-4 text-center">No Items to display!</h3>
      </div>
    </div>

</div>

</template>

<script>

import SidebarNav from './dashboard/SidebarNav.vue';
import axios from 'axios'
export default {
    components: { SidebarNav },
    data() {
        return {
            value: "",
        };
    },
    computed: {
        suppliers() {
            return this.$store.getters.supply;
        },
    },
    methods: {
     async   deleteSupplier(id) {
            // console.log(id);
             const res = await axios.delete(
        `http://localhost:3000/api/purchases/suppliers/${id}`
      );
      console.log("deleted....", res.data);
            this.$store.commit("deleteSupplier", { value: id });
        },
    },
}
</script>

<style>

</style>