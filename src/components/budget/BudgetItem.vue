<template>
  <li><span>Category: {{ budget.category }}  </span>
    <span>TotalAmount: {{ budget.totalAmount }}  </span>
    <span>Remaining :{{ budget.remain }}  </span></li>
</template>

<script>
export default {
  name: "BudgetItem",
  props: ["budget"],
}
</script>

<style scoped>

</style>