<script setup>
import dogRunImg from "@/assets/pngs/running-dog.webp";
import dogChillImg from "@/assets/pngs/chilling-dog.webp";
import menifeeImg from "@/assets/pngs/menifee-town.webp";
</script>

<template>
  <div class="community-content-container">
    <article class="community-info-wrapper">
      <img :src="dogRunImg" alt="" class="community-info-img" />
      <p class="community-img-text">
        I love taking pups to Hidden Valley Park or around Menifee Lakes.
      </p>
    </article>
    <figure class="community-content-img-wrapper">
      <img :src="menifeeImg" alt="" class="community-content-img" />
    </figure>
    <article class="community-info-wrapper-b">
      <p class="community-img-text-b">
        Named a trusted dog walker by dozens of local families.
      </p>
      <img :src="dogChillImg" alt="" class="community-info-img-b" />
    </article>
  </div>
</template>

<style lang="scss" scoped>
.community-content-container {
  text-align: center;
}

.community-img-text,
.community-img-text-b {
  background: $primary-blue;
  color: $primary-white;
  font-weight: bold;
  padding: 8px;
  border-radius: $radius-sm;
  margin-bottom: $spacing-reg;
}

.community-info-img {
  margin-top: -2rem;
}

.community-info-img,
.community-info-img-b {
  width: 50%;
  margin-inline: auto;
}

.community-content-img {
  width: 100%;
}

@media (width >= 768px) {
  .community-content-container {
    @include grid-three-column;
    align-items: center;
  }

  .community-info-img,
  .community-info-img-b {
    width: 75%;
    margin-inline: auto;
  }

  .community-info-img {
    margin-left: 4rem;
  }

  .community-img-text,
  .community-img-text-b {
    width: 70%;
    margin-inline: auto;
  }
}
</style>
