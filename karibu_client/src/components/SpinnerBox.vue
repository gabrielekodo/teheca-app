<template>
  <div   class="d-flex align-items-center d-flex flex-column spinner w-100 h-100 position-absolute">
        <div class="spinner-border mb-3 mx-4" role="status" aria-hidden="true"></div>
        <strong>Authenticating...</strong>
      </div>
</template>

<script>
export default {
    name:'SpinnerBox'

}
</script>

<style scoped>
.spinner{
    justify-content: center;
    align-items: center;
    color:#fff;
     background-color: rgba(17, 17, 17,0.78);
}

</style>