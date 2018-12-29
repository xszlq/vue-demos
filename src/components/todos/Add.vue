<template>
    <div>
        <input @keyup.enter="handleInputFinish">
    </div>
</template>

<script>
    export default {
        name: 'Add',
        props: {
            msg: String
        },
        methods: {
            handleInputFinish(e){
                this.$emit('add', e.target.value);
                e.target.value = "";
            }
        },
    }
</script>