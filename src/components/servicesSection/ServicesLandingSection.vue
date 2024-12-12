<script setup>
import { ref } from "vue";
import ServicesInfo from "@/components/servicesSection/servicesContent/ContentServices.vue";
import FaqsInfo from "@/components/servicesSection/servicesContent/FaqsServices.vue";
import SectionTitles from "@/components/reusableComponents/SectionTitles.vue";

//Props Content
const sectionTitle = ref("Services");
const sectionInfo = ref(
  " These are the services I offer to keep your furry friends happy, healthy, and cared for!"
);
</script>

<template>
  <div class="content-container services-landing-container">
    <SectionTitles :section-title="sectionTitle" :section-info="sectionInfo" />
    <ServicesInfo />
    <FaqsInfo />
  </div>
</template>

<style lang="scss" scoped>
.services-landing-container {
  margin-block: $spacing-section;
}
</style>
