<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  padding: 8px;
  margin-left: 20px;
  background-color: transparent;
  border: 1px solid #eee;
  color: #fff;
  border-radius: 5px;
  width: 35px;
}
</style>
