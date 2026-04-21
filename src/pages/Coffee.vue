<script setup lang="ts">
import {CoffeeBuilder} from "@/classes/coffee/coffee-builder.ts";
import {Director} from "@/classes/coffee/coffee-director.ts";
import {Coffee} from "@/classes/coffee/coffee.ts";
import {reactive, ref} from "vue";
import CoffeeCup from "@/components/CoffeeCup.vue";
import {usePlayerStore} from "@/stores/player";

const playerStore = usePlayerStore();

const coffeeMaker = reactive(new CoffeeBuilder());

const barista = new Director(coffeeMaker);

const currentCoffee = ref<Coffee>(new Coffee());

const makeEspresso = () => {
  barista.makeEspresso();
}

const makeAmericano = () => {
  barista.makeAmericano();
}

const makeDoubleEspresso = () => {
  barista.makeDoubleEspresso();
}

const makeCappuccino = () => {
  barista.makeCappuccino();
}

const addEspresso = () => {
  coffeeMaker.addEspresso(5)
}

const addMilk = () => {
  coffeeMaker.addMilk(5)
}

const addWater = () => {
  coffeeMaker.addWater(5)
}

const brewCoffee = () => {
  currentCoffee.value = coffeeMaker.getCoffee()
  playerStore.player.inventory.addItem(currentCoffee);
}
</script>

<template>
  <section class="coffee-page">
    <div class="cooking-bar">
      <div class="coffee-menu panel">
        <h2>Меню</h2>
        <p class="panel-hint">Готовые рецепты</p>
        <div class="panel-body">
          <button @click="makeEspresso">Espresso</button>
          <button @click="makeDoubleEspresso">Double Espresso</button>
          <button @click="makeAmericano">Americano</button>
          <button @click="makeCappuccino">Cappuccino</button>
        </div>
      </div>

      <div class="custom-coffee panel">
        <h2>Ингредиенты</h2>
        <p class="panel-hint">Соберите свой напиток</p>
        <div class="panel-body">
          <button class="ghost" @click="addEspresso">☕ Espresso</button>
          <button class="ghost" @click="addMilk">🥛 Milk</button>
          <button class="ghost" @click="addWater">💧 Water</button>
        </div>
      </div>
    </div>

    <div class="cup-container panel">
      <h3>Напиток</h3>
      <div class="cup">
        <coffee-cup :coffee="coffeeMaker.coffee"/>
        <ul class="recipe">
          <li v-for="(val, key, index) in coffeeMaker.coffee" :key="key">
            <span class="recipe-key">{{ key }}</span>
            <span class="recipe-val">{{ val }}</span>
          </li>
        </ul>
      </div>
      <button class="accent" @click="brewCoffee">Подать</button>
    </div>
  </section>
</template>

<style scoped>
.coffee-page {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1.5rem;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
}

.panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-xs);
}

.panel h2,
.panel h3 {
  margin-bottom: 0.25rem;
}

.panel-hint {
  font-size: 0.875rem;
  color: var(--color-text-subtle);
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

.cooking-bar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.panel-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
}

.cup {
  display: flex;
  align-items: center;
  gap: 3.5rem;
  flex: 1;
}

.recipe {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 140px;
}

.recipe li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.recipe li:last-child {
  border-bottom: none;
}

.recipe-key {
  color: var(--color-text-muted);
  text-transform: capitalize;
}

.recipe-val {
  font-family: var(--font-serif);
  font-weight: 600;
  color: var(--color-espresso);
  font-size: 1rem;
}

@media (max-width: 900px) {
  .coffee-page {
    grid-template-columns: 1fr;
  }
}
</style>
