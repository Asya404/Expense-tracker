<template>
  <div class="new-expense">
    <form v-if="isActive">
      <div class="new-expense__controls">
        <div class="new-expense__control">
          <label>Title</label>
          <input type="text" placeholder="Title" />
        </div>
        <div class="new-expense__control">
          <label>Amount</label>
          <input type="text" placeholder="Amount" />
        </div>
        <div class="new-expense__control">
          <label>Date</label>
          <input type="date" placeholder="Date" />
        </div>
      </div>
      <div class="new-expense__actions">
        <button type="submit">Add expense</button>
        <button @click="toggleActive" type="button">Cancel</button>
      </div>
    </form>
    <button v-if="!isActive" @click="toggleActive">Add new expense</button>
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
    }
  }
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

.new-expense button {
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: #fff;
  border-radius: 12px;
  margin-right: 1rem;
}
</style>
