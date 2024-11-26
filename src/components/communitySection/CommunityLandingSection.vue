<script setup>
import CommunityContent from "@/components/communitySection/communityContent/CommunityContent.vue";
import TheCallBtn from "../reusableComponents/TheCallBtn.vue";
</script>

<template>
  <header class="community-header-wrapper">
    <h2 class="community-header-title">Community</h2>
    <p class="community-header-subtitle">
      Menifee has always been home, and I’m proud to provide loving care to the
      furry friends of our wonderful community.
    </p>
  </header>
  <CommunityContent />
  <div class="community-content-footer-wrapper">
    <p class="community-footer-text">
      Every pet deserves love and care as unique as they are. That’s my promise
      to you.
    </p>
    <TheCallBtn />
  </div>
</template>

<style lang="scss" scoped>
.community-header-wrapper {
  text-align: center;
}

.community-header-title {
  font-size: 3rem;
}

.community-header-subtitle {
  font-size: 1.3rem;
}

.community-footer-text {
  font-size: 1.3rem;
}

.community-content-footer-wrapper {
  text-align: center;
  margin-bottom: 4rem;
}
</style>
