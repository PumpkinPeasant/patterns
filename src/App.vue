<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import InventoryBar from "@/components/ui/InventoryBar.vue";


</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/coffee">Кофе</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView/>
  </main>
  <inventory-bar/>

</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  display: flex;
  gap: 1rem;
}

main{
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.inventory-bar{
  position: fixed;
  bottom: 0;
}
</style>
