<script setup>
import pawPrint from "@/assets/svgs/paw-print.svg";
</script>

<template>
  <footer class="the-footer-container content-container">
    <button class="the-footer-scroll-btn">Back To Top</button>
    <div class="the-footer-content-wrapper">
      <ul class="the-footer-nav-wrapper">
        <li class="the-navbar-item">
          <router-link
            to="/"
            class="the-footer-link"
            active-class="footer-nav-link-active"
            >Home</router-link
          >
        </li>
        <li class="the-navbar-item">
          <router-link
            to="/about"
            class="the-footer-link"
            active-class="footer-nav-link-active"
            >About</router-link
          >
        </li>
        <li class="the-navbar-item">
          <router-link
            to="/contact"
            class="the-footer-link"
            active-class="footer-nav-link-active"
            >Contact</router-link
          >
        </li>
        <li class="the-navbar-item">
          <router-link
            to="/gallery"
            class="the-footer-link"
            active-class="footer-nav-link-active"
            >Gallery</router-link
          >
        </li>
      </ul>
      <ul class="the-footer-contact-wrapper">
        <li>619-555-5555</li>
        <li>dog.days.harisson@gmail.com</li>
      </ul>
      <div class="the-footer-title-wrapper">
        <h2>The Dog Days</h2>
        <p>with Harrison</p>
      </div>
    </div>
    <button class="the-footer-privacy-btn">Privacy Policy</button>
    <p class="the-footer-copyright">@ 2024 The Dog Days. All Rights Reserved</p>
  </footer>
</template>

<style lang="scss" scoped>
.the-footer-container {
  @include flex-column;
  background: $primary-blue;
  padding: $spacing-reg;
  border-radius: $radius-sm;
  margin-bottom: $spacing-md;

  .the-footer-scroll-btn {
    width: max-content;
    padding-block: 5px;
    margin-right: auto;
    margin-bottom: $spacing-md;
  }
}

.the-footer-content-wrapper {
  @include flex-column;
  gap: $spacing-reg;

  .the-footer-nav-wrapper {
    @include flex-column;
    gap: $spacing-reg;
    font-size: $font-reg;

    .the-footer-link {
      @include highlight-style($primary-orange);
    }

    .footer-nav-link-active {
      border-bottom: 3px solid $primary-orange;
    }
  }

  .the-footer-contact-wrapper {
    @include flex-column;
    font-size: $font-reg;
  }

  .the-footer-title-wrapper {
    font-size: $font-md;
    margin-bottom: $spacing-md;
  }
}

.the-footer-privacy-btn {
  margin-bottom: $spacing-reg;
}

.the-footer-copyright {
  text-align: center;
}

@media (width >= 768px) {
  .the-footer-container {
    .the-footer-scroll-btn {
      margin-inline: auto;
    }
  }

  .the-footer-content-wrapper {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}

@media (width >= 1024px) {
  .the-footer-content-wrapper {
    .the-footer-nav-wrapper {
      flex-direction: row;
    }
  }
}
</style>
