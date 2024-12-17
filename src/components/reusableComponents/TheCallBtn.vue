<script setup></script>

<template>
  <a href="tel:+16195555555" role="button" class="call-btn-content-container">
    Call Harrison Now
  </a>
</template>

<style lang="scss" scoped>
.call-btn-content-container {
  display: inline-block;
  text-decoration: none;
  border: 0;
  background: $primary-orange;
  font-size: 1.3rem;
  padding: 5px 15px;
  border-radius: 5px;
  color: $primary-white;
  margin-top: 1rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: darken($primary-orange, 10%);
  }
}
</style>
