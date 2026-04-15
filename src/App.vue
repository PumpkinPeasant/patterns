<script setup lang="ts">
import {CoffeeBuilder} from "@/classes/coffee/coffee-builder.ts";
import {Director} from "@/classes/coffee/coffee-director.ts";
import {Coffee} from "@/classes/coffee/coffee.ts";
import {ref} from "vue";
import CoffeeCup from "@/components/CoffeeCup.vue";

const coffeeMaker = new CoffeeBuilder();
const barista = new Director();

const currentCoffee = ref<Coffee>(new Coffee());

barista.setBuilder(coffeeMaker);


const makeAmericano = () => {
  barista.makeAmericano();
  currentCoffee.value = coffeeMaker.getCoffee()
}

const makeSpecialCoffee = () => {
  coffeeMaker.addEspresso(0.33)
  coffeeMaker.addMilk(0.33)
  coffeeMaker.addTopping('marshmallow')
  coffeeMaker.addTopping('cinnamon')
  currentCoffee.value = coffeeMaker.getCoffee()
}

const addEspresso = () => {
  coffeeMaker.addEspresso(0.05)
}

const addMilk = () => {
  coffeeMaker.addMilk(0.05)
}

const brewCoffee = () => {
  currentCoffee.value = coffeeMaker.getCoffee()
}
</script>

<template>
  <header>
    <button @click="addEspresso">Espresso</button>
    <button @click="addMilk">Milk</button>
    <button @click="brewCoffee">Brew</button>
  </header>

  <main>
    <pre>
      {{ currentCoffee }}
    </pre>

    <coffee-cup :coffee="currentCoffee" />

  </main>
</template>

<style scoped>

</style>
