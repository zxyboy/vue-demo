import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   "el" : "#app",
//   render: h => h(App)
// });

let vue = new Vue({
    render: h => h(App),
    el: "#app",
    beforeCreate() {
        console.log("main before create ")
    },
    created() {
        console.log(" main created ")
    },
    beforeMount() {
        console.log(" main before Mount  ")
    },
    mounted() {
        console.log(" main mounted ")
    },
    beforeUpdate() {
        console.log(" main before Update  ")
    },
    updated() {
        console.log(" main updated ")
    },
    beforeDestroy() {
        console.log(" main before Destroy  ")
    },
    destroyed() {
        console.log(" main destroyed ")
    }
})
