<template>

<div class="row">
  <SideBar />
  <div class="col card login-card">
  <div id="procure" class="col card login-card">
          <div class="card-header">
            <h3>Add New Product To Inventory</h3>
          </div>
          <div class="card-body">
            <form v-on:submit.prevent="addProduct" class="row g-3">
              <div class="col-md-4">
                <label for="produce-name" class="form-label"
                  >Product Name</label
                >
                <input
                v-model="name"
                  type="text"
                  :class="inValid ? 'inValid' : ''"
                  class="form-control"
                  name="name"
                  id="produce-name"
                  v-on:blur="validateName"
                  required
                />
              </div>
              <div class="col-md-4">
                <label for="produce-type" class="form-label"
                  >Produce Type</label
                >
                <input
                v-model="type"
                  type="text"
                  :class="inValid ? 'inValid' : ''"
                  class="form-control"
                  id="produce-type"
                  name="productType"
                  required
                />
              </div>
              <div class="col-md-4">
                <label for="produce-code" class="form-label"
                  >Produce Code</label
                >
                <input
                v-model="code"
                  type="text"
                  :class="inValid ? 'inValid' : ''"
                  class="form-control"
                  id="produce-type"
                  name="code"
                  required
                />
              </div>

              <div class="col-md-4">
                <label for="tonnage" class="form-label">Tonnage(in kgs)</label>
                <input
                v-model="tonnage"
                  type="number"
                  :class="inValid ? 'inValid' : ''"
                  class="form-control"
                  id="tonnage"
                  name="stockQuantity"
                  min="1000"
                  required
                />
              </div>
              

              <div class="col-md-4">
                <label for="cost-price" class="form-label"
                  >Cost Price(Ugx)</label
                >
                <input
                v-model="cost"
                  type="number"
                  :class="inValid ? 'inValid' : ''"
                  class="form-control"
                  id="cost-price"
                  min="0"
                  name="costPrice"
                  required
                />
              </div>
               <div class="col-md-4">
                <label for="selling-price" class="form-label"
                  >Selling Price</label
                >

                <input
                v-model="price"
                  type="number"
                  :class="inValid ? 'inValid' : ''"
                  class="form-control"
                  id="selling-price"
                   min="0"
                  name="sellingPrice"
                                  
                  required
                />
              </div>
              
             
              
             

              
              <div class="col-12">
                <button type="submit" class="btn btn-secondary">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>

  </div>
</div>
</template>

<script>
import SideBar from '../SideBar.vue';
import axios from 'axios'
export default {
    name: "NewProduct",
    components: { SideBar },
    data(){
      return {
        name:'',
        type:'',
        code:'',
        tonnage:0,
        cost:0,
        price:0,
        inValid:false,
      }
    },
    methods:{
     async addProduct(){

      // let letters = /^[A-Za-z\s]+$/;
          // let aphaNum = /^[A-Za-z\s\d]+$/;
        //  let numbers = /^[\d]+$/;

if(!this.name.match(/^[A-Za-z\s\d]+$/)){
  alert('invalid input')
  this.inValid=true
  return
}

if(!this.type.match(/^[A-Za-z\s]+$/) || this.type =='' || this.type.lenth <=2){
  alert('fill all fields')
   this.inValid=true
  return
}
if(!this.code.match(/^[A-Za-z\s]+$/) || this.code =='' || this.code.lenth <=3){
  alert('fill all fields')
   this.inValid=true
  return
}
if(!this.cost){
  alert('cost must be a number')
   this.inValid=true
  return
}
if(!this.price){
  alert('price must be a number')
   this.inValid=true
  return
}


let product={
  name:this.name,
  productType:this.type,
  code:this.code,
  stockQuantity:this.tonnage,
  costPrice:this.cost,
  sellPrice:this.price


}
console.log(product);
  this.$store.commit('addProduct',{value:product})

let response=await axios.post('http://localhost:3000/api/sales/products',product)
console.log(response);
if(response.data.status==='ok'){
  alert('successful')
}
this.inValid=false
      },
      
    },
    computed:{
        // inValida(){
        //   return {
            
        //   }
        // }
      }
}
</script>

<style >
.inValid{
  border: 2.5px solid #ff0000 !important;
  color: #ff0000;
}
</style>