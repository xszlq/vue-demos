<template>
    <div >
        <Item v-for="data in showList" :data="data" :todoDone="todoDone"/>
    </div>
</template>

<script>
    import Item from './Item.vue'
    import {DONE, ALL} from "./consts/consts";

    export default {
        name: 'ItemList',
        props: ['items', 'todoDone', 'renderState'],
        components:{
            Item
        },
        computed: {
           showList(){
               const {renderState} = this;

               if(renderState === ALL){
                   return this.items;
               }else{
                   return this.items.filter(i=> i.done === (renderState === DONE))
               }
           }
        }
    }
</script>