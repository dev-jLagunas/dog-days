<script setup>
import dogImg1 from "@/assets/images/dog-walking-img1.webp";
import dogImg2 from "@/assets/images/dog-walking-img2.webp";
import dogImg3 from "@/assets/images/dog-walking-img3.webp";
import dogImg4 from "@/assets/images/dog-walking-img4.webp";
import dogImg5 from "@/assets/images/dog-walking-img5.webp";
import dogImg6 from "@/assets/images/dog-walking-img6.webp";
import pawPrint from "@/assets/svgs/paw-print.svg";
import TheCallBtn from "@/components/reusableComponents/TheCallBtn.vue";
</script>

<template>
  <div class="content-container gallery-imgs-container">
    <img :src="dogImg1" alt="shiba inu on a leash" loading="lazy" />
    <img :src="dogImg2" alt="golden retriever on a leash" loading="lazy" />
    <img :src="dogImg3" alt="poodle looking at the camera" loading="lazy" />
    <img :src="pawPrint" alt="" class="paw-print-img" loading="lazy" />
    <img :src="dogImg4" alt="black and white dog on leash" loading="lazy" />
    <img :src="dogImg5" alt="puppy looking at the camera" loading="lazy" />
    <img :src="dogImg6" alt="walking dog on a hill" loading="lazy" />
  </div>
  <p class="gallery-footer-tagline">Happy and healthy doggies everywhere!</p>
  <div class="call-btn-wrapper"><TheCallBtn /></div>
</template>

<style lang="scss" scoped>
.gallery-imgs-container {
  @include flex-column;
  gap: $spacing-reg;
  max-width: 1200px;
}

img {
  @include img-settings;
  object-fit: cover;
  box-shadow: $custom-shadow;
  max-height: 400px;
}

.paw-print-img {
  box-shadow: none;
}

.gallery-footer-tagline {
  text-align: center;
  margin-top: $spacing-md;
  font-size: $font-md;
}

.call-btn-wrapper {
  text-align: center;
}

@media (width >= 425px) {
  .gallery-imgs-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: $spacing-reg;

    .paw-print-img {
      grid-column: 1 / 4;
      object-fit: contain;
      height: 75px;
    }
  }
}
</style>
