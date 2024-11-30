<script setup></script>

<template>
  <ul class="sidebar-container">
    <li class="sidebar-item">
      <router-link to="/" class="nav-link" active-class="nav-link-active"
        >Home</router-link
      >
    </li>
    <li class="sidebar-item">
      <router-link to="/about" class="nav-link" active-class="nav-link-active"
        >About</router-link
      >
    </li>
    <li class="sidebar-item">
      <router-link to="/contact" class="nav-link" active-class="nav-link-active"
        >Contact</router-link
      >
    </li>
    <li class="sidebar-item">
      <router-link to="/gallery" class="nav-link" active-class="nav-link-active"
        >Gallery</router-link
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
