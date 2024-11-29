<template>
  <Header />
  <Sidebar />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped></style>
