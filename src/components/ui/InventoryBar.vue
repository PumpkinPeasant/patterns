<script setup>
import {usePlayerStore} from "@/stores/player.ts";

const cellsCount = 10;

const playerStore = usePlayerStore();

const consume = async (id) => {
  playerStore.player.consumeItem(id)
}

const sell = async (id) => {
  playerStore.player.sellItem(id)
}

</script>

<template>
  <div class="inventory-bar">
    <div v-for="n in 10" class="inventory-cell">
      <div class="inventory-cell__item" v-if="playerStore?.player?.inventory?.items[n-1]"
           @click="consume(playerStore?.player?.inventory?.items[n-1]?.id)"
           @click.right.prevent="sell(playerStore?.player?.inventory?.items[n-1]?.id)">
        {{ playerStore?.player?.inventory?.items[n - 1]?.item ? '☕' : '' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.inventory-bar {
  width: 720px;
  height: 80px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 6px;
  gap: 6px;
  box-shadow: var(--shadow-sm);
}

.inventory-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: background-color var(--transition), border-color var(--transition);
}

.inventory-cell:hover {
  background: var(--color-cream);
  border-color: var(--color-latte);
}

.inventory-cell__item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  border-radius: var(--radius-md);
  transition: transform var(--transition);
}

.inventory-cell__item:hover {
  transform: scale(1.1);
}

.inventory-cell__item:active {
  transform: scale(0.95);
}
</style>