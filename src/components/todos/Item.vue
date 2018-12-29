<template>
    <div>
        <input
                type="checkbox"
                :checked="data.done"
                v-on:change="change"
        >
        <span>{{data.value}}</span>
    </div>
</template>

<script>

    export default {
        props: ['data', 'todoDone'],
        methods:{
            change(e){
                this.todoDone(this.data.id, e.target.checked);
            }
        }
    }
</script>