<script setup>
import forestWalk from "@/assets/images/forest-walk.webp";
import cityWalk from "@/assets/images/city-walk.webp";
import dogLook from "@/assets/images/dog-leashed.webp";
import pawPrint from "@/assets/svgs/paw-print.svg";
import ownerDrawing from "@/assets/images/harrison-drawing.webp";
</script>

<template>
  <div class="hero-content-container">
    <!-- Owner Drawing -->
    <img
      :src="ownerDrawing"
      alt="Drawing of Harrison of dog days"
      class="hero-content-owner-img"
    />

    <!-- Tagline -->
    <p class="hero-content-tagline">
      Brighten your pet&rsquo;s day! The Dog Days with Harrison. Menifee, CA,
      trusted, compassionate care for furry friends.
    </p>

    <!-- Grid Images -->
    <img
      :src="forestWalk"
      alt="Scenic dog walk through forest"
      class="hero-content-img hero-content-forest-img"
      loading="lazy"
    />
    <img
      :src="pawPrint"
      alt=""
      role="presentation"
      class="hero-content-paw-img"
      loading="lazy"
    />
    <img
      :src="pawPrint"
      alt=""
      role="presentation"
      class="hero-content-paw-img"
      loading="lazy"
    />
    <img
      :src="dogLook"
      alt="A leashed dog sitting camly"
      class="hero-content-img hero-content-sitting-img"
      loading="lazy"
    />
    <img
      :src="cityWalk"
      alt="A dog walk through the city"
      class="hero-content-img hero-content-city-img"
      loading="lazy"
    />
    <img
      :src="pawPrint"
      alt=""
      role="presentation"
      class="hero-content-paw-img"
      loading="lazy"
    />
  </div>
</template>

<style lang="scss" scoped>
img {
  max-height: 200px;
  object-fit: cover;
}

.hero-content-img {
  box-shadow: $custom-shadow;
}

.hero-content-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;

  .hero-content-owner-img {
    grid-column: 1/7;
    margin-inline: auto;
    object-fit: contain;
  }

  .hero-content-paw-img {
    transform: rotate(12deg);
    object-fit: contain;
  }

  .hero-content-tagline {
    grid-column: 1/ 7;
    text-align: center;
    font-size: $font-md;
    letter-spacing: $spacing-ltr;
  }

  .hero-content-forest-img {
    grid-column: 1 / 6;
  }

  .hero-content-sitting-img {
    grid-column: 2/ 7;
  }

  .hero-content-city-img {
    grid-column: 1 / 6;
    object-position: bottom;
  }
}

@media (width >= 768px) {
  .hero-content-container {
    margin-top: $spacing-lg;
  }
}
</style>
