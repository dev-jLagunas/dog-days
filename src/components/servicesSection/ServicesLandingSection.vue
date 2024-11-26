<script setup>
import ServicesInfo from "@/components/servicesSection/servicesContent/ContentServices.vue";
import FaqsInfo from "@/components/servicesSection/servicesContent/FaqsServices.vue";
</script>

<template>
  <div class="content-container services-landing-container">
    <h1 class="header-title">Services</h1>
    <ServicesInfo />
    <FaqsInfo />
  </div>
</template>

<style lang="scss" scoped>
.services-landing-container {
  margin-bottom: 3rem;
}
.header-title {
  font-size: 3rem;
  text-align: center;
}
</style>
