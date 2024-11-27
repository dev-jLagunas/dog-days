<script setup>
import TheNavbar from "@/components/reusableComponents/TheNavbar.vue";
import harrisonImg from "@/assets/images/harrison-drawing.png";
import pawPrint from "@/assets/svgs/paw-print.svg";
</script>

<template>
  <footer class="footer-content-container">
    <div class="footer-info-wrapper">
      <h1 class="footer-info-thanks-text">Thanks Again!</h1>
      <p class="footer-content-info-text">
        <img
          :src="pawPrint"
          alt=""
          class="footer-content-paw-img"
        />619-555-5555
      </p>
      <p class="footer-content-info-text">
        <img
          :src="pawPrint"
          alt=""
          class="footer-content-paw-img"
        />dog.days.harrisson@gmail.com
      </p>
      <TheNavbar class="the-navbar-tag" />
    </div>
    <div>
      <p class="footer-content-question-text">
        Have questions? Don't hesitate to reach out!
      </p>
      <img :src="harrisonImg" alt="" class="footer-content-drawing" />
      <div class="footer-title-wrapper">
        <h2>The Dog Days</h2>
        <p>with Harrison</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-content-container {
  margin-block: 2rem;
  text-align: center;
}

.footer-content-paw-img {
  height: 30px;
}

.footer-info-thanks-text {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.the-navbar-tag {
  margin-block: 2rem;
}

.footer-content-question-text {
  background: $primary-blue;
  color: $primary-white;
  font-weight: bold;
  padding: 15px;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 10%;
  width: 50%;
  margin-inline: auto;
}

h2 {
  font-size: 3rem;
}

.footer-content-info-text {
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.footer-title-wrapper {
  margin-top: 1rem;
}

@media (width >= 768px) {
  .footer-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    position: relative;
    justify-items: center;
  }

  .the-navbar-tag {
    position: absolute;
    bottom: 0;
    gap: 20px;
  }

  .footer-content-info-text {
    font-size: 1.5rem;
  }

  .footer-content-drawing {
    height: 150px;
  }
}
</style>
