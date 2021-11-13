<template>
  <div>
    <h2>Budgets</h2>
    <ul>
      <BudgetItem v-for="budget in budgets" :budget="budget" :key="budget.id"></BudgetItem>
    </ul>
  </div>
</template>

<script>
import BudgetItem from "./BudgetItem";

export default {
  name: "BudgetDisplay",
  data() {
    return {
      budgets: [{
        id: "1234",
        category: "food",
        totalAmount: "100.00",
        remain: "99",
      }, {
        id: "1234",
        category: "food",
        totalAmount: "100.00",
        remain: "99",
      },]
    }
  },
  components: {BudgetItem}
}
</script>

<style scoped>

</style>