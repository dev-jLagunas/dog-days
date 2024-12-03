<script setup>
import TestimonialsCards from "@/components/testimonialsSection/testimonialsContent/TestimonialsCard.vue";
import TheCallBtn from "../reusableComponents/TheCallBtn.vue";
</script>

<template>
  <div class="testimonials-content-container">
    <header class="testimonials-content-header-wrapper">
      <h1 class="testimonials-header-title">Testimonials</h1>
      <p class="testimonials-header-subtitle">
        Here are some kind words from pet owners who trust me to care for their
        furry family friends
      </p>
    </header>
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
  margin-bottom: 4rem;
}

.testimonials-header-title {
  font-size: 3rem;
  letter-spacing: 3px;
}

.testimonials-header-subtitle {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.testimonials-content-footer-text {
  font-size: 1.3rem;
}
</style>
