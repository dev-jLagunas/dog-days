<script setup>
import MessageForm from "@/components/reusableComponents/MessageForm.vue";
import HeroImgs from "@/components/heroSection/heroContent/ContentHeroImgs.vue";
</script>

<template>
  <div class="content-hero-container">
    <HeroImgs />
    <MessageForm />
  </div>
</template>

<style lang="scss" scoped>
.content-hero-container {
  margin-block: 2rem;
}

@media (width >= 768px) {
  .content-hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: center;
  }

  .content-hero-img-wrapper {
    img {
      max-height: 200px;
    }
  }
}

@media (width >= 1024px) {
  .content-hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1600px;
    margin-inline: auto;
    gap: 2rem;
  }
}
</style>
