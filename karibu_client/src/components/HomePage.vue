<template>
  <div class="home-hero d-flex flex-column">
    <NavBar />
    
    <BodySection />
    <FooterSection />
        
    </div>
</template>

<script>

import NavBar from './NavBar.vue'
import BodySection from './BodySection.vue'
import FooterSection from './FooterSection.vue'
export default {
    name: "HomePage",
    
    components:{
BodySection,
NavBar,FooterSection
    },

    }
    

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
