<script setup>
import dogPhoneImg from "@/assets/pngs/dog-calling.png";
import dogEmailImg from "@/assets/pngs/dog-emailing.png";
import menifeeAreaImg from "@/assets/pngs/menifee-area.png";
import MessageForm from "@/components/reusableComponents/MessageForm.vue";

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
    <div class="contact-list">
      <div
        v-for="(contact, index) in contactInfo"
        :key="index"
        class="contact-item-wrapper"
      >
        <p class="contact-label">{{ contact.label }}</p>
        <img :src="contact.icon" :alt="contact.alt" class="contact-icon" />
        <p class="contact-value">{{ contact.value }}</p>
      </div>
    </div>
    <MessageForm />
  </div>
</template>

<style lang="scss" scoped>
.contact-page-container {
  text-align: center;
}

.contact-item-wrapper {
  @include flex-column-center;
  margin-block: $spacing-md;
}

.contact-icon {
  width: 40%;
}

.contact-label {
  background: $primary-blue;
  color: $primary-white;
  width: max-content;
  padding: 5px $spacing-reg;
  margin-inline: auto;
  border-radius: $radius-xs;
  font-weight: bold;
  font-size: $font-base;
  margin-bottom: 0.5rem;
}

.contact-value {
  font-weight: bold;
  font-size: $font-md;
}

@media (width >= 768px) {
  .content-container {
    @include grid-two-column;
  }
}

@media (width >= 1024px) {
  .content-container {
    margin-top: $spacing-md;
  }

  .contact-icon {
    width: 40%;
    object-fit: contain;
  }

  .contact-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 90%;

    .contact-item-wrapper:nth-of-type(3) {
      grid-column: 1/3;
      height: 50%;
    }
  }
}
</style>
