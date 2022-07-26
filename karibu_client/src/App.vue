<template>
  <div>
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    HomePage,
  },
  data() {
    return {
      
    };
  },

  async mounted() {
    let inventory = await axios.get("http://localhost:3000/api/sales/products");
    console.log("INVENTORY",inventory.data.data);
    // this.$store.state.inventory = inventory.data.data;
    this.$store.commit('setInventory',{value:inventory.data.data})

    //Getting all cash clients
    let cash = await axios.get(
      "http://localhost:3000/api/purchases/cash/customers"
    );

    console.log(cash.data);
    //updating store with cash clients
    //  this.$store.state.cashSales = cash.data.data;
    this.$store.commit('setCashSales',{value:cash.data.data})

    //Getting all credit clients
    let credit = await axios.get(
      "http://localhost:3000/api/purchases/credit/customers"
    );

    //updating store state of credit sales
    // this.$store.state.creditSales = credit.data.data;
    console.log(credit.data.data);
    this.$store.commit('setCreditSales',{value:credit.data.data})

    //fetching all suppliers
    let procurement = await axios.get(
      "http://localhost:3000/api/purchases/suppliers"
    );

    //updating store state of credit sales
  //  this.$store.state.suppliers = procurement.data.data;
      this.$store.commit('setSuppliers',{value:procurement.data.data})

   console.log("suppliers",procurement)
  },
};
</script>

<style></style>
