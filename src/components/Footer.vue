<template>
  <footer class="footer bg-orange">
    <div class="container py-4 text-center">
      <div class="flex align-center justify-center text-white fw-3 fs-14">
        <RouterLink to="/" class="text-uppercase">privacy policy</RouterLink>
        <div class="vert-line"></div>
        <RouterLink to="/" class="text-uppercase">term of service</RouterLink>
        <div class="vert-line"></div>
        <RouterLink to="/" class="text-uppercase">About SnapUp.</RouterLink>
      </div>
      <span class="text-white copyright-text text-manrope fs-14 fw-3">
        &copy; 2022 SnapUp. All Rights Reserved.
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.footer {
  .copyright-text {
    display: block;
    margin-top: 0.7rem;
  }
}
</style>
