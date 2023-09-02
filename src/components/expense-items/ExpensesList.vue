<template>
  <base-card class="expenses-list">
    <expense-item
      v-for="expense in expenses"
      :expense="expense"
      :key="expense.id"
    ></expense-item>
  </base-card>
</template>

<script>
import ExpenseItem from './ExpenseItem.vue';

export default {
  props: ['expenses'],
  components: {
    ExpenseItem,
  },
};
</script>

<style scoped>
.expenses-list {
  padding: 1rem;
  background-color: #1f1f1f;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
}
</style>
