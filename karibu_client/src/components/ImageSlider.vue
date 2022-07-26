<template>
   <div
        id="carouselExampleIndicators "
        class=" carousel slide position-relative"
        
        data-bs-ride="carousel"
      >
        <!-- <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div> -->
       
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              src="images/beans.jpg"
              class="d-block w-100"
              alt="picture of bean seeds"
            />
          </div>
          <div class="carousel-item">
            <img
              src="images/corn.jpg"
              class="d-block w-100"
              alt="picture of corn seeds"
            />
          </div>
          <div class="carousel-item">
            <img
              src="images/cowpeas.jpg"
              class="d-block w-100"
              alt="picture of green peas"
            />
          </div>
          <div class="carousel-item">
            <img
              src="images/gnuts.jpg"
              class="d-block w-100"
              alt="picture of groundnuts"
            />
          </div>
          <div class="carousel-item">
            <img
              src="images/maize1.jpeg"
              class="d-block w-100"
              alt="picture of corn seeds"
            />
          </div>
          <div class="carousel-item">
            <img
              src="images/soya.jpg"
              class="d-block w-100"
              alt="picture of soya beans"
            />
          </div>
        </div>
        

        <div class="overlay"></div>
        <WelcomeBanner />
      </div>
   
</template>

<script>
import WelcomeBanner from './WelcomeBanner.vue'
export default {
name:'ImageSlider',
components:{
    WelcomeBanner
}
}
</script>

<style scoped>
.slide{
    margin: 0;
    padding: 0;
}
.carousel-item img{
    height: 80vh;
    object-fit: cover;
}
</style>