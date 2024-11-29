<script setup>
import TheGallery from "@/components/reusableComponents/TheGallery.vue";
</script>

<template>
  <div class="content-container gallery-content-container">
    <div>
      <TheGallery />
    </div>
    <div>
      <TheGallery />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (width >= 768px) {
  .gallery-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
