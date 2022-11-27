<template>
  <div id="branch-one" class="col card text-center login-card">
    <div class="card-header">
      <h3>Branch Cash sales</h3>
    </div>
    <div v-if="sales.length" class="card-body">
      <TableContainer >
        <template>
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
                <input type="hidden" ref="value" :value="sale._id" name="id" />
                <button type="submit" class="btn btn-primary">EDIT</button>
              </form>
            </td>
            <td>
              <form v-on:submit.prevent="onDelete(sale._id)" action="">
                <input type="hidden" :value="sale._id" name="id" />
                <button type="submit" class="btn btn-danger">DEL</button>
              </form>
            </td>
          </tr>
        </tbody>
        <tfoot class="table-dark text-light">
          <tr>
            <th scope="row">TOTAL SALES MADE</th>
            <td>{{ sales.length }}</td>
          </tr>
        </tfoot>
      </table>

        </template>
      </TableContainer>

    </div>
    <div v-else class="card-body">
      <h3 class="lead mt-5 fs-4">No Items to display!</h3>
    </div>
  </div>
</template>

<script>
// import TableContainer from './TableContainer.vue';
export default {
    name: "ReportTable",
    data() {
        return {
            value: "",
        };
    },
    computed: {
        sales() {
            return this.$store.state.cashSales;
        },
    },
    methods: {
        onDelete(id) {
            // console.log(id);
            this.$store.commit("deleteSale", { value: id });
        },
    },
    // components: { TableContainer }
};
</script>

<style></style>
