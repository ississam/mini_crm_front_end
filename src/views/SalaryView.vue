<template>
  <div class="home">

     <h1> SL view</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SalaryView',
  components: {
    // HelloWorld
  },
  
  mounted () {
    console.log(localStorage.email)
  }
}
</script>
