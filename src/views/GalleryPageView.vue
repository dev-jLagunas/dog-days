<script setup>
import dogImg1 from "@/assets/images/dog-walking-img1.jpg";
import dogImg2 from "@/assets/images/dog-walking-img2.jpg";

import dogImg3 from "@/assets/images/dog-walking-img3.jpg";

import dogImg4 from "@/assets/images/dog-walking-img4.jpg";

import dogImg5 from "@/assets/images/dog-walking-img5.jpg";

import dogImg6 from "@/assets/images/dog-walking-img6.jpg";
import pawPrint from "@/assets/svgs/paw-print.svg";
</script>

<template>
  <div class="content-container gallery-content-container">
    <div class="content-hero-img-wrapper">
      <img
        :src="dogImg1"
        alt="Scenic dog walk through forest"
        class="hero-img-forest"
      />
      <img :src="pawPrint" alt="" role="presentation" class="hero-img-paw-1" />
      <img :src="pawPrint" alt="" role="presentation" class="hero-img-paw-2" />
      <img
        :src="dogImg2"
        alt="A leashed dog sitting camly"
        class="hero-img-dog"
      />
      <img
        :src="dogImg3"
        alt="A dog walk through the city"
        class="hero-img-city"
      />
      <img :src="pawPrint" alt="" role="presentation" class="hero-img-paw-3" />
    </div>
    <div class="content-hero-img-wrapper">
      <img
        :src="dogImg4"
        alt="Scenic dog walk through forest"
        class="hero-img-forest"
      />
      <img :src="pawPrint" alt="" role="presentation" class="hero-img-paw-1" />
      <img :src="pawPrint" alt="" role="presentation" class="hero-img-paw-2" />
      <img
        :src="dogImg5"
        alt="A leashed dog sitting camly"
        class="hero-img-dog"
      />
      <img
        :src="dogImg6"
        alt="A dog walk through the city"
        class="hero-img-city"
      />
      <img :src="pawPrint" alt="" role="presentation" class="hero-img-paw-3" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-hero-img-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  gap: $spacing-reg;
  margin-bottom: $spacing-reg;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}

.hero-img-forest {
  grid-column: 1 / 5;
  object-fit: cover;
}

.hero-img-paw-1,
.hero-img-paw-3 {
  transform: rotate(12deg);
}

.hero-img-paw-2 {
  transform: rotate(-12deg);
}

.hero-img-dog {
  grid-column: 2 / 6;
  object-fit: cover;
}

.hero-img-city {
  grid-column: 1 / 5;
  object-fit: cover;
  object-position: bottom;
}

@media (width >= 768px) {
  .content-hero-img-wrapper {
    img {
      max-height: 200px;
    }
  }
}
</style>
