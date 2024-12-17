<script setup>
import { ref } from "vue";
import grandmaImg from "@/assets/pngs/sara-grandma.webp";
import boyImg from "@/assets/pngs/boy-dog.webp";
import familyImg from "@/assets/pngs/smith-family.webp";

const testimonials = ref([
  {
    name: "Sara W. & Daisy",
    text: "Harrison has been a lifesaver for Daisy and me. His kindness and patience make all the difference, and Daisy absolutely adores him! I always feel at ease knowing she’s in such caring hands.",
    image: grandmaImg,
    stars: 5,
  },
  {
    name: "Johnny & Crumb",
    text: "Harrison is the best! Crumb always gets super excited when he sees him, and Harrison even taught me some cool tricks to do with Crumb. I think Crumb likes him almost as much as me!",
    image: boyImg,
    stars: 5,
  },
  {
    name: "The Smith Family",
    text: "Our whole family loves how much care and attention he gives, and Moko always comes back happy and tired from his walks. We couldn’t ask for a better person to look after our furry family member!",
    image: familyImg,
    stars: 5,
  },
]);
</script>

<template>
  <div class="testimonials-cards-container">
    <article
      v-for="(testimonial, index) in testimonials"
      :key="index"
      class="testimonials-card-wrapper"
    >
      <div class="testimonials-card-stars-wrapper">
        <img
          src="@/assets/svgs/star-svgrepo-com.svg"
          alt="Star"
          v-for="n in testimonial.stars"
          :key="n"
          class="testimonials-card-star-img"
          loading="lazy"
        />
      </div>
      <p class="testimonials-card-text">{{ testimonial.text }}</p>
      <div class="testimonials-card-footer-wrapper">
        <img
          :src="testimonial.image"
          :alt="`Illustration of ${testimonial.name}`"
          class="testimonials-card-footer-img"
        />
        <p class="testimonials-card-footer-name">{{ testimonial.name }}</p>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.testimonials-card-wrapper {
  border: 2px solid $primary-blue;
  padding: $spacing-reg;
  margin-bottom: $spacing-reg;
  border-radius: $radius-sm;
  max-width: 400px;
  margin-inline: auto;
}

.testimonials-card-stars-wrapper {
  background: $primary-blue;
  display: flex;
  justify-content: space-evenly;
  padding-block: 5px;
  border-radius: $radius-xs;
}

.testimonials-card-text {
  text-align: center;
  margin-top: $spacing-reg;
  font-family: $font-secondary;
}

.testimonials-card-footer-img {
  @include img-settings;
  object-fit: contain;
  max-width: 400px;
}

.testimonials-card-star-img {
  height: 30px;
}

.testimonials-card-footer-name {
  font-size: $font-md;
}

@media (width >= 768px) {
  .testimonials-cards-container {
    @include grid-three-column;
    gap: $spacing-reg;
  }
}
</style>
