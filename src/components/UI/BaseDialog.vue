<template>
  <teleport to="body">
    <div class="backdrop" @click="$emit('close')"></div>
    <div class="dialog">
      <slot name="title">
        <h2 class="title">{{ title }}</h2>
      </slot>

      <div class="wrapper">
        <div class="menu">
          <slot></slot>
        </div>
        <div class="actions">
          <slot name="actions">
            <base-button @click="$emit('close')"></base-button>
          </slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ['title'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  background-color: #fff;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.title {
  background-color: #40005d;
  color: white;
  width: 100%;
  padding: 1rem;
}

.title h2 {
  margin: 0;
}

.wrapper {
  padding: 1rem;
}

.menu {
  margin-bottom: 1rem;
}

.actions {
  text-align: right;
}

@media (min-width: 768px) {
  .dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
