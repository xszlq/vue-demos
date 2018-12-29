<template>
    <div>
        <Add v-on:add="add"/>
        <ItemList :items="items" :todoDone="todoDone" :renderState="renderState"/>
        <ThingFilter :renderState="renderState" v-on:stateChange="stateChange"/>
    </div>
</template>

<script>
    import Add from '@/components/todos/Add.vue'
    import ItemList from "../components/todos/ItemList";
    import ThingFilter from '../components/todos/Filter'
    import {DONE, UNDO, ALL} from "../components/todos/consts/consts";

    let uid = 0;

    export default {
        name: 'todo',
        components: {
            ItemList,
            Add, ThingFilter
        },
        methods: {
            add(value) {
                if (!value) return;

                this.items.push({
                    id: uid++, value,
                    done: false
                });
            },
            todoDone(id, checked) {
                console.log('tttt', id);
                const item = this.items.find(i => i.id === id);

                if (item) {
                    item.done = checked;
                }
            },
            stateChange(state){
                this.renderState = state;
            }
        },
        data() {
            return {
                items: [
                    {
                        id: -1,
                        value: 'xxxx',
                        done: false
                    },
                    {
                        id: -2,
                        value: 'xxxx',
                        done: true
                    }
                ],
                renderState: UNDO
            }
        },
    }

</script>

