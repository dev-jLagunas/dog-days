<script setup>
import TheHeader from "@/components/reusableComponents/TheHeader.vue";
import TheFooter from "@/components/footerSection/FooterLandingSection.vue";
</script>

<template>
  <TheHeader />
  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </router-view>
  <TheFooter />
</template>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
