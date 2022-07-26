<template>
  <div class="row">
    <SideBar />
    <div id="procure" class="col card login-card">
      <div class="card-header">
        <h3>Record Received Produce Here</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="procure" class="row g-3">
          <div class="col-md-4">
            <label for="produce-name" class="form-label">Product Name</label>
            <select
              name="produceSource"
              v-model="produce"
              class="form-select"
              id="produce-name"
            >
              <option value="default" selected>Choose Produce Source</option>
              <option v-for="product in products" :value="product._id" :data-price="product.sellPrice" :key="product._id">{{product.name}}</option>
                          </select>
          </div>
          <div class="col-md-4">
            <label for="produce-type" class="form-label">Produce Type</label>
            <input
              type="text"
              class="form-control"
              id="produce-type"
              name="produce-type"
              v-model="produceType"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="produce-source" class="form-label"
              >Produce Source</label
            >
            <select
              name="produceSource"
              v-model="produceSource"
              class="form-select"
              id="produce-source"
            >
              <option value="default">Choose Produce Source</option>
              <option value="dealer">Dealer</option>
              <option value="company">Company</option>
              <option value="maganjo">Maganjo Farm</option>
              <option value="matugga">Matugga Farm</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="tonnage" class="form-label">Tonnage(in kgs)</label>
            <input
              type="number"
              class="form-control"
              id="tonnage"
              name="tonnage"
              v-model.number="tonnage"
              min="1000"
              required
            />
          </div>

          <div class="col-md-4">
            <label for="cost-price" class="form-label">Cost Price(Ugx)</label>
            <input
              type="number"
              class="form-control"
              id="cost-price"
              name="costPrice"
              v-model.number="costPrice"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="selling-price" class="form-label">Selling Price</label>

            <input
              type="number"
              class="form-control"
              id="selling-price"
              name="sellingPrice"
              v-model.number="sellingPrice"
              
              
              required
            />
          </div>
          <div class="col-md-6">
            <label for="dealer-name" class="form-label">Dealer's Name</label>

            <input
              type="text"
              class="form-control"
              id="dealer-name"
              name="supplierName"
              v-model.trim="supplierName"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="branch-name" class="form-label">Branch Name</label>
            <select name="branch" v-model="branch" class="form-select" id="branch-name">
              <option value="default">Choose Branch</option>
              <option value="BA">Branch One</option>
              <option value="BC">Branch Two</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="contact" class="form-label">Dealer's Contact</label>

            <input
              type="tel"
              class="form-control"
              id="contact"
              name="supplierContact"
              v-model="supplierContact"
              required
            />
          </div>

          <div class="col-md-4">
            <label for="date" class="form-label">Date</label>
            <input
              type="datetime-local"
              class="form-control"
              id="date"
              name="purchaseDate"
              v-model="purchaseDate"
              required
            />
          </div>
          <!-- <div class="col-md-4">
            <label for="time" class="form-label">Time</label>
            <input
              type="time"
              class="form-control"
              id="time"
              name="time"
              required
            />
          </div> -->
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
  name: "ProcureSection",
  components: { SideBar },
  data(){
    return {
produce:'',
produceSource:'',
produceType:'',
tonnage:null,
purchaseDate:'',
costPrice:null,
sellingPrice:null,
supplierName:'',
branch:'',
supplierContact:'',


    }
  },
  methods:{
   async procure(){
      const newSupply={
        produce:this.produce,
produceSource:this.produceSource,
produceType:this.produceType,
tonnage:this.tonnage,
purchaseDate:this.purchaseDate,
costPrice:this.costPrice,
sellingPrice:this.sellingPrice,
supplierName:this.supplierName,
branch:this.branch,
supplierContact:this.supplierContact,
      }

      //posting newSupply
      let response = await axios.post(
      "http://localhost:3000/api/purchases/suppliers",newSupply
    );
  if(response.data.status==='ok'){
     
     this.$store.commit('addNewSupply',{value:newSupply})
  alert('successful')
}
    }
  },
   computed: {
    // product list
    products() {
      return this.$store.getters.inventoryList;
    },
  },
};
</script>

<style></style>
