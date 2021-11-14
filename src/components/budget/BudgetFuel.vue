<template>
  <div>
    <h2>Budget fuel</h2>
    <ul>
      <li v-for="(val, key, index) in budgetFuelSettings" :key="index"> {{ key }}: {{ val }}</li>
    </ul>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "BudgetFuel",
  data() {
    return {
      budgetFuelSettings: {}
    }
  },
  mounted() {
    axios.get("http://localhost:8080/budget/fuel", {
      headers: {
        authorization: `Bearer ${this.$store.state.token}`
      }
    }).then(response => {
      console.log(response.data)
      this.budgetFuelSettings = response.data.budgetFuelSettings
    })
  }

}
</script>

<style scoped>

</style>