<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/coffee">Кофе</RouterLink>
    </nav>
  </header>

  <RouterView />


</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>
