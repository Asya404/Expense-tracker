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
import ExpenseItem from './components/expense-items/ExpenseItem.vue';

export default {
  components: { ExpenseItem },
  data() {
    return {
      expenses: [
        {
          id: 'New desk (wooden)',
          title: 'New desk (wooden)',
          date: new Date(2023, 5, 12),
          price: '450$',
        },
        {
          id: 'Car Insurance',
          title: 'Car Insurance',
          date: new Date(2023, 2, 28),
          price: '294.67$',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  background-color: #3f3f3f;
}

.expenses-list {
  list-style: none;
  padding: 0;
}
</style>
