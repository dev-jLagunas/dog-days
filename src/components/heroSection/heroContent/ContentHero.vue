<script setup>
import MessageForm from "@/components/reusableComponents/MessageForm.vue";
import HeroImgs from "@/components/heroSection/heroContent/ContentHeroImgs.vue";
</script>

<template>
  <div class="content-hero-container">
    <HeroImgs />
    <MessageForm class="msg-form-comp" />
  </div>
</template>

<style lang="scss" scoped>
@media (width >= 768px) {
  .content-hero-container {
    @include grid-two-column;
  }

  .msg-form-comp {
    margin-top: 10%;
  }
}
</style>
