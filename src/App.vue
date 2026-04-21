<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import InventoryBar from "@/components/ui/InventoryBar.vue";
import {usePlayerStore} from "@/stores/player";
import {onMounted} from "vue";
import PlayerStats from "@/components/ui/PlayerStats.vue";

const playerStore = usePlayerStore()

onMounted(() => {
  playerStore.createPlayer()
})
</script>

<template>
  <div class="layout">
    <header>
      <nav>
        <span class="brand">☕ Brewhaus</span>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/coffee">Кофе</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView/>
    </main>

    <footer>
      <player-stats/>
      <inventory-bar/>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

header {
  position: sticky;
  top: 0;
  width: 100%;
}

.brand {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--color-espresso);
  margin-right: auto;
}

nav {
  display: flex;
  gap: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  align-items: center;
}

main {
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

footer {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 1rem 2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
</style>
