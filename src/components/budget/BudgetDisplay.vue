<template>
  <div>
    <h2>Budgets</h2>
    <ul>
      <!--      <BudgetItem v-for="budget in budgets" :budget="budget" :key="budget.id"></BudgetItem>-->
      <!--      <li v-for="cate in budgets" >{{budget}} : {{budgets[cate]}}</li>-->
      <li v-for="(val, key, index) in budgets" :key="index"> {{ key }} : {{ val }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BudgetDisplay",
  data() {
    return {
      budgets: {
        "Must": 0,
        "NiceToHave": 0,
        "Regular": 0,
        "Clothes": 0,
        "LifeImprove": 0,
        "Others": 0
      }
    }
  },
  mounted() {
    axios.get("http://localhost:8080/budget/current-month", {
      headers: {
        authorization: `Bearer ${this.$store.state.token}`
      }
    }).then(response => this.budgets = response.data)
  }
}
</script>

<style scoped>

</style>