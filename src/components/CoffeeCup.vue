<script setup>
import {Coffee} from "@/classes/coffee/coffee.ts";
import {computed} from "vue";

const props = defineProps({coffee: Coffee});

const cupHeight = 160;

const layers = computed(() => {
  return Object.entries(props.coffee)
      .filter(([_, value]) => value > 0)
      .map(([key, value]) => ({
        name: key,
        height: cupHeight / 100 * value,
      }));
});
</script>

<template>
  <div class="cup-stage">
    <div class="steam" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>

    <div class="coffee-cup">
      <div class="coffee-cup__inner">
        <div
            class="layer"
            v-for="layer in layers"
            :key="layer.name"
            :class="layer.name"
            :style="{ height: layer.height + 'px' }"
        />
      </div>
      <div class="coffee-cup__rim" aria-hidden="true"></div>
      <div class="coffee-cup__shine" aria-hidden="true"></div>
    </div>

    <div class="saucer" aria-hidden="true"></div>
  </div>
</template>

<style scoped>
.cup-stage {
  --cup-width: 128px;
  --cup-height: 142px;
  --cup-cream: #fffdf8;
  --cup-shadow: rgba(44, 34, 24, 0.18);
  --accent: #c9a46a;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 220px;
  height: 255px;
  padding-right: 54px;
  filter: drop-shadow(0 16px 18px rgba(0, 0, 0, 0.12));
}

/* ===== Cup ===== */
.coffee-cup {
  position: relative;
  width: var(--cup-width);
  height: var(--cup-height);
  border-radius: 20px 20px 36px 36px / 14px 14px 28px 28px;
  background:
      radial-gradient(circle at 25% 18%, rgba(255,255,255,.95) 0%, rgba(255,255,255,.45) 18%, transparent 34%),
      linear-gradient(180deg, #fffefb 0%, #f8f2e8 45%, #efe2cf 100%);
  border: 2px solid rgba(128, 96, 61, 0.18);
  box-shadow:
      inset 0 2px 0 rgba(255,255,255,0.95),
      inset 0 -10px 18px rgba(140, 109, 71, 0.10),
      inset 10px 0 16px rgba(255,255,255,0.45),
      inset -10px 0 16px rgba(0,0,0,0.05),
      0 8px 18px var(--cup-shadow);
  overflow: hidden;
  z-index: 2;
}

/* Внутренняя область с напитком */
.coffee-cup__inner {
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 8px;
  top: 16px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  border-radius: 12px 12px 28px 28px / 10px 10px 22px 22px;
  overflow: hidden;
  background:
      linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03));
}

/* Верхний ободок */
.coffee-cup__rim {
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  height: 18px;
  border-radius: 999px;
  background:
      linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(247,238,224,0.9) 55%, rgba(187,156,118,0.25) 100%);
  box-shadow:
      inset 0 2px 3px rgba(255,255,255,0.95),
      inset 0 -2px 4px rgba(105, 77, 45, 0.10);
  pointer-events: none;
  z-index: 4;
}

/* Внутренняя тень под ободком */
.coffee-cup::before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  top: 14px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(78, 56, 30, 0.12), transparent);
  z-index: 3;
  pointer-events: none;
}

/* Блик на чашке */
.coffee-cup__shine {
  position: absolute;
  top: 18px;
  left: 14px;
  width: 18px;
  height: 80px;
  border-radius: 999px;
  background: linear-gradient(
      180deg,
      rgba(255,255,255,0.82) 0%,
      rgba(255,255,255,0.38) 40%,
      rgba(255,255,255,0) 100%
  );
  filter: blur(1px);
  pointer-events: none;
  z-index: 4;
}

/* ===== Handle ===== */
.coffee-cup::after {
  content: "";
  position: absolute;
  right: -34px;
  top: 28px;
  width: 48px;
  height: 74px;
  border: 9px solid #e8d7bf;
  border-left: none;
  border-radius: 0 42px 42px 0 / 0 50% 50% 0;
  box-shadow:
      inset 1px 0 2px rgba(255,255,255,0.8),
      3px 4px 8px rgba(0,0,0,0.12);
  background: transparent;
}

/* ===== Saucer ===== */
.saucer {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(calc(-50% - 27px));
  width: 190px;
  height: 26px;
  border-radius: 50%;
  background:
      radial-gradient(circle at 50% 34%, rgba(255,255,255,0.96) 0%, rgba(252,246,237,0.98) 32%, #eadbc4 74%, #cfb089 100%);
  box-shadow:
      inset 0 3px 5px rgba(255,255,255,0.95),
      inset 0 -4px 8px rgba(110, 83, 49, 0.14),
      0 10px 14px rgba(0,0,0,0.10);
}

.saucer::before {
  content: "";
  position: absolute;
  inset: 5px 18px;
  border-radius: 50%;
  background:
      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.85), rgba(240,227,208,0.65));
  box-shadow: inset 0 2px 4px rgba(145, 109, 67, 0.10);
}

.saucer::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  width: 112px;
  height: 10px;
  border-radius: 50%;
  background: rgba(55, 40, 25, 0.12);
  filter: blur(5px);
}

/* ===== Layers ===== */
.layer {
  width: 100%;
  transition: height 0.9s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.layer:last-child::before {
  content: "";
  position: absolute;
  top: 0;
  inset-inline: 0;
  height: 5px;
  background: linear-gradient(180deg, rgba(255,255,255,0.36), rgba(255,255,255,0));
  pointer-events: none;
}

.espresso {
  background:
      linear-gradient(180deg, #6b3b1d 0%, #4b2710 58%, #2b1608 100%);
  box-shadow:
      inset 0 6px 10px rgba(255,255,255,0.07),
      inset 0 -5px 8px rgba(0,0,0,0.26);
}

.milk {
  background:
      linear-gradient(180deg, #fffdfa 0%, #f8f2e9 62%, #eee2d1 100%);
  box-shadow:
      inset 0 4px 8px rgba(255,255,255,0.35),
      inset 0 -3px 6px rgba(0,0,0,0.05);
}

.water {
  background:
      linear-gradient(180deg, #f5fbff 0%, #dfeef6 60%, #c8dde8 100%);
  box-shadow:
      inset 0 4px 8px rgba(255,255,255,0.26),
      inset 0 -3px 6px rgba(0,0,0,0.04);
}

/* ===== Steam ===== */
.steam {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(calc(-50% - 28px));
  width: 80px;
  height: 82px;
  pointer-events: none;
  z-index: 5;
}

.steam span {
  position: absolute;
  bottom: 0;
  width: 16px;
  height: 16px;
  background:
      radial-gradient(circle, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0) 100%);
  border-radius: 50%;
  filter: blur(6px);
  opacity: 0;
  animation: steam-rise 3.6s ease-in infinite;
  background: #e4e2d6;
}

.steam span:nth-child(1) {
  left: 10px;
  animation-delay: 0s;
}

.steam span:nth-child(2) {
  left: 32px;
  animation-delay: 1s;
}

.steam span:nth-child(3) {
  left: 52px;
  animation-delay: 2s;
}

@keyframes steam-rise {
  0% {
    transform: translateY(0) translateX(0) scale(0.8);
    opacity: 0;
  }
  15% {
    opacity: 0.55;
  }
  55% {
    opacity: 0.32;
  }
  100% {
    transform: translateY(-72px) translateX(8px) scale(2.2);
    opacity: 0;
  }
}
</style>