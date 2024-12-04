<script setup>
import MessageForm from "@/components/reusableComponents/MessageForm.vue";
import pawPrintSvg from "@/assets/svgs/paw-print.svg";
import harrisonImg from "@/assets/pngs/harrison-standing.png";
import dogsLeftImg from "@/assets/pngs/row-dogs-left.png";
import dogsRightImg from "@/assets/pngs/row-dog-right.png";
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
          />Have questions or want to book a service?
        </li>
        <li class="join-info-item">
          <img
            :src="pawPrintSvg"
            alt="svg of a paw print"
            class="join-info-item-img"
          />Have a special request or specific care instructions? Just let me
          know!
        </li>
      </ul>
      <p class="join-content-thanks-text">
        Thank you for visiting The Dog Days with Harrison. I can’t wait to meet
        you and your furry family!
      </p>
      <div class="join-imgs-wrapper">
        <img :src="dogsLeftImg" alt="" class="join-info-svg dogs-left-svg" />
        <img :src="harrisonImg" alt="" class="join-info-svg" />
        <img :src="dogsRightImg" alt="" class="join-info-svg dogs-right-svg" />
      </div>
    </div>
    <MessageForm />
  </div>
</template>

<style lang="scss" scoped>
.join-info-wrapper {
  margin-bottom: 3rem;
  text-align: center;
}

.join-info-item {
  gap: 5px;
  margin-bottom: 5px;
}

.join-info-item-img {
  height: 30px;
}

.join-info-svg {
  height: 100%;
  width: 100%;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.join-content-thanks-text {
  background: $primary-blue;
  padding: 10px;
  border-radius: 5px;
  color: $primary-white;
  font-weight: bold;
  margin-top: 1.5rem;
}

@media (width >= 1024px) {
  .join-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 700px;
    gap: 1rem;
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
