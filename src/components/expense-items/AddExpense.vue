<template>
  <div class="new-expense">
    <form v-if="isActive">
      <div class="new-expense__controls">
        <div class="new-expense__control">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" ref="titleInput" />
        </div>
        <div class="new-expense__control">
          <label for="amount">Amount</label>
          <input id="amount" name="amount" type="text" ref="amountInput" />
        </div>
        <div class="new-expense__control">
          <label for="date">Date</label>
          <input id="date" name="date" type="date" ref="dateInput" />
        </div>
      </div>
      <div class="new-expense__actions">
        <base-button @click.prevent="submitData" mode="button-purple" type="submit"
          >Add expense</base-button
        >
        <base-button mode="button-purple" @click="toggleActive" type="button"
          >Cancel</base-button
        >
      </div>
    </form>

    <base-button mode="button-purple" v-if="!isActive" @click="toggleActive"
      >Add new expense</base-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    submitData() {
      const expense = {
        id: this.$refs.titleInput.value,
        title: this.$refs.titleInput.value,
        date: new Date(this.$refs.dateInput.value),
        price: this.$refs.amountInput.value,
      };
      console.log(expense);
      this.$emit('submit-data', expense);
    },
  },
};
</script>

<style>
.new-expense {
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}

.new-expense__controls {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
}

.new-expense__control label {
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}

.new-expense__control input {
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
}

.new-expense__actions {
  text-align: right;
}
</style>
