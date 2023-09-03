<template>
  <add-expense @submit-data="submitData"></add-expense>
  <expenses-list :expenses="expenses"></expenses-list>
</template>

<script>
import AddExpense from './components/expense-items/AddExpense.vue';
import ExpensesList from './components/expense-items/ExpensesList.vue';

export default {
  components: { ExpensesList, AddExpense },
  data() {
    return {
      expenses: [
        {
          id: 'New desk (wooden)',
          title: 'New desk (wooden)',
          date: new Date(2023, 5, 12),
          price: '450',
        },
        {
          id: 'Car Insurance',
          title: 'Car Insurance',
          date: new Date(2023, 2, 28),
          price: '294.67',
        },
      ],
    };
  },
  methods: {
    submitData(expense) {
      this.expenses.unshift(expense);
      console.log(this.expenses);
    }
  }
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
</style>
