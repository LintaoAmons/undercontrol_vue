<template>
  <form action="">
    <label for="username">Username</label>
    <br>
    <input type="text" name="username" id="username" v-model="username">
    <br>
    <br>
    <label for="fullname">Fullname</label>
    <br>
    <input type="text" name="fullname" id="fullname" v-model="fullname">
    <br>
    <br>
    <label for="password">Password</label>
    <br>
    <input type="password" name="password" id="password" v-model="password">
    <br>
    <br>
    <label for="repassword">rePassword</label>
    <br>
    <input type="password" name="repassword" id="repassword" v-model="rePassword">
    <br>
    <br>
    <input type="button" value="Register" @click="register">
  </form>

</template>

<script>
import axios from "axios"

export default {
  name: "Register",
  data() {
    return {
      username: "",
      fullname: "",
      password: "",
      rePassword: ""
    }
  },
  methods: {
    register() {
      axios.post("http://localhost:8080/api/public/register", {
        username: this.username,
        fullname: this.fullname,
        password: this.password,
        rePassword: this.rePassword,
      })
          .then(response => console.log(response.data))
          .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>