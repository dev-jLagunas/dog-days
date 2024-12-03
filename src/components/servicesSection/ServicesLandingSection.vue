<script setup>
import ServicesInfo from "@/components/servicesSection/servicesContent/ContentServices.vue";
import FaqsInfo from "@/components/servicesSection/servicesContent/FaqsServices.vue";
</script>

<template>
  <div class="content-container services-landing-container">
    <h1 class="header-title">Services</h1>
    <p class="header-title-subtitle">
      These are the services I offer to keep your furry friends happy, healthy,
      and cared for!
    </p>
    <ServicesInfo />
    <FaqsInfo />
  </div>
</template>

<style lang="scss" scoped>
.services-landing-container {
  margin-block: 3rem;
}
.header-title {
  font-size: 3rem;
  text-align: center;
  letter-spacing: 3px;
}

.header-title-subtitle {
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1rem;
}
</style>
