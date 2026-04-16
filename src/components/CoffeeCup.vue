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
  <div class="coffee-cup">
    <div
        class="layer"
        v-for="layer in layers"
        :key="layer.name"
        :class="layer.name"
        :style="{ height: layer.height + 'px' }"
    />
  </div>
</template>

<style scoped>
.coffee-cup {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  width: 100px;
  height: 160px;
  border: 15px solid #4c4545;
  border-radius: 10px;
  border-top: none;
}

.coffee-cup::after{
  content: "";
  position: absolute;
  right: -60px;
  width: 45px;
  height: 80px;
  border-right: 15px solid #4c4545;
  border-top: 15px solid #4c4545;
  border-radius: 10px;
  top: 40px;
}

.layer{
  transition: height 1s ease;
}

.espresso {
  background-color: #3c2004;
}

.milk {
  background-color: #f6f6f1;
}

.water {
  background-color: #cef3f3;
}
</style>