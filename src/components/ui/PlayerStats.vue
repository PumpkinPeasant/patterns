<script setup>
import {usePlayerStore} from "@/stores/player.ts";

const playerStore = usePlayerStore();

</script>

<template>
  <div class="player-stats">
    <div class="player-energybar">
      <div
          class="player-energybar-fill"
          :style="`width: ${playerStore.player?.energy || 0}%`">
      {{ playerStore.player?.energy }}%
    </div>
  </div>
  <div class="player-wallet">
    <span>1032</span>
    <span class="player-wallet__coin">🪙</span>
  </div>
  </div>
</template>

<style scoped>
.player-stats {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-family: DM Sans, Avenir, Helvetica, Arial, sans-serif;

}

.player-energybar {
  height: 54px;
  min-width: 400px;
  border: 8px solid #30a851;
  background: rgba(169, 235, 169, 0.3);
}

.player-energybar-fill {
  height: 100%;
  background: #45f376;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e6a46;
  font-weight: bolder;
}

.player-wallet {
  display: flex;
  gap: 0.5rem;
  font-size: 32px;
  font-weight: bolder;
  color: #1e6a46;
}
</style>