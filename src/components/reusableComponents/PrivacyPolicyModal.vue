<script setup>
// Emits
const emit = defineEmits(["close"]);
</script>

<template>
  <article class="privacy-modal-container" @click.self="$emit('close')">
    <h2 class="privacy-modal-title">Privacy Policy</h2>
    <p class="privacy-modal-desc">
      At The Dog Days with Harrison, we respect your privacy and are committed
      to protecting the information you provide to us. This policy explains what
      we collect, why we collect it, and how we keep it safe.
    </p>
    <div class="privacy-policy-content-wrapper">
      <ul class="privacy-content-wrapper">
        <li class="privacy-content-heading">What we collect:</li>
        <li class="privacy-content-text">
          &#45; Your name, phone number, email address, and home address.
        </li>
        <li class="privacy-content-text">
          &#45; Information about your pet(e.g. name, breed, special care
          needs).
        </li>
        <li class="privacy-content-text">
          &#45; Access details such as spare keys or codes, if needed for
          service.
        </li>
      </ul>
      <ul class="privacy-content-wrapper">
        <li class="privacy-content-heading">Why we collect it:</li>
        <li class="privacy-content-text">
          &#45; Schedule and confirm appointments.
        </li>
        <li class="privacy-content-text">
          &#45; Provie personalized care for your pet.
        </li>
        <li class="privacy-content-text">
          &#45; Ensure safety and convenience during our visits.
        </li>
      </ul>
      <ul class="privacy-content-wrapper">
        <li class="privacy-content-heading">How I protect it:</li>
        <li class="privacy-content-text">
          &#45; Keys and access codes are securely stored and returned upon
          request.
        </li>
        <li class="privacy-content-text">
          &#45; Digital data is kept private and not shared with third parties.
        </li>
        <li class="privacy-content-text">
          &#45; Only I (Harrison) has access to your information
        </li>
      </ul>
    </div>
    <div class="privacy-policy-footer-wrapper">
      <h3 class="privacy-footer-heading">Contact</h3>
      <p class="privary-footer-text">
        For questions about your privacy, please contact Harrison at:
      </p>
      <p class="privary-footer-text">
        <span>Email:</span>dog.days.harrison@gmail.com
      </p>
      <p class="privary-footer-text"><span>Phone:</span>619-555-5555</p>
      <p class="privary-footer-text">
        Your trust is important, and I am committed to keeping your information
        safe while caring for your furry friends.
      </p>
    </div>
    <button @click="$emit('close')" class="privacy-modal-close-btn">
      close
    </button>
  </article>
</template>

<style lang="scss">
.privacy-modal-container {
  background: $primary-white;
  padding: $spacing-reg;
  border-radius: $radius-sm;
  width: 90%;
  max-width: 1000px;
  overflow-y: auto;
  max-height: 90vh;

  .privacy-modal-title {
    margin-top: $spacing-md;
  }

  .privacy-modal-desc {
    margin-bottom: $spacing-reg;
    font-family: $font-secondary;
  }
}

.privacy-content-wrapper {
  @include flex-column;
  margin-bottom: $spacing-reg;

  .privacy-content-heading {
    font-weight: bold;
    border-bottom: 3px solid $primary-orange;
    width: max-content;
    margin-bottom: 0.5rem;
  }

  .privacy-content-text {
    font-family: $font-secondary;
  }
}

.privacy-policy-footer-wrapper {
  .privary-footer-text {
    font-family: $font-secondary;
    margin-bottom: 0.5rem;

    span {
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
}

.privacy-modal-close-btn {
  @include custom-orange-btn;
}
</style>
