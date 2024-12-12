<script setup>
import { ref } from "vue";
import JoinContent from "@/components/joinSection/joinContent/JoinContent.vue";
import SectionTitles from "@/components/reusableComponents/SectionTitles.vue";

//Props Content
const sectionTitle = ref("Join the Pack");
const sectionInfo = ref(
  "Join the dozens of local families who trust me to care for their furry friends!"
);
</script>

<template>
  <div class="join-landing-container">
    <SectionTitles :section-title="sectionTitle" :section-info="sectionInfo" />
    <JoinContent />
  </div>
</template>

<style lang="scss" scoped>
.join-landing-container {
  margin-block: $spacing-section;
}
</style>
