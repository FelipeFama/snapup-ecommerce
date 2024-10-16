<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <aside>navbar</aside>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.navbar {
  padding-top: 12px;
  padding-bottom: 12px;
  & .navbar-brand {
    font-size: 2.4rem;
  }
}
</style>
