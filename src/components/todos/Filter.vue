<template>
    <div @click="handleClick">
        <label for="all">全部</label><input name="status" id="all" type="radio" checked/>
        <label for="done">已完成</label><input name="status" id="done" type="radio"/>
        <label for="undo">未完成</label><input name="status" id="undo" type="radio"/>
        <p>{{count}}</p>
        <button @click="increment">add</button>
    </div>
</template>

<script>

    export default {
        computed:{
            count(){
                return this.$store.state.count
            }
        },
        methods:{
            handleClick(e){
                const {id} = e.target;

                if(id){
                   this.$emit("stateChange", id)
                }
            },
            increment () {
                this.$store.commit('increment')
            },
        }
    }
</script>