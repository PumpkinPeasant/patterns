<script setup>
const cellsCount = 10;
</script>

<template>
  <div class="inventory-bar">
    <div v-for="n in 10" class="inventory-cell">

    </div>
  </div>
</template>

<style scoped>
.inventory-bar {
  width: 900px;
  height: 90px;
  outline: 10px solid #c6f6d3;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  background-color: #a1e1c0;
}

.inventory-cell{
  outline: 6px solid #c6f6d3;
  border: 6px solid #7ecaa4;
  border-left-color: #59a57f;
}

.inventory-cell:nth-last-child(1){
  border-right: none;
}
</style>