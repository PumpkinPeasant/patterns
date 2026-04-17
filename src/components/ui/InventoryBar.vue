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
  width: 900px;
  height: 90px;
  outline: 10px solid #c6f6d3;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  background-color: #a1e1c0;
}

.inventory-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  outline: 6px solid #c6f6d3;
  border: 6px solid #7ecaa4;
  border-left-color: #59a57f;
}

.inventory-cell:nth-last-child(1) {
  border-right: none;
}

.inventory-cell__item{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
}
</style>