<script setup>
import TheNavbar from "@/components/reusableComponents/TheNavbar.vue";
import harrisonImg from "@/assets/images/harrison-drawing.png";
import sidebarSvg from "@/assets/svgs/sidebar-right-svgrepo-com.svg";
</script>

<template>
  <header class="header-hero-container content-container">
    <div class="header-hero-title-wrapper">
      <h1 class="header-hero-title">The Dog Days</h1>
      <p class="header-home-subtitle">with Harrison</p>
    </div>
    <img :src="sidebarSvg" alt="" class="header-hero-container-img" />
    <TheNavbar class="the-navbar" />
  </header>
</template>

<style lang="scss" scoped>
.header-hero-title {
  font-size: 3rem;
}

.header-home-subtitle {
  font-size: 1.3rem;
}

.header-hero-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-hero-container-img {
  height: 50px;
}

.the-navbar {
  display: none;
}

@media (width >= 768px) {
  .header-hero-container-img {
    display: none;
  }

  .the-navbar {
    display: flex;
  }

  .header-hero-container {
    display: grid;
    grid-template-columns: 40% 1fr;
    text-align: center;
  }
}
</style>
