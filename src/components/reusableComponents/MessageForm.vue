<script setup>
import { ref } from "vue";

// Reactive Properties
const isSubmitted = ref(false);
const hasError = ref(false);
</script>

<template>
  <form
    class="msg-form-container"
    aria-label="Contact form"
    action="https://formspree.io/f/xpwzgllk"
    method="POST"
  >
    <p class="msg-form-tagline">Need help with your furry dog friends?</p>
    <h2 class="msg-form-title">Message Me</h2>

    <div class="msg-form-group-wrapper">
      <label for="name" class="msg-form-label">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        class="msg-form-input"
        placeholder="Your Name"
        required
      />
    </div>
    <div class="msg-form-group-wrapper">
      <label for="telephone" class="msg-form-label">Phone:</label>
      <input
        type="tel"
        id="telephone"
        name="telephone"
        class="msg-form-input"
        placeholder="123-456-7890"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
        aria-describedby="phone-help"
      />
    </div>
    <div class="msg-form-group-wrapper">
      <label for="message" class="msg-form-label">Message:</label>
      <textarea
        id="message"
        name="message"
        class="msg-form-text-area"
        placeholder="Write your message here..."
        rows="10"
        minlength="20"
        required
      ></textarea>
    </div>
    <button type="submit" class="msg-form-btn">Send</button>
  </form>
</template>

<style lang="scss" scoped>
.msg-form-container {
  @include flex-column-center;
  @include custom-border;
  background: $primary-blue;
  padding-block: $spacing-md;
  gap: $spacing-reg;
  position: relative;
  margin-top: $spacing-xl;
  text-align: center;

  .msg-form-tagline {
    font-family: $font-secondary, sans-serif;
    font-size: $font-reg;
    width: 90%;
    position: absolute;
    top: -30px;
    left: 0;
    padding: $spacing-pad;
    background: $primary-orange;
    color: $primary-white;
    border-radius: $radius-sm;
  }

  .msg-form-group-wrapper {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  .msg-form-title {
    font-size: $font-lg;
  }

  .msg-form-label {
    font-size: $font-reg;
    letter-spacing: $spacing-ltr;
  }

  .msg-form-input,
  .msg-form-text-area {
    padding: $spacing-pad;
    border-radius: $radius-xs;
    border: 0;
    width: 80%;
  }

  .msg-form-btn {
    @include custom-orange-btn;

    &:hover {
      background: darken($primary-orange, 10%);
    }
  }
}

@media (width >= 768px) {
  .msg-form-container {
    height: 80%;
    justify-content: center;
    margin-top: 0;

    .msg-form-tagline {
      top: -30px;
    }

    .msg-form-text-area {
      height: 300px;
      border-radius: $radius-sm;
      border: 0;
    }
  }
}
</style>
