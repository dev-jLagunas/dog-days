<script setup>
import TheNavbar from "@/components/reusableComponents/TheNavbar.vue";
import harrisonImg from "@/assets/images/harrison-drawing.png";
</script>

<template>
  <header class="hero-header-container">
    <div class="hero-header-title-wrapper">
      <h1 class="hero-header-title">The Dog Days</h1>
      <p class="hero-header-subtitle">with Harrison</p>
      <TheNavbar />
    </div>
    <img
      :src="harrisonImg"
      alt="Sketch of owner with dog"
      class="hero-header-img"
    />
    <div class="hero-header-tagline-wrapper">
      <p class="hero-header-tagline">
        Brighten your pet's day! The Dog Days with Harrison - Menifee's trusted
        compassionate dog walker and dog sitter.
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// Mobile Styles First
.hero-header-container {
  @include flex-column-center;
  text-align: center;
}

.hero-header-title-wrapper {
  min-width: $full-width;

  .hero-header-title {
    font-size: $font-lg;
  }

  .hero-header-subtitle {
    font-size: $font-md;
    color: $secondary-dark;
  }
}

.hero-header-img {
  margin-top: $spacing-md;
}

.hero-header-tagline {
  font-size: $font-reg;
  margin-top: $spacing-reg;
  color: $secondary-dark;
}

// Tablet Styles
@media (width >= 768px) {
  .hero-header-container {
    display: grid;
    grid-template-columns: 49% 1fr 33%;
    justify-items: center;
  }

  .hero-header-title-wrapper {
    width: $full-width;

    .hero-header-subtitle {
      text-align: end;
      padding-right: $spacing-reg;
    }
  }

  .hero-header-img {
    width: 150px;
    margin-top: 0;
  }

  .hero-header-tagline {
    font-size: 1.2rem;
    margin-right: $spacing-md;
  }
}

//Desktop Styles
@media (width >= 1024px) {
  .hero-header-img {
    width: 175px;
  }

  .hero-header-title-wrapper {
    .hero-header-title {
      font-size: 4.5rem;
    }
  }
}

@media (width >= 1440px) {
  .hero-header-title-wrapper {
    width: $full-width;

    .hero-header-subtitle {
      margin-right: 6rem;
    }
  }

  .hero-header-tagline {
    font-size: $font-md;
  }
}
</style>
