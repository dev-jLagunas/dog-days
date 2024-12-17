<script setup>
import { ref } from "vue";
import PrivacyModal from "@/components/reusableComponents/PrivacyPolicyModal.vue";

// Reactive Properties
const isPrivacyModalOpen = ref(false);

// Methods
const togglePrivacyModal = () => {
  isPrivacyModalOpen.value = !isPrivacyModalOpen.value;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <footer class="the-footer-container content-container">
    <button class="the-footer-scroll-btn" @click="scrollToTop">
      Back To Top
    </button>
    <div class="the-footer-content-wrapper">
      <ul class="the-footer-nav-wrapper">
        <li class="the-navbar-item">
          <router-link
            to="/"
            class="the-footer-link"
            active-class="footer-nav-link-active"
            >Home</router-link
          >
        </li>
        <li class="the-navbar-item">
          <router-link
            to="/about"
            class="the-footer-link"
            active-class="footer-nav-link-active"
            >About</router-link
          >
        </li>
        <li class="the-navbar-item">
          <router-link
            to="/contact"
            class="the-footer-link"
            active-class="footer-nav-link-active"
            >Contact</router-link
          >
        </li>
        <li class="the-navbar-item">
          <router-link
            to="/gallery"
            class="the-footer-link"
            active-class="footer-nav-link-active"
            >Gallery</router-link
          >
        </li>
      </ul>
      <ul class="the-footer-contact-wrapper">
        <li>
          <a
            href="tel:+16195555555"
            class="the-footer-contact-link the-footer-phone-link"
          >
            619-555-5555
          </a>
        </li>
        <li>
          <a
            href="mailto:dog.days.harisson@gmail.com"
            class="the-footer-contact-link"
          >
            dog.days.harisson@gmail.com
          </a>
        </li>
      </ul>
      <div class="the-footer-title-wrapper">
        <h2>The Dog Days</h2>
        <p>with Harrison</p>
      </div>
    </div>
    <button class="the-footer-privacy-btn" @click="togglePrivacyModal">
      Privacy Policy
    </button>
    <p class="the-footer-copyright">@ 2024 The Dog Days. All Rights Reserved</p>
  </footer>
  <!-- Privacy Modal -->
  <div
    v-if="isPrivacyModalOpen"
    class="privacy-modal"
    @click.self="togglePrivacyModal"
  >
    <PrivacyModal @close="togglePrivacyModal" />
  </div>
</template>

<style lang="scss" scoped>
.the-footer-container {
  @include flex-column;
  background: $primary-blue;
  padding: $spacing-reg;
  border-radius: $radius-sm;
  margin-bottom: $spacing-md;

  .the-footer-scroll-btn {
    width: max-content;
    padding-block: 5px;
    margin-right: auto;
    margin-bottom: $spacing-md;
    font-size: $font-base;
  }
}

.the-footer-content-wrapper {
  @include flex-column;
  gap: $spacing-reg;

  .the-footer-nav-wrapper {
    @include flex-column;
    gap: $spacing-reg;
    font-size: $font-reg;

    .the-footer-link {
      @include highlight-style($primary-orange);
    }

    .footer-nav-link-active {
      border-bottom: 3px solid $primary-orange;
    }
  }

  .the-footer-contact-wrapper {
    @include flex-column;
    font-size: $font-reg;
    gap: $spacing-reg;
  }

  .the-footer-title-wrapper {
    font-size: $font-md;
    margin-bottom: $spacing-reg;
  }
}

.the-footer-contact-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.the-footer-contact-link:hover {
  text-decoration: underline;
  cursor: pointer;
}

.the-footer-privacy-btn {
  margin-bottom: $spacing-reg;
}

.the-footer-copyright {
  text-align: center;
}

@media (width >= 768px) {
  .the-footer-container {
    .the-footer-scroll-btn {
      margin-inline: auto;
    }
  }

  .the-footer-content-wrapper {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .the-footer-contact-wrapper {
      margin-bottom: $spacing-md;
    }
  }
}

@media (width >= 1024px) {
  .the-footer-content-wrapper {
    .the-footer-nav-wrapper {
      flex-direction: row;
    }
  }
}

/*********************************
Privacy Modal Styles
**********************************/
.privacy-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
}

.modal-close-btn {
  font-size: $font-base;
  cursor: pointer;
}
</style>
