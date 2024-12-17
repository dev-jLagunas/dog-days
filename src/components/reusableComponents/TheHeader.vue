<script setup>
import { ref } from "vue";
import TheNavbar from "@/components/reusableComponents/TheNavbar.vue";
import TheSidebar from "@/components/reusableComponents/TheSidebar.vue";
import sidebarSvg from "@/assets/svgs/sidebar-right-svgrepo-com.svg";

// Reactive Properties
const isSidenavOpen = ref(false);

// Methods
const toggleSidenav = () => {
  isSidenavOpen.value = !isSidenavOpen.value;
};
</script>

<template>
  <header class="content-container the-header-container">
    <router-link to="/" class="the-header-title-wrapper">
      <h1 class="the-header-title">The Dog Days</h1>
      <p class="the-header-subtitle">with Harrison</p>
    </router-link>

    <button class="the-header-sidenav-btn" @click="toggleSidenav">
      <img
        :src="sidebarSvg"
        alt="svg representing sidebar button"
        class="the-header-btn-svg"
      />
    </button>
    <TheSidebar :is-open="isSidenavOpen" @close="toggleSidenav" />
    <TheNavbar class="the-navbar-component" />
  </header>
</template>

<style lang="scss" scoped>
.the-header-container {
  @include flex-row-between;
  cursor: pointer;
}

.the-header-title-wrapper {
  width: $full-width;

  .the-header-title {
    font-size: $font-lg;
  }

  .the-header-subtitle {
    font-size: $font-md;
  }
}

.the-header-sidenav-btn {
  .the-header-btn-svg {
    height: 60px;
    transition: transform 0.3s ease-out;

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
}

.the-navbar-component {
  display: none;
}

@media (width >= 768px) {
  .the-header-sidenav-btn {
    display: none;
  }

  .the-navbar-component {
    display: flex;
  }
}

@media (width >= 1024px) {
  .the-header-title-wrapper {
    display: flex;
    align-items: end;
    gap: $spacing-reg;
  }
}
</style>
