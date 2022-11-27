// import {createStore} from "vuex";

// export default createStore({
//   state() {
//     return {
//       cashSales: [],
//       creditSales: [],
//       inventory: [],
//       suppliers: [],
//       user: null,
//       token: null,
//     };
//   },

//   //MUTATIONS
//   mutations: {
//     setUser(state, user) {
//       state.user = user;
//     },
//     setToken(state, token) {
//       state.token = token;
//     },
//     setCashSales(state, sales) {
//       state.cashSales = sales.value;
//     },
//     setCreditSales(state, credit) {
//       state.creditSales = credit.value;
//     },
//     setInventory(state, products) {
//       state.inventory = products.value;
//     },
//     setSuppliers(state, supplies) {
//       state.suppliers = supplies.value;
//     },
//     deleteSale(state, payload) {
//       state.cashSales = state.cashSales.filter(
//         (sale) => sale._id != payload.value
//       );
//     },
//     deleteCreditSale(state, payload) {
//       state.creditSales = state.creditSales.filter(
//         (sale) => sale._id != payload.value
//       );
//     },
//     deleteSupplier(state, payload) {
//       state.suppliers = state.suppliers.filter(
//         (supplier) => supplier._id != payload.value
//       );
//     },
//     deleteProduct(state, payload) {
//       state.inventory = state.inventory.filter(
//         (item) => item._id != payload.value
//       );
//     },
//     addProduct(state, payload) {
//       state.inventory.push(payload);
//     },
//     addCashSale(state, payload) {
//       state.cashSales.push(payload);
//     },
//     addCreditSale(state, payload) {
//       state.creditSales.push(payload);
//     },
//     addNewSupply(state, payload) {
//       state.suppliers.push(payload);
//     },
//   },
//   //ACTIONS
//   actions: {
//     deleteSale(context) {
//       context.commit("deleteSale");
//     },
//     deleteProduct(context, payload) {
//       context.commit("deleteProduct", payload);
//     },
//     deleteCreditSale(context, payload) {
//       context.commit("deleteCreditSale", payload);
//     },
//   },
//   //getters
//   getters: {
//     cashsalesList(state) {
//       return state.cashSales;
//     },
   
//     authenticatedUser(state) {
//       return state.user;
//     },
//     isLoggedIn(state) {
//       return !!state.token;
//     },
//   },
// });

    

