<template>
<div v-if="tokenStatus">
  <nav >
    <!-- <router-link to="/salary">salarie</router-link> |
    <router-link to="/admin">admin</router-link> -->
  </nav>
  <router-view/>
  </div>
  <div v-else>
  <Login/>
  </div>
</template>

<script>
import Login from "./views/LoginView.vue";
export default {
name:"App",
components: {
Login,

  },
  data() {
    return {
      tokenStatus: localStorage.email,
    };
  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
