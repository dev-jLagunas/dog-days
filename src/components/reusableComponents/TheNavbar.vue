<script setup></script>

<template>
  <ul class="navbar-container">
    <li class="navbar-item">
      <router-link to="/" class="nav-link" active-class="nav-link-active"
        >Home</router-link
      >
    </li>
    <li class="navbar-item">
      <router-link to="/about" class="nav-link" active-class="nav-link-active"
        >About</router-link
      >
    </li>
    <li class="navbar-item">
      <router-link to="/contact" class="nav-link" active-class="nav-link-active"
        >Contact</router-link
      >
    </li>
    <li class="navbar-item">
      <router-link to="/gallery" class="nav-link" active-class="nav-link-active"
        >Gallery</router-link
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
//Mobile First Styles
.navbar-container {
  display: flex;
  justify-content: space-around;
  margin-top: $spacing-reg;
  text-transform: capitalize;
  font-size: $font-reg;

  .nav-link-active {
    border-bottom: 3px solid $primary-orange;
  }
}

//Desktop Styles
@media (width >= 1024px) {
  .navbar-container {
    font-size: $font-md;
  }
}

// Custom Highligth Style
li {
  position: relative;
  cursor: pointer;
}

li::before {
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

li:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
</style>
