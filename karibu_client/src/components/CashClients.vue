<template>
  <div class="row">
    <SidebarNav></SidebarNav>
    <div class="col col-md-9">
      
        <h1 class="text-center mt-4">LIST OF CASH SALES</h1>
        <div v-if="sales.length" class="card-body">
          
            
              <table class="table table-striped">
                <thead class="table-dark text-light">
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col"><span>Product</span></th>
                    <th scope="col"><span> Quantity Bought(Kgs)</span></th>
                    <th scope="col">Paid(Ugx)</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr v-for="sale in sales" :key="sale._id">
                    <td>{{ sale.customerName }}</td>
                    <th scope="row">{{ sale.productName.name }}</th>
                    <td>{{ sale.tonnage }}</td>
                    <td>{{ sale.amountPaid }}</td>
                    <td>
                      <form v-on:submit.prevent="onEdit(sale._id)" action="">
                        <input
                          type="hidden"
                          ref="value"
                          :value="sale._id"
                          name="id"
                        />
                        <button type="submit" class="btn btn-primary">
                                                    <i class="fa fa-pencil" aria-hidden="true"></i>

                        </button>
                      </form>
                    </td>
                    <td>
                      <form v-on:submit.prevent="onDelete(sale._id)" action="">
                        <input type="hidden" :value="sale._id" name="id" />
                        <button type="submit" class="btn btn-danger">
                                                  <i class="fa fa-trash" aria-hidden="true"></i>

                        </button>
                      </form>
                    </td>
                  </tr>
                </tbody>
                <tfoot class="table-dark text-light">
                  <tr>
                    <th scope="row">TOTAL SALES </th>
                     <td></td>
              <td>{{ cashSalesTotals.totalTonnage }}</td>
              <td class="bg-success">{{ cashSalesTotals.totalRevenue }}</td>
              <td></td>
              <td></td>
              
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

import SidebarNav from "./dashboard/SidebarNav.vue";
import axios from 'axios'

export default {
  components: {  SidebarNav },
   data() {
        return {
            value: "",
            cashSalesTotals:{}
        };
    },
    computed: {
        sales() {
            return this.$store.getters.cashsalesList;
        },
    },async mounted() {
    const response = await axios.get("http://localhost:3000/api/reports");
    this.cashSalesTotals =( Object.assign(
      {},
      response.data.data.cashSales[0]
    ));
    // this.cashSalesTotals =await response.data.data.cashSales[0];

    console.log(this.cashSalesTotals.totalAmountPaid);
  },
    methods: {
     async  onDelete(id) {
            // console.log(id);
            const res = await axios.delete(
        `http://localhost:3000/api/purchases/cash/customers/${id}`
      );
      console.log(res);
            this.$store.dispatch("deleteSale", { value: id });
        },
    },
};
</script>

<style></style>
