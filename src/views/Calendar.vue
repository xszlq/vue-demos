<template>
    <div>
        <full-calendar :events="fcEvents" locale="fr">
            <template slot="fc-body-card">
                <h3>hello</h3>
            </template>
        </full-calendar>
        <div>hello world</div>
    </div>

</template>

<script>
  import fullCalendar from 'vue-fullcalendar'

  var demoEvents = [
    {
      title : 'Sunny Out of Office',
      start : '2016-08-25',
      end : '2017-07-27'
    },
    {
      title     :  'task 1',
      start     : '2020-03-10',
      end: "2020-03-27",
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