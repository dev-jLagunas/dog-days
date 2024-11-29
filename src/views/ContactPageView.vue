<script setup>
import dogPhoneImg from "@/assets/pngs/dog-calling.png";
import dogEmailImg from "@/assets/pngs/dog-emailing.png";
import menifeeAreaImg from "@/assets/pngs/menifee-area.png";
import TheCallBtn from "@/components/reusableComponents/TheCallBtn.vue";

const contactInfo = [
  {
    label: "Phone:",
    value: "619-555-5555",
    icon: dogPhoneImg,
    alt: "Dog talking on a phone",
  },
  {
    label: "Email:",
    value: "dog.days.harrison@gmail.com",
    icon: dogEmailImg,
    alt: "Dog using a computer",
  },
  {
    label: "Location:",
    value: "Serving Menifee, CA",
    icon: menifeeAreaImg,
    alt: "Map of Menifee",
  },
];
</script>

<template>
  <div class="content-container contact-page-container">
    <h2 class="contact-page-title">Contact Me</h2>
    <div class="contact-list">
      <div
        v-for="(contact, index) in contactInfo"
        :key="index"
        class="contact-item-wrapper"
      >
        <div class="contact-info-wrapper">
          <p class="contact-label">{{ contact.label }}</p>
          <p class="contact-value">{{ contact.value }}</p>
        </div>
        <img :src="contact.icon" :alt="contact.alt" class="contact-icon" />
      </div>
    </div>
    <TheCallBtn />
  </div>
</template>

<style lang="scss" scoped>
.contact-page-container {
  text-align: center;
}

.contact-page-title {
  margin-bottom: 1rem;
  font-size: 3rem;
}

.contact-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-icon {
  width: 60%;
}

.contact-label {
  font-size: 1.5rem;
  border-bottom: 4px solid $primary-blue;
  width: max-content;
  margin-inline: auto;
  margin-bottom: 0.5rem;
}

.contact-value {
  font-size: 1.5rem;
}

@media (width >= 768px) {
  .contact-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 12px;
  }

  .contact-icon {
    width: 80%;
  }
}
</style>
