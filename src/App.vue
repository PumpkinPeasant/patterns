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
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  display: flex;
  gap: 1rem;
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
  gap: 1.5rem;
  padding: 1rem;
  width: fit-content;
  align-self: center;
}
</style>
