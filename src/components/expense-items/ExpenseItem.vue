<template>
  <div>
    <base-card class="expense-item">
      <div class="expense-date">
        <div class="expense-date__month">
          {{ expense.date.toLocaleString('en-US', { month: 'long' }) }}
        </div>
        <div class="expense-date__year">
          {{ expense.date.getFullYear() }}
        </div>
        <div class="expense-date__day">
          {{ expense.date.toLocaleString('en-US', { day: '2-digit' }) }}
        </div>
      </div>

      <div class="expense-item__description">
        <h2>{{ expense.title }}</h2>
        <div class="expense-item__price">{{ expense.price }}</div>
      </div>
      <base-button>X</base-button>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ['expense'],
};
</script>

<style scoped>
.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
}
.expense-date {
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: #fff;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
}

.expense-date__month {
  font-size: 0.75rem;
  font-weight: 700;
}

.expense-date__year {
  font-size: 0.75rem;
}

.expense-date__day {
  font-size: 1.5rem;
  font-weight: 700;
}

.expense-item__description {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1;
}

.expense-item h2 {
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1 1;
  margin: 0 1rem;
  color: #fff;
}

.expense-item__price {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: #40005d;
  border: 1px solid #fff;
  padding: 0.5rem;
  border-radius: 12px;
}

@media (min-width: 480px) {
  .expense-item__price {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
}
</style>
