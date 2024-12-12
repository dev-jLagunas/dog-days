<script setup>
import { ref } from "vue";
import dogSitting from "@/assets/pngs/sitting-dog.png";
import dogVisiting from "@/assets/pngs/visiting-dog.png";
import dogWalking from "@/assets/pngs/walking-dog.png";

const services = ref([
  {
    title: "Dog Walking",
    description:
      "Keep your pup happy and healthy with daily walks tailored to their energy levels and needs.",
    image: dogWalking,
  },
  {
    title: "Dog Sitting",
    description:
      "Whether for a day or a weekend, your furry friend will feel right at home with Harrison.",
    image: dogVisiting,
  },
  {
    title: "Dog Visits",
    description:
      "Perfect for busy days, Harrison will stop by to check on your pup, ensuring they are fed, played with, and cared for.",
    image: dogSitting,
  },
]);
</script>

<template>
  <div class="services-container">
    <article
      class="services-info-card-wrapper"
      v-for="service in services"
      :key="service.title"
    >
      <figure class="services-info-img-wrapper">
        <img
          :src="service.image"
          :alt="`${service.title} illustration`"
          class="services-info-card-img"
        />
      </figure>
      <h3 class="services-info-card-title">{{ service.title }}</h3>
      <p class="services-info-card-desc">{{ service.description }}</p>
    </article>
  </div>
</template>
<style lang="scss" scoped>
.services-info-card-wrapper {
  @include flex-column-center;
  text-align: center;
  margin-bottom: $spacing-reg;

  .services-info-img-wrapper {
    height: 140px;

    .services-info-card-img {
      @include img-settings;
      object-fit: contain;
    }
  }

  .services-info-card-title {
    font-size: $font-md;
    border-bottom: 4px solid $primary-blue;
    margin-bottom: 0.5rem;
  }

  .services-info-card-desc {
    font-family: $font-secondary, sans-serif;
  }
}

@media (width >= 768px) {
  .services-container {
    display: flex;
    gap: $spacing-reg;
  }
}
</style>
