<template>
    <div>
        <full-calendar :events="fcEvents" lang="zh" @moreClick="handleMoreClick"/>
    </div>

</template>

<script>
  import fullCalendar from './calendar/fullCalendar'

  // import  fullCalendar from 'vue-fullcalendar'



  let demoEvents = [
    {
      title : 'Sunny Out of Office',
      start : '2020-03-12',
      end : '2020-03-12',
      cssClass: "one",
    },
    {
      title : '任务名称一般还是有十个字吧',
      start : '2020-03-12',
      end : '2020-03-12',
      cssClass: "two",
    },
    {
      title : 'task 4',
      start : '2020-03-20',
      end : '2020-03-20',
      cssClass: "three",
    },
    {
      title     :  'task 1',
      start     : '2020-03-10',
      end: "2020-04-17",
      cssClass: "four",
      YOUR_DATA : {}
    },
    {
      title: "task 2",
      start: "2020-03-13",
      end: "2020-03-13",
      cssClass: "five",
      YOUR_DATA: {},
    }
  ];

  let restDay = [1585538968778, 1585628958778];

  let warnList = [
    {
      type: 0,
      date: 1585538968778,
    }
  ];

  export default {
    name: 'Calendar',
    components: {
      fullCalendar:fullCalendar
    },
    data () {
      return {
        fcEvents : demoEvents
      }
    },
    methods:{
      handleMoreClick(){
        // console.log('arguments:', arguments)
      }
    }
  }
</script>

<style >
    .red{
        background-color: red;
    }
</style>