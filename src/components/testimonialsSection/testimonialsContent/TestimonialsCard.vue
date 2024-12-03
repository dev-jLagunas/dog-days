<script setup>
import { ref } from "vue";
import grandmaImg from "@/assets/pngs/sara-grandma.png";
import boyImg from "@/assets/pngs/boy-dog.png";
import familyImg from "@/assets/pngs/smith-family.png";

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
  <div class="testimonials-strutural-wrapper">
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
.testimonials-content-header-wrapper {
  text-align: center;
}

.testimonials-card-wrapper {
  border: 2px solid $primary-blue;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  max-width: 400px;
  margin-inline: auto;
}

.testimonials-card-stars-wrapper {
  background: $primary-blue;
  display: flex;
  justify-content: space-evenly;
  padding-block: 2px;
  border-radius: 5px;
}

.testimonials-card-text {
  text-align: center;
  margin-top: 1rem;
  font-family: $font-secondary;
}

.testimonials-card-footer-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 400px;
}

.testimonials-card-star-img {
  height: 30px;
}

.testimonials-card-footer-name {
  font-size: 1.5rem;
}

@media (width >= 768px) {
  .testimonials-strutural-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }
}
</style>
