<script setup></script>

<template>
  <form class="msg-form-container">
    <h2>Message Me</h2>
    <label for="">Name:</label>
    <input type="text" />
    <label for="">Telephone:</label>
    <input type="text" />
    <label for="">Message:</label>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button>Send</button>
    <p>Thank You!</p>
  </form>
</template>

<style lang="scss" scoped>
// Mobile Styles First
.msg-form-container {
  @include flex-column-center;
  background: $primary-blue;
  border-radius: 2%;
  justify-content: center;
  height: max-content;
  padding-block: 1rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  input {
    margin-bottom: 1rem;
  }

  button {
    background: $primary-orange;
    color: $primary-white;
    border: 0;
    padding: 5px 10px;
    margin-top: 1rem;
    font-size: 1.5rem;
    border-radius: 5px;
  }

  p {
    margin-top: 2rem;
    font-size: 1.3rem;
  }
}
</style>
