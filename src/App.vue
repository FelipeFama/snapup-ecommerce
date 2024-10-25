<template>
  <Header />
  <Sidebar />
  <router-view />

  <!--
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    -->
</template>

<script setup lang="ts">
//import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<style scoped></style>
