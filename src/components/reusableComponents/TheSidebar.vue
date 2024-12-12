<script setup>
import { useRouter, useRoute } from "vue-router";

// Initialize Instances
const router = useRouter();
const route = useRoute();

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

// Emits
const emit = defineEmits(["close"]);

// Methods
const routeTo = (path) => {
  router.push(path);
  emit("close");
};

const isActive = (path) => route.path === path;
</script>

<template>
  <aside
    :class="['the-sidenav-container', { 'is-open': isOpen }]"
    @click.self="emit('close')"
  >
    <ul>
      <li
        class="the-sidenav-item"
        @click="routeTo('/')"
        :class="{ 'side-link-active': isActive('/') }"
      >
        Home
      </li>
      <li
        class="the-sidenav-item"
        @click="routeTo('/about')"
        :class="{ 'side-link-active': isActive('/about') }"
      >
        About
      </li>
      <li
        class="the-sidenav-item"
        @click="routeTo('/contact')"
        :class="{ 'side-link-active': isActive('/contact') }"
      >
        Contact
      </li>
      <li
        class="the-sidenav-item"
        @click="routeTo('/gallery')"
        :class="{ 'side-link-active': isActive('/gallery') }"
      >
        Gallery
      </li>
      <li>
        <button class="the-sidenav-item-btn" @click="emit('close')">X</button>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.the-sidenav-container {
  @include flex-column-center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  width: $full-width;
  height: 100vh;
  background-color: $primary-white;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  transform: translateX(100%);
  font-size: $font-md;

  &.is-open {
    transform: translateX(0);
  }

  .the-sidenav-item {
    @include highlight-style($primary-orange);
    margin-bottom: $spacing-reg;
    width: max-content;
  }

  .the-sidenav-item-btn {
    font-weight: bold;
    width: 100%;
    font-size: 2rem;

    &:hover {
      transform: rotate(180deg);
      transition: 1s all ease-in-out;
    }
  }

  .side-link-active {
    border-bottom: 3px solid $primary-orange;
  }
}
</style>
