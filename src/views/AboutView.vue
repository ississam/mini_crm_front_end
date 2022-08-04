<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

export default {
  name: 'about',

  components: {

  },
  
  mounted () {
    console.log('lo:', localStorage.getItem('email'))
  }
}
</script>