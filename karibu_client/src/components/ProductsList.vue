<template>
<div class="row">
  <SidebarNav></SidebarNav>
<div class="col col-md-9">
  <h1 class="text-center mt-4">LIST OF PRODUCTS</h1>
        <div v-if="products.length" class="card-body">
          
          
              <table class="table table-striped">
                <thead class="table-dark text-light">
                  <tr>
                    <th scope="col">Produce</th>
                    <th scope="col"><span>Code</span></th>
                    <th scope="col"><span> Quantity In Stock(Kgs)</span></th>
                    <th scope="col">Cost Price(Ugx)</th>
                    <th scope="col">Selling Price(Ugx)</th>
                    <th scope="col">Availability</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr v-for="product in products" :key="product._id">
                    <td>{{ product.name }}</td>
                    <th scope="row">{{ product.code }}</th>
                    <td>{{ product.stockQuantity }}</td>
                    <td>{{ product.costPrice }}</td>
                    <td>{{ product.sellPrice }}</td>
                    <td :class="product.stockQuantity > 0 ? '':'bg-warning'">{{ product.stockQuantity > 0 ? 'Available' : 'Out of Stock' }}</td>
            
                    <td>
                      <form v-on:submit.prevent="onEdit(product._id)" action="">
                        <input
                          type="hidden"
                          ref="value"
                          :value="product._id"
                          name="id"
                        />
                        <button type="submit" class="btn btn-primary">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                      </form>
                    </td>
                    <td>
                      <form v-on:submit.prevent="deleteProduct(product._id)" action="">
                        <input type="hidden" :value="product._id" name="id" />
                        <button type="submit" class="btn btn-danger">
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </form>
                    </td>
                  </tr>
                </tbody>
                <tfoot class="table-dark text-light">
                  <tr>
                    <th scope="row">TOTAL SALES MADE</th>
                    <td>{{ products.length }}</td>
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
        products() {
          console.log('products ',this.$store.getters.inventoryList );
            return this.$store.getters.inventoryList;
        },
    },
    methods: {
       async deleteProduct(id) {
            // console.log(id);
             const res = await axios.delete(
        `http://localhost:3000/api/sales/products/${id}`
      );
      console.log("deleted....", res.data);

            this.$store.dispatch("deleteProduct", { value: id });
        },
    },
}
</script>

<style>

</style>