<script setup lang="ts">
import {CoffeeBuilder} from "@/classes/coffee/coffee-builder.ts";
import {Director} from "@/classes/coffee/coffee-director.ts";
import {Coffee} from "@/classes/coffee/coffee.ts";
import {reactive, ref} from "vue";
import CoffeeCup from "@/components/CoffeeCup.vue";

const coffeeMaker = reactive(new CoffeeBuilder());

const barista = new Director(coffeeMaker);

const currentCoffee = ref<Coffee>(new Coffee());

const makeEspresso = () => {
  barista.makeEspresso();
  currentCoffee.value = coffeeMaker.getCoffee()
}

const makeAmericano = () => {
  barista.makeAmericano();
  currentCoffee.value = coffeeMaker.getCoffee()
}

const makeDoubleEspresso = () => {
  barista.makeDoubleEspresso();
  currentCoffee.value = coffeeMaker.getCoffee()
}

const makeCappuccino = () => {
  barista.makeCappuccino();
  currentCoffee.value = coffeeMaker.getCoffee()
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
}
</script>

<template>
  <section>
    <div class="cooking-bar">
      <div class="coffee-menu">
        <h2>Coffee Menu</h2>
        <button @click="makeEspresso">Espresso</button>
        <button @click="makeDoubleEspresso">Double Espresso</button>
        <button @click="makeAmericano">Americano</button>
        <button @click="makeCappuccino">Cappuccino</button>
      </div>


      <div class="custom-coffee">
        <h2>Custom Coffee</h2>
        <button @click="addEspresso">☕ Espresso</button>
        <button @click="addMilk">🥛 Milk</button>
        <button @click="addWater">💧 Water</button>
      </div>
    </div>

    <div class="cup-container">
      <h3>Cup</h3>
      <div class="cup">
        <coffee-cup :coffee="coffeeMaker.coffee"/>
        <ul>
          <li v-for="(val, key, index) in coffeeMaker.coffee">
            {{ key }} {{ val }}
          </li>
        </ul>
      </div>
      <button @click="brewCoffee">Brew</button>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
}

.cooking-bar {
  display: flex;
  gap: 1rem;
}

.coffee-menu, .custom-coffee {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.cup-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cup {
  display: flex;
  align-items: center;
  gap: 100px;
}
</style>
