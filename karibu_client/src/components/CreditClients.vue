<template>
  <div class="row">
    <SidebarNav></SidebarNav>
    <div class="col col-md-9">
      <h1 class="text-center mt-4">LIST OF CREDIT SALES</h1>
      <div v-if="credit.length" class="card-body">
        <table class="table table-striped">
          <thead class="table-dark text-light">
            <tr>
              <th scope="col">Customer</th>
              <th scope="col"><span>Produce</span></th>
              <th scope="col"><span> Quantity Bought(Kgs)</span></th>
              <th scope="col">Amount Paid(Ugx)</th>
              <th scope="col">Amount Due(Ugx)</th>
              <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="sale in credit" :key="sale._id">
              <th scope="row">{{ sale.customerName }}</th>
              <td>
                {{
                  sale.product ? sale.product.name : "Produce does not exist"
                }}
              </td>
              <td>{{ sale.tonnage }}</td>
              <td>{{ sale.amountPaid }}</td>
              <td>{{ sale.amountDue }}</td>
              <td>{{ sale.dueDate }}</td>
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
                <form
                  v-on:submit.prevent="deleteCreditClient(sale._id)"
                  action=""
                >
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
              <th scope="row">TOTALS</th>

              <td></td>
              <td>{{ creditTotals.totalTonnageSold }}</td>
              <td class="bg-success">{{ creditTotals.totalAmountPaid }}</td>
              <td class="bg-danger">{{ creditTotals.totalAmountDue }}</td>
              <td></td>
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
import axios from "axios";

export default {
  components: { SidebarNav },
  data() {
    return {
      value: "",
      creditTotals: {},
    };
  },
  computed: {
    credit() {
      return this.$store.getters.creditsalesList;
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/api/reports");
    this.creditTotals =( Object.assign(
      {},
      response.data.data.creditSales[0]
    ));
    // this.creditTotals =await response.data.data.creditSales[0];

    console.log(this.creditTotals.totalAmountPaid);
  },
  methods: {
    async deleteCreditClient(id) {
      // console.log(id);
      const res = await axios.delete(
        `http://localhost:3000/api/purchases/credit/customers/${id}`
      );
      console.log("deleted....", res.data);
      this.$store.dispatch("deleteCreditSale", { value: id });
    },
  },
};
</script>

<style></style>
