<template>
  <div id="app">
    <h1>Undercontrol</h1>
    <ul class="router">
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </ul>
    <div class="display-area">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}

</style>
