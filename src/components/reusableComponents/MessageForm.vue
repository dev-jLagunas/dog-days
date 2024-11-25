<script setup></script>

<template>
  <form class="msg-form-container" aria-label="Contact form">
    <p class="msg-form-tagline">Need help with your furry dog friends?</p>
    <h2 class="msg-form-title">Message Me</h2>

    <div class="msg-form-group">
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
    <div class="msg-form-group">
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
    <div class="msg-form-group">
      <label for="message" class="msg-form-label">Message:</label>
      <textarea
        id="message"
        name="message"
        class="msg-form-text-area"
        placeholder="Write your message here..."
        rows="10"
        required
      ></textarea>
    </div>
    <div class="msg-form-btn-wrapper">
      <button type="submit" class="msg-form-btn">Send</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.msg-form-container {
  @include flex-column-center;
  background: $primary-blue;
  height: max-content;
  padding-block: 2rem;
  gap: 1rem;
  position: relative;
  border-top-left-radius: 40%;
  border-bottom-right-radius: 10%;
  margin-top: 4rem;

  .msg-form-tagline {
    font-size: 1.1rem;
    font-family: $font-secondary, sans-serif;
    width: 90%;
    text-align: center;
    position: absolute;
    top: -20px;
    left: 0;
    padding-block: 5px;
    padding-inline: 5px;
    background: $primary-orange;
    color: $primary-white;
    border-radius: 5px;
    letter-spacing: 1px;
  }

  .msg-form-group {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  .msg-form-title {
    font-size: 3rem;
  }

  .msg-form-label {
    font-size: 1.3rem;
  }

  .msg-form-input {
    padding-block: 5px;
    padding-left: 5px;
    border-radius: 2px;
    border: 0;
    width: 80%;
    margin-left: 5px;
  }

  .msg-form-text-area {
    width: 80%;
    padding-left: 5px;
    padding-top: 5px;
  }

  .msg-form-btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    .msg-form-btn {
      background: $primary-orange;
      border: 0;
      font-size: 1.5rem;
      width: 10rem;
      border-radius: 5px;
      color: $primary-white;
    }
  }
}

@media (width >= 768px) {
  .msg-form-container {
    height: 90%;
    justify-content: center;
    margin-top: 0;

    .msg-form-tagline {
      font-size: 1.3rem;
      top: -10px;
      padding-block: 10px;
    }
  }
}
</style>
