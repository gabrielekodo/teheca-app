<template>
  <div class="row">
    <SideBar />
    <div id="cash" class="col card login-card">
      <div class="card-header">
        <h3>Enter Cash Sale</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitSale" class="row g-3">
          <div class="col-md-4">
            <label for="produce-name" class="form-label">Product Name</label>

            <select
              name="produce-name"
              class="form-select"
              id="branch-name"
              v-model="producename"
            >
              <option value="default">Choose Produce</option>
              <option
                v-for="product in products"
                :value="product._id"
                :data-price="product.sellPrice"
                :key="product._id"
              >
                {{ product.name }}
              </option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="price" class="form-label">Unit Price</label>

            <input
              type="number"
              class="form-control"
              id="price"
              :value="prodPrice"
              readonly="true"
              name="price"
              required
            />
          </div>

          <div class="col-md-4">
            <label for="tonnage" class="form-label">Tonnage(in kgs)</label>

            <input
              type="number"
              class="form-control"
              id="tonnage"
              v-model="tonnage"
              name="tonnage"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="amount-paid" class="form-label">Amount Paid(Ugx)</label>

            <input
              type="number"
              class="form-control"
              id="amount-paid"
              
              v-model="amountpaid"
              name="amountPaid"
              required
            />
          </div>

          <div class="col-md-6">
            <label for="branch-name" class="form-label">Branch Name</label>
            <input
              type="text"
              class="form-control"
              id="branch-name"
              :value="user.branch"
              readonly="true"
              name="branchName"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="buyer-name" class="form-label">Buyer's Name</label>

            <input
              type="text"
              class="form-control"
              id="buyer-name"
              v-model="customerName"
              name="customerName"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="contact" class="form-label">Buyer's Contact</label>

            <input
              type="tel"
              class="form-control"
              id="contact"
              name="customerContact"
              v-model="customerContact"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="date" class="form-label">Date</label>

            <input
              type="datetime-local"
              class="form-control"
              id="date"
              name="date"
              v-model="date"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="contact" class="form-label">Sale's staff</label>

            <input
              type="tel"
              class="form-control"
              id="contact"
              name="agentName"
              :value="user.name"
              readonly="true"
              required
            />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit Record</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../SideBar.vue";
import axios from 'axios'
export default {
  components: {
    SideBar,
  },
  data() {
    return {
      producename: "",
      branch: "",
      customerName: "",
      tonnage: null,
      amountpaid: null,
      customerContact: "",
      date: "",
      agent: "",
      productList: null,
      // price: null,
    };
  },
  computed: {
    prodPrice() {
      let productList = this.$store.getters.inventoryList;
      console.log(this.producename);
      console.log(productList);
      const selectedProduce = productList.find(
        (item) => item._id == this.producename
      );
      // console.log("selected produce",{...selectedProduce});
     
     const price={...selectedProduce}.sellPrice
     // return (selectedProduce.sellPrice)
// this.amountpaid=price * this.tonnage
console.log(this.amountpaid)
console.log(this.tonnage)
      return price;
    },
    // product list
    products() {
      return this.$store.getters.inventoryList;
    },
    user() {
      return this.$store.getters.authenticatedUser;
    },
  },
  methods: {
    async submitSale() {
        const sale={
          productName:this.producename,
          branch:this.branch,
          customerName:this.customerName,
          tonnage:this.tonnage,
          amountPaid:this.amountpaid,
          customerContact:this.customerContact,
          purchaseDate:this.date,
          agentName:this.agent
        }
        this.$store.commit('addCashSale',{value:sale})
        //post request
      let response=await axios.post('http://localhost:3000/api/purchases/cash/customers',sale)
      // console.log(response);
      if(response.data.status==='ok'){
        alert('sale added successfully')
      }
      else if(response.data.status==='fail'){
      alert(response.data.message)
      }
    },
  },
};
</script>

<style></style>
