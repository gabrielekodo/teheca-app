<template>
  <div class="row">
    <SideBar />
    <div id="credit" class="col card login-card">
      <SuccessCard v-if="success" @close-msg="removeAlert" :msg="successMsg" />
      <div class="card-header">
        <h3>Credit Sale</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitCreditSale" class="row g-3">
          <div class="col-md-4">
            <label for="buyer-name" class="form-label">Buyer's Name</label>

            <input
              type="text"
              class="form-control"
              id="buyer-name"
              name="customerName"
              v-model="customerName"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="buyer-location" class="form-label"
              >Buyer's Location</label
            >

            <input
              type="text"
              class="form-control"
              id="buyer-location"
              name="customerLocation"
              v-model="customerLocation"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="buyer-id" class="form-label">ID Number(NIN)</label>

            <input
              type="text"
              class="form-control"
              id="buyer-id"
              name="nationalId"
              v-model="nationalId"
              required
            />
          </div>
          <div class="col-md-4">
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
          <div class="col-md-4">
            <label for="produce-name" class="form-label">Product Name</label>

            <select
              name="product"
              v-model="product"
              class="form-select"
              id="branch-name"
            >
              <option value="default">Choose Produce</option>
              <option
                v-for="product in products"
                :value="product._id"
                :key="product._id"
                :data-price="product.sellPrice"
              >
                {{ product.name }}
              </option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="produce-type" class="form-label">Product Type</label>

            <select
              name="produceType"
              v-model="produceType"
              class="form-select"
              id="branch-name"
            >
              <option value="default">Choose Produce Type</option>
              <option
                v-for="product in products"
                :value="product.productType"
                :key="product._id"
                :data-id="product._id"
              >
                {{ product.productType }}
              </option>
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
              required
            />
          </div>
          <div class="col-md-4">
            <label for="amount-paid" class="form-label">Amount Paid(Ugx)</label>

            <input
              type="number"
              class="form-control"
              id="amountPaid"
              name="amount"
              v-model.number="amountPaid"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="amount-due" class="form-label">Amount Due(Ugx)</label>

            <input
              type="number"
              class="form-control"
              id="amount-due"
              name="amountDue"
              v-model.number="amountDue"
              required
            />
          </div>

          <div class="col-md-4">
            <label for="branch-Name" class="form-label">Branch Name</label>

            <input
              type="text"
              class="form-control"
              id="branch-Name"
              name="branch"
              readonly="true"
              v-model="branch"
              required
            />
          </div>

          <div class="col-md-4">
            <label for="date" class="form-label">Purchase Date</label>

            <input
              type="datetime-local"
              class="form-control"
              id="date"
              name="purchaseDate"
              v-model="purchaseDate"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="due-date" class="form-label">Due Date</label>

            <input
              type="datetime-local"
              class="form-control"
              id="due-date"
              name="dueDate"
              v-model="dueDate"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="dispatch-date" class="form-label">Dispatch Date</label>

            <input
              type="datetime-local"
              class="form-control"
              id="dispatch-date"
              name="dispatchDate"
              v-model="dispatchDate"
              required
            />
          </div>
          <!-- <div class="col-md-4">
            <label for="time" class="form-label">Dispatch Time</label>

            <input
              type="datetime-local"
              class="form-control"
              id="time"
              name="dispatchtime"
              v-model="dispatchtime"
              required
            />
          </div> -->
          <div class="col-md-4">
            <label for="agent-name" class="form-label">Agent's Name</label>
 <input
              type="text"
              class="form-control"
              id="agent-name"
              readonly="true"
              name="agent"
              :value="user.name"
              required
            />
            <input
              type="hidden"
              class="form-control"
              id="agent-name"
              readonly="true"
              name="agent"
              v-model="agent"
              required
            />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-secondary">
              Submit Record
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../SideBar.vue";
import axios from "axios";
import SuccessCard from "../SuccessCard.vue";
export default {
  components: { SideBar, SuccessCard },
  data() {
    return {
      customerName: "",
      customerLocation: "",
      nationalId: "",
      customerContact: "",
      product: "",
      produceType: "",
      tonnage: "",
      amountPaid: "",
      amountDue: "",
      branch: "",
      purchaseDate: "",
      dueDate: "",
      dispatchDate: "",
      agent: "",
      successMsg: "",
      success: false,
    };
  },
  methods: {
    removeAlert() {
      this.success = false;
    },
    async submitCreditSale() {
      let user=this.$store.getters.authenticatedUser
      this.branch=user.branch
      this.agent=user._id
      const creditSale = {
        customerName: this.customerName,
        customerLocation: this.customerLocation,
        nationalId: this.nationalId,
        customerContact: this.customerContact,
        product: this.product,
        produceType: this.produceType,
        tonnage: this.tonnage,
        amountPaid: this.amountPaid,
        amountDue: this.amountDue,
        branch: this.branch,
        purchaseDate: this.purchaseDate,
        dueDate: this.dueDate,
        dispatchDate: this.dispatchDate,
        agent: this.agent,
      };

      let response = await axios.post(
        "http://localhost:3000/api/purchases/credit/customers",
        creditSale
      );
      if (response.data.status === "ok") {
        this.success = true;
        this.$store.commit("addCreditSale", { value: creditSale });
        this.successMsg = "Credit sale recorded successfully";
      } else {
        this.success = true;
        this.successMsg = response.data.message;
      }
    },
  },
  computed: {
    // product list
    products() {
      return this.$store.getters.inventoryList;
    },
    user() {
      return this.$store.getters.authenticatedUser;
    },
  },
};
</script>

<style></style>
