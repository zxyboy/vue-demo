<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="value"/>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  watch: {
    value(value, oldValue) {
      console.log(value, oldValue)
    },
    aa(value, oldValue) {
      console.log(value, oldValue)
    }
  },
  data() {
    return {
      value: 1,
      aa: "a",
      c: {
        d: 1,
        e: 2
      }
    }
  },
  beforeCreate() {
    console.log("before create ")
  },
  created() {
    console.log(" created ")
  },
  beforeMount() {
    console.log(" before Mount  ")
  },
  mounted() {
    console.log(" mounted ")
  },
  beforeUpdate() {
    console.log(" before Update  ")
  },
  updated() {
    console.log(" updated ")
  },
  beforeDestroy() {
    console.log(" before Destroy  ")
  },
  destroyed() {
    console.log(" destroyed ")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
