<template>

  <button class="bg-dark" @click="logUser">Log In</button>
</template>

<script>
export default {
  props: ["title"],

  emits: ["logUser"],
  methods: {
    logUser() {
      this.$emit("auth-user");
    },
  },
};
</script>

<style scoped>
button {
  border: 1.5px solid #222;
  color: #fff;
  padding: 4px;
  margin: 5px;
  width: 100px;
  font-size: 24px;
  cursor: pointer;
  transition: all .2s ease-out;
}

button:hover{
background-color: #000 !important;
transform:scale(1.1)
}
</style>
>
