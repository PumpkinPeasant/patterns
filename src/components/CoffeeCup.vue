<script setup>
import {Coffee} from "@/classes/coffee/coffee.ts";
import {computed} from "vue";

const props = defineProps({coffee: Coffee});

const cupHeight = 200;

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
        v-for="layer in layers"
        :key="layer.name"
        :class="layer.name"
        :style="{ height: layer.height + 'px' }"
    />
  </div>
</template>

<style scoped>
.coffee-cup {
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  width: 100px;
  height: 200px;
  border: 1px solid black;
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