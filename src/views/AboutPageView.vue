<script setup>
import harrisonImg from "@/assets/images/harisson-photo.jpg";
import pawPrintSvg from "@/assets/svgs/paw-print.svg";
import TheCallBtn from "@/components/reusableComponents/TheCallBtn.vue";
</script>

<template>
  <div class="content-container about-page-container">
    <div class="about-img-wrapper">
      <img :src="harrisonImg" alt="photo of harrison" class="about-page-img" />
    </div>
    <article class="about-page-info-wrapper">
      <img :src="pawPrintSvg" alt="" class="about-paw-svg" />
      <h2 class="about-page-name">I'm Harrison</h2>
      <p class="about-page-desc">
        I’m a passionate and experienced dog walker and sitter based in Menifee,
        California. I’ve always had a love for animals, and over the years, I’ve
        turned that passion into a rewarding career by caring for dogs of all
        breeds, sizes, and energy levels. My goal is to provide personalized
        care and attention to each furry friend I meet, ensuring they’re happy,
        safe, and well-exercised. Whether it’s a daily walk, overnight sitting,
        or just a quick visit, I treat every dog as if they were my own. Seeing
        wagging tails and joyful pups is what makes this work so fulfilling for
        me!
      </p>
      <TheCallBtn />
      <div class="routing-content-container">
        <li class="routing-item">
          <a href="">Back Home</a>
        </li>
        <li class="routing-item">
          <a href="">See Gallery</a>
        </li>
      </div>
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

  &::before {
    content: "";
    position: absolute;
    top: -2%;
    left: -1%;
    width: 90%;
    height: 90%;
    border-radius: 10px;
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
    border-radius: 10px;
  }
}
.about-page-img {
  width: 90%;
  border-radius: 10px;
}

.about-page-desc {
  font-family: $font-secondary;
}

.about-paw-svg {
  height: 50px;
}

.about-page-info-wrapper {
  margin-top: 2rem;

  .about-page-name {
    font-size: 3rem;
  }
}

@media (width >= 768px) {
  .about-page-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    max-width: 1100px;
  }

  .about-page-desc {
    font-size: 1rem;
    padding-block: 1rem;
  }
}

.routing-content-container {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;

  .routing-item {
    font-size: 1.3rem;
  }
}

.routing-item {
  border-bottom: 5px solid $primary-blue;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
    cursor: pointer;
  }
}
</style>
