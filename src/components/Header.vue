<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

<template>
  <header class="header text-white">
    <nav class="container">
      <section class="header-cnt">
        <!-- Top Section with links and social media -->
        <section
          class="header-cnt-top fs-13 py-2 d-flex align-items-center justify-content-between"
        >
          <!-- Left Side: Seller Center and Social Links -->
          <ul class="d-flex top-links align-items-center">
            <li class="fs-6">
              <router-link to="/seller">Seller Center</router-link>
            </li>
            <li class="vert-line" aria-hidden="true"></li>
            <li class="fs-6">
              <router-link to="/download">Download</router-link>
            </li>
            <li class="vert-line" aria-hidden="true"></li>
            <li class="d-flex align-items-center">
              <span class="fs-6">Follow us on</span>
              <ul class="social-links d-flex align-items-center" aria-label="Social Media Links">
                <li class="mx-2">
                  <a href="https://www.facebook.com" class="fs-6" aria-label="Facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li class="mx-2">
                  <a href="https://www.instagram.com" class="fs-6" aria-label="Instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <!-- Right Side: Support, Register, Log in -->
          <ul class="top-links d-flex align-items-center">
            <li>
              <router-link to="/" class="top-link-itm">
                <span class="top-link-itm-ico mx-2 fs-6">
                  <i class="bi bi-question-circle-fill"></i>
                </span>
                <span class="top-link-itm-txt fs-6">Support</span>
              </router-link>
            </li>
            <li class="vert-line" aria-hidden="true"></li>
            <li>
              <router-link to="/">
                <span class="top-link-itm-txt fs-6">Register</span>
              </router-link>
            </li>
            <li class="vert-line" aria-hidden="true"></li>
            <li>
              <router-link to="/">
                <span class="top-link-itm-txt fs-6">Log in</span>
              </router-link>
            </li>
          </ul>
        </section>

        <!-- Bottom Section: Navbar -->
        <section class="header-cnt-bottom">
          <Navbar />
        </section>
      </section>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.header {
  background: rgb(249, 78, 48);
  background: linear-gradient(180deg, rgba(249, 78, 48, 1) 0%, rgba(255, 100, 51, 1) 100%);

  .header-cnt-top {
    border-bottom: 1px solid adjust-color($clr-orange, $lightness: 10%);
  }

  @media screen and (max-width: 992px) {
    .header-cnt-top {
      flex-direction: column;
      .header-cnt-top-l {
        margin-bottom: 4px;
      }
    }
  }
}
</style>
