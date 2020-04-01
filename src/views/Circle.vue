<template>
    <process-circle displayText="80" unit="%" :percent="65"/>
</template>

<script>
    import processCircle from '../components/circle/circle'

  export default {
    name: 'process-circle2',
    components: {
      processCircle
    }
  }
</script>

<style scoped>

</style>