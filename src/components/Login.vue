<template>
  <div>
    <label for="username">Username</label>
    <br>
    <input type="text" name="username" id="username" v-model="username">
    <br>
    <br>
    <label for="password">Password</label>
    <br>
    <input type="password" name="password" id="password" v-model="password">
    <br>
    <br>
    <input type="button" value="Login" @click="login">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    login() {
      axios.post("http://localhost:8080/api/public/login", {
        "username": this.username,
        "password": this.password
      }).then(response => this.$store.commit("setToken", response.headers["authorization"]))
          .catch(error => console.log(error))
    }
  }

}
</script>

<style scoped>

</style>