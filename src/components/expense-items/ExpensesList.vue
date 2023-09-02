<template>
  <ul class="expenses-list">
    <expense-item
      v-for="expense in expenses"
      :expense="expense"
      :key="expense.id"
    ></expense-item>
  </ul>
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
  list-style: none;
  padding: 0;
}
</style>
