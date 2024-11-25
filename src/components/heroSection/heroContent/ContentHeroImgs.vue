<script setup>
import MessageForm from "@/components/reusableComponents/MessageForm.vue";
import forestWalk from "@/assets/images/forest-walk.jpg";
import cityWalk from "@/assets/images/city-walk.jpg";
import dogDrawing from "@/assets/images/leashed-dog-drawing.png";
import beachWalk from "@/assets/images/shadow-walk.jpg";
import dogLook from "@/assets/images/dog-leashed.jpg";
import dogEating from "@/assets/images/dog-eating-drawing.png";
import dogWalking from "@/assets/images/dog-walking.jpg";
import pawPrint from "@/assets/svgs/paw-print.svg";
</script>

<template>
  <figure class="content-hero-img-wrapper">
    <img :src="forestWalk" alt="" class="img-forest" />
    <img :src="pawPrint" alt="" class="img-paw-1" />
    <img :src="pawPrint" alt="" class="img-paw-2" />
    <img :src="dogLook" alt="" class="img-dog-leashed" />
    <img :src="cityWalk" alt="" class="img-city" />
    <img :src="pawPrint" alt="" class="img-paw-3" />
  </figure>
</template>

<style lang="scss" scoped>
.content-hero-img-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  gap: 5px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}

.img-forest {
  grid-column: 1 / 5;
  object-fit: cover;
}

.img-paw-1,
.img-paw-3 {
  transform: rotate(12deg);
}

.img-paw-2 {
  transform: rotate(-12deg);
}

.img-drawing {
  object-fit: contain;
}

.img-dog-leashed {
  grid-column: 2 / 6;
  object-fit: cover;
}

.img-city {
  grid-column: 1 / 5;
  object-fit: cover;
  object-position: bottom;
}

@media (width >= 768px) {
  .content-hero-img-wrapper {
    img {
      max-height: 200px;
    }
  }
}
</style>
