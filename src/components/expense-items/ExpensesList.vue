<template>
  <base-card class="expenses-list">
    <expense-item
      v-for="expense in expenses"
      :expense="expense"
      :key="expense.id"
      @remove-item="removeItem"
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
  methods: {
    removeItem(expenseId) {
      this.$emit('remove-item', expenseId);
    }
  }
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
