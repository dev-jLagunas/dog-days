<script setup>
import { ref } from "vue";
import CommunityContent from "@/components/communitySection/communityContent/CommunityContent.vue";
import TheCallBtn from "../reusableComponents/TheCallBtn.vue";
import SectionTitles from "@/components/reusableComponents/SectionTitles.vue";

//Props Content
const sectionTitle = ref("Community");
const sectionInfo = ref(
  " Menifee has always been home, and I am proud to provide loving care to the furry friends of our wonderful community."
);
</script>

<template>
  <section class="community-landing-container content-container">
    <SectionTitles :section-title="sectionTitle" :section-info="sectionInfo" />
    <CommunityContent />
    <div class="community-content-footer-wrapper">
      <p class="community-footer-text">
        Every pet deserves love and care as unique as they are. That is my
        promise to you.
      </p>
      <TheCallBtn />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.community-landing-container {
  margin-block: $spacing-section;
  text-align: center;
}

.community-content-footer-wrapper {
  margin-top: $spacing-reg;
}

.community-footer-text {
  font-size: $font-reg;
}

@media (width >= 1024px) {
  .community-footer-text {
    font-size: $font-md;
  }
}
</style>
