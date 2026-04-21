<script setup>
import {usePlayerStore} from "@/stores/player.ts";

const playerStore = usePlayerStore();

</script>

<template>
  <div class="player-stats">
    <div class="player-energybar" :data-label="`${playerStore.player?.energy ?? 0}%`">
      <div
          class="player-energybar-fill"
          :style="`width: ${playerStore.player?.energy || 0}%`">
      </div>
    </div>
    <div class="player-wallet">
      <span>{{ playerStore.player?.wallet }}</span>
      <span class="player-wallet__coin">🪙</span>
    </div>
  </div>
</template>

<style scoped>
.player-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  font-family: var(--font-sans);
}

.player-energybar {
  position: relative;
  height: 10px;
  min-width: 320px;
  background: var(--color-surface-muted);
  border-radius: var(--radius-pill);
  overflow: hidden;
}

.player-energybar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-coffee), var(--color-accent));
  border-radius: var(--radius-pill);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: var(--space-3);
  color: transparent;
  font-size: 0;
  transition: width var(--transition-slow);
}

.player-energybar::after {
  content: attr(data-label);
  position: absolute;
  right: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  pointer-events: none;
}

.player-wallet {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-espresso);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  padding: var(--space-2) var(--space-5);
  box-shadow: var(--shadow-xs);
}

.player-wallet__coin {
  font-size: 1.25rem;
}
</style>