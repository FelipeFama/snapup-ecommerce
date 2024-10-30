<template>
  <Header />
  <Sidebar />
  <router-view />
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<style scoped></style>
