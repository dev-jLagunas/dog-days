<script setup>
import { ref } from "vue";
import TestimonialsCards from "@/components/testimonialsSection/testimonialsContent/TestimonialsCard.vue";
import TheCallBtn from "../reusableComponents/TheCallBtn.vue";
import SectionTitles from "@/components/reusableComponents/SectionTitles.vue";

//Props Content
const sectionTitle = ref("Testimonials");
const sectionInfo = ref(
  "Here are some kind words from pet owners who trust me to care for their furry family friends"
);
</script>

<template>
  <div class="testimonials-content-container">
    <SectionTitles :section-title="sectionTitle" :section-info="sectionInfo" />
    <TestimonialsCards />
    <p class="testimonials-content-footer-text">
      Want to join our happy family? Call now to book your first service!
    </p>
    <TheCallBtn />
  </div>
</template>

<style lang="scss" scoped>
.testimonials-content-container {
  text-align: center;
  margin-block: $spacing-section;
}

.testimonials-content-footer-text {
  font-size: $font-reg;
}

@media (width >= 1024px) {
  .testimonials-content-footer-text {
    font-size: $font-md;
  }
}
</style>
