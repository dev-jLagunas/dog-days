<script setup>
import MessageForm from "@/components/reusableComponents/MessageForm.vue";
import pawPrintSvg from "@/assets/svgs/paw-print.svg";
import harrisonImg from "@/assets/pngs/harrison-standing.webp";
import dogsLeftImg from "@/assets/pngs/row-dogs-left.webp";
import dogsRightImg from "@/assets/pngs/row-dog-right.webp";
</script>

<template>
  <div class="join-content-container">
    <div class="join-info-wrapper">
      <ul class="join-info-items-wrapper">
        <li class="join-info-item">
          <img
            :src="pawPrintSvg"
            alt="svg of a paw print"
            class="join-info-item-img"
          />Send me a message and I will get back to you right away!
        </li>
        <li class="join-info-item">
          <img
            :src="pawPrintSvg"
            alt="svg of a paw print"
            class="join-info-item-img"
            loading="lazy"
          />Have questions or want to book a service?
        </li>
        <li class="join-info-item">
          <img
            :src="pawPrintSvg"
            alt="svg of a paw print"
            class="join-info-item-img"
            loading="lazy"
          />Have a special request or specific care instructions? Just let me
          know!
        </li>
      </ul>
      <p class="join-content-thanks-text">
        Thank you for visiting The Dog Days with Harrison. I can’t wait to meet
        you and your furry family!
      </p>
      <div class="join-imgs-wrapper">
        <img
          :src="dogsLeftImg"
          alt=""
          class="join-info-svg dogs-left-svg"
          loading="lazy"
        />
        <img :src="harrisonImg" alt="" class="join-info-svg" loading="lazy" />
        <img
          :src="dogsRightImg"
          alt=""
          class="join-info-svg dogs-right-svg"
          loading="lazy"
        />
      </div>
    </div>
    <MessageForm />
  </div>
</template>

<style lang="scss" scoped>
.join-info-wrapper {
  margin-bottom: $spacing-lg;
  text-align: center;
}

.join-info-item-img {
  height: 30px;
}

.join-info-svg {
  @include img-settings;
  object-fit: contain;
}

.dogs-left-svg {
  margin-left: 1.5rem;
}

.dogs-right-svg {
  margin-left: -2.5rem;
  padding-bottom: 5px;
}

.join-imgs-wrapper {
  @include grid-three-column;
}

.join-content-thanks-text {
  background: $primary-blue;
  padding: 10px;
  border-radius: 5px;
  color: $primary-white;
  font-weight: bold;
  margin-top: $spacing-reg;
}

@media (width >= 1024px) {
  .join-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 700px;
    gap: $spacing-reg;
  }

  .join-info-item {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .join-info-svg {
    transform: scale(1.3);
    margin-top: 2rem;
  }
}
</style>
