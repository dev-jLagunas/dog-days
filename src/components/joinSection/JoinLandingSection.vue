<script setup>
import JoinContent from "@/components/joinSection/joinContent/JoinContent.vue";
</script>

<template>
  <header class="join-content-container-header">
    <h2 class="join-header-title">Join The Pack</h2>
    <p class="join-header-subtitle">
      Join the dozens of local families who trust me to care for their furry
      friends!"
    </p>
  </header>
  <JoinContent />
</template>

<style lang="scss" scoped>
.join-content-container-header {
  text-align: center;
  margin-bottom: 2rem;
}

.join-header-title {
  font-size: 3rem;
}

.join-header-subtitle {
  font-size: 1.3rem;
}
</style>
