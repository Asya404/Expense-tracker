<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
.button-purple {
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: #fff;
  border-radius: 12px;
  margin-right: 1rem;
}

.button-cancel {
  padding: 8px;
  margin-left: 20px;
  background-color: transparent;
  border: 1px solid #eee;
  color: #fff;
  border-radius: 5px;
  width: 35px;
}
</style>
