<script setup>
import harrisonImg from "@/assets/images/harisson-photo.webp";
import pawPrintSvg from "@/assets/svgs/paw-print.svg";
import TheCallBtn from "@/components/reusableComponents/TheCallBtn.vue";
</script>

<template>
  <div class="content-container about-page-container">
    <div class="about-img-wrapper">
      <img
        :src="harrisonImg"
        alt="photo of owner Harrison"
        class="about-page-img"
      />
    </div>
    <article class="about-page-info-wrapper">
      <img :src="pawPrintSvg" alt="" class="about-paw-svg" />
      <h2 class="about-page-name">I'm Harrison</h2>
      <p class="about-page-desc">
        I&#39;m a passionate and experienced dog walker and sitter based in
        Menifee, California. I&#39;ve always had a love for animals, and over
        the years, I&#39;ve turned that passion into a rewarding career by
        caring for dogs of all breeds, sizes, and energy levels. My goal is to
        provide personalized care and attention to each furry friend I meet,
        ensuring they&#39;re happy, safe, and well-exercised. Whether it&#39;s a
        daily walk, overnight sitting, or just a quick visit, I treat every dog
        as if they were my own. Seeing wagging tails and joyful pups is what
        makes this work so fulfilling for me!
      </p>
      <TheCallBtn />
    </article>
  </div>
</template>

<style lang="scss" scoped>
.about-page-container {
  text-align: center;
  margin-bottom: 2rem;
}

.about-img-wrapper {
  position: relative;
  display: inline-block;
  margin-top: $spacing-md;

  // Orange and Blue Backgrounds
  &::before {
    content: "";
    position: absolute;
    top: -2%;
    left: -1%;
    width: 90%;
    height: 90%;
    border-radius: $radius-sm;
    background-color: $primary-orange;
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2%;
    right: -1%;
    width: 90%;
    height: 90%;
    background-color: $primary-blue;
    z-index: -3;
    border-radius: $radius-sm;
  }
}
.about-page-img {
  width: 90%;
  border-radius: $radius-sm;
}

.about-page-desc {
  font-family: $font-secondary;
}

.about-paw-svg {
  height: 50px;
}

.about-page-info-wrapper {
  margin-top: $spacing-md;

  .about-page-name {
    font-size: $font-lg;
  }
}

@media (width >= 768px) {
  .about-page-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-lg;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
  }
}

@media (width >= 1024px) {
  .about-page-desc {
    font-size: $font-md;
  }
}
</style>
