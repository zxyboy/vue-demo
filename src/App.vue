<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" v-on:click="imageClick()">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  methods: {
    imageClick() {
      console.log("image click.......")
    }
  },

  beforeCreate() {
    console.log("app before create ")
  },
  created() {
    console.log(" app created ")
  },
  beforeMount() {
    console.log(" app before Mount  ")
  },
  mounted() {
    console.log(" app mounted ")
  },
  beforeUpdate() {
    console.log(" app before Update  ")
  },
  updated() {
    console.log(" app updated ")
  },
  beforeDestroy() {
    console.log(" app before Destroy  ")
  },
  destroyed() {
    console.log(" app destroyed ")
  }
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
}
</style>
