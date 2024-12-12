<script setup>
//Props
const props = defineProps({
  sectionTitle: {
    type: String,
    required: true,
  },
  sectionInfo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="section-titles-container">
    <h2 class="section-title">{{ sectionTitle }}</h2>
    <p class="section-info">{{ sectionInfo }}</p>
  </div>
</template>

<style lang="scss">
.section-titles-container {
  text-align: center;
  margin-bottom: $spacing-md;

  .section-title {
    font-size: $font-lg;
  }

  .section-info {
    font-size: $font-reg;
  }
}

@media (width >= 768px) {
  .section-titles-container {
    .section-info {
      font-size: $font-md;
    }
  }
}
</style>
