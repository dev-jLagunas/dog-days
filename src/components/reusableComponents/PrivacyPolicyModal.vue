<script setup>
// Emits
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="privacy-modal-content">
    <h5>privacy content here little buddy</h5>
    <button @click="$emit('close')">close</button>
  </div>
</template>

<style lang="scss">
.privacy-modal-content {
  background: #fff;
  padding: $spacing-reg;
  border-radius: $radius-sm;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>
