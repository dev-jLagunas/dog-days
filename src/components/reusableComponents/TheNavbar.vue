<script setup></script>

<template>
  <nav class="content-container">
    <ul class="the-navbar-container">
      <li class="the-navbar-item">
        <router-link
          to="/"
          class="the-navbar-link"
          active-class="nav-link-active"
          >Home</router-link
        >
      </li>
      <li class="the-navbar-item">
        <router-link
          to="/about"
          class="the-navbar-link"
          active-class="nav-link-active"
          >About</router-link
        >
      </li>
      <li class="the-navbar-item">
        <router-link
          to="/contact"
          class="the-navbar-link"
          active-class="nav-link-active"
          >Contact</router-link
        >
      </li>
      <li class="the-navbar-item">
        <router-link
          to="/gallery"
          class="the-navbar-link"
          active-class="nav-link-active"
          >Gallery</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
//Mobile First Styles
.the-navbar-container {
  display: flex;
  justify-content: space-around;
  font-size: $font-md;
  width: $full-width;

  .the-navbar-item {
    @include highlight-style($primary-orange);
  }

  .nav-link-active {
    border-bottom: 3px solid $primary-orange;
  }
}
</style>
