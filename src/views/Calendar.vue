<template>
    <div>
        <full-calendar :events="fcEvents" lang="zh"/>
    </div>

</template>

<script>
  import fullCalendar from './calendar/fullCalendar'

  // import  fullCalendar from 'vue-fullcalendar'


  var demoEvents = [
    {
      title : 'Sunny Out of Office',
      start : '2020-03-12',
      end : '2020-03-12'
    },
    {
      title : 'task 3',
      start : '2020-03-12',
      end : '2020-03-12'
    },
    {
      title : 'task 4',
      start : '2020-03-12',
      end : '2020-03-12'
    },
    {
      title     :  'task 1',
      start     : '2020-03-10',
      end: "2020-04-17",
      cssClass  : 'family',
      YOUR_DATA : {}
    },
    {
      title: "task 2",
      start: "2020-03-12",
      end: "2020-03-12",
      cssClass: "red",
      YOUR_DATA: {},
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
  }
</script>

<style >
    .red{
        background-color: red;
    }
</style>