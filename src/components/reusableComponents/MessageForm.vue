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
  </form>
</template>

<style lang="scss" scoped>
// Mobile Styles First
.msg-form-container {
  @include flex-column-center;
  background: $primary-blue;
  border-radius: 2%;
  justify-content: center;
}
</style>
