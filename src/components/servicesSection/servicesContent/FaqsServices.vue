<script setup>
import { ref } from "vue";
import dogSvgBlack from "@/assets/svgs/dog-terrier-svgrepo-black.svg";
import dogSvgWhite from "@/assets/svgs/dog-terrier-svgrepo-white.svg";

const faqs = ref([
  {
    question: "What areas do you serve?",
    answer:
      "I proudly serve Menifee and nearby surrounding areas. If you're unsure whether your location is included, feel free to reach out!",
    icon: dogSvgBlack,
  },
  {
    question: "How do you ensure my dog is safe?",
    answer:
      "I use secure leashes, avoid high-traffic areas, and keep a close eye on your dog at all times. Your pet's safety is my top priority.",
    icon: dogSvgWhite,
  },
  {
    question: "How do I book?",
    answer:
      "You can contact me directly through the website, email, or phone to schedule a service. I'll confirm availability and discuss your pet's needs.",
    icon: dogSvgBlack,
  },
  {
    question: "What is your availability?",
    answer:
      "I'm available 7 days a week, with flexible hours to accommodate your schedule. Please book in advance for weekends or holidays.",
    icon: dogSvgWhite,
  },
  {
    question: "What happens during a dog walk?",
    answer:
      "Each walk is tailored to your dog's energy level and needs. I ensure they get exercise, fresh air, and plenty of attention.",
    icon: dogSvgBlack,
  },
  {
    question: "Are you ok with all breeds & sizes?",
    answer:
      "Yes, I welcome dogs of every energy level and size. I work closely with you to understand your dog's needs.",
    icon: dogSvgWhite,
  },
]);
</script>

<template>
  <div class="faqs-content-container">
    <h2 class="faqs-content-title">Frequently Asked Questions</h2>
    <article
      class="faqs-content-card-wrapper"
      v-for="(faq, index) of faqs"
      :key="index"
    >
      <div>
        <img
          :src="faq.icon"
          alt="Dog line illustration"
          class="faqs-content-card-img"
        />
        <h3 class="faqs-content-card-question">{{ faq.question }}</h3>
      </div>
      <p class="faqs-content-card-answer">{{ faq.answer }}</p>
    </article>
  </div>
</template>
<style lang="scss" scoped>
.faqs-content-container {
  background: $primary-blue;
  text-align: center;
  padding: $spacing-reg;
  border-radius: $radius-sm;

  .faqs-content-title {
    color: $primary-white;
    margin-bottom: $spacing-reg;
  }

  .faqs-content-card-img {
    height: 50px;
  }

  .faqs-content-card-answer {
    margin-top: 5px;
    font-family: $font-secondary;
  }
}

@media (width >= 768px) {
  .faqs-content-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-reg;
  }

  .faqs-content-title {
    grid-column: 1 / 4;
  }
}
</style>
