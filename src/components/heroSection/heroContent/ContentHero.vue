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
    @include grid-two-column;
    margin-top: $spacing-lg;
  }

  .content-hero-img-wrapper {
    img {
      max-height: 200px;
    }
  }
}
</style>
