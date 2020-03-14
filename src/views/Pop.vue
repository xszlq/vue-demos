<template>
    <div>
        <button @click="showHint">显示提示</button>
    </div>
</template>

<script>
    import Dialog from '../components/dialog/dialog'

  export default {
    name: 'Pop',
    methods: {
      showHint(){
        Dialog.alert({
          title: "自定义title",
          content: "自定义content"
        }).then(res=>{
          console.log('选择了确定啊');
        }, ()=>{
          console.log('选择了取消啊');
        })
      }
    }
  }
</script>

<style scoped>

</style>