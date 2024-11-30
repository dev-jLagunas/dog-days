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
  <ul
    :class="['the-sidenav-container', { 'is-open': isOpen }]"
    @click.self="emit('close')"
  >
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
  </ul>
</template>

<style lang="scss" scoped>
.the-sidenav-container {
  @include flex-column-center;
  justify-content: center;
  gap: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: $primary-white;
  transition: transform 0.3s ease-in-out; /* Smooth animation */
  z-index: 1000;
  transform: translateX(100%); /* Hidden by default */

  /* When the sidenav is open */
  &.is-open {
    transform: translateX(0); /* Slide in */
  }

  .the-sidenav-item {
    font-size: 1.5rem;
  }

  .side-link-active {
    border-bottom: 3px solid $primary-orange;
  }
}

// Custom Highlight Style
li {
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: $primary-orange;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
}
</style>
