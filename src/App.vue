<script setup lang="ts">
import {CoffeeBuilder} from "@/classes/coffee/coffee-builder.ts";
import {Director} from "@/classes/coffee/coffee-director.ts";
import {Coffee} from "@/classes/coffee/coffee.ts";
import {ref} from "vue";
import CoffeeCup from "@/components/CoffeeCup.vue";

const coffeeMaker = new CoffeeBuilder();
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

const makeDoubleEspresso = () =>{
  barista.makeDoubleEspresso();
  currentCoffee.value = coffeeMaker.getCoffee()
}

const makeCappuccino = () =>{
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
  <main>
    <div>
      <h2>Coffee Menu</h2>
      <button @click="makeEspresso">Espresso</button>
      <button @click="makeDoubleEspresso">Double Espresso</button>
      <button @click="makeAmericano">Americano</button>
      <button @click="makeCappuccino">Cappuccino</button>
    </div>


    <div>
      <h2>Custom Coffee</h2>
      <button @click="addEspresso">☕ Espresso</button>
      <button @click="addMilk">🥛 Milk</button>
      <button @click="addWater">💧 Water</button>
    </div>

    <div>
      <h3>Cup</h3>
      <coffee-cup :coffee="currentCoffee" />
    </div>

    <pre>
      {{ currentCoffee }}
    </pre>

    <button @click="brewCoffee">Brew</button>
  </main>
</template>

<style scoped>

</style>
