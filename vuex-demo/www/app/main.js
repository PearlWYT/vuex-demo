import Vue from "vue";
import Vuex from "vuex";

import app from "./components/app.vue";

import store from "./store/store.js";

new Vue({
    el : "#app" ,
    store,
    render : h => h(app)
});