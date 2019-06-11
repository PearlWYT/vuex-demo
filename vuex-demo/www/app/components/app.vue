<template>
    <div>
        <h1>{{$store.state.a}}</h1>
        <button @click="add(1)">增加</button>
        <button @click="minus">减少</button>
        <button @click="add(2)">增加2</button>
        <button @click="addIfOdd">奇数增加</button>
        <button @click="tanchuang">按我alert一句话</button>
        <button @click="__add">增加1（不map）</button>
        <button @click="__addIfOdd">奇数增加1（不map）</button>
    </div>
</template>

<script>
    import Vue from "vue";
    import { mapActions } from 'vuex'
   
    export default {
        methods : {
            ...mapActions([
                "add",
                "minus",
                "addIfOdd"
            ]),
            tanchuang(){
                alert(this.$store.state.a);
            },
            __add(){
                this.$store.commit("add" , 1);
            },
            __addIfOdd(){
                this.$store.dispatch("addIfOdd" , 1);
            }
        }
    }
</script>

<style scoped>
    
</style>
