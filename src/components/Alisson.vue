<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/"> voutar </router-link>
  </div>
</template>

<script>
export default {
  name: 'Alisson',
  data () {
    return {
      msg: 'alisson é lindo'
    }
  },
  asyncData () {
    console.log('#AQUI#')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
