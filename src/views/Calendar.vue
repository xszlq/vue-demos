<template>
    <div>
        <full-calendar :events="taskPlanList" lang="zh" :calendarList="calendarList" :abnormalList="abnormalList"
                       />
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

  let themeMap = {
    1: 'one',
    2: 'two',
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
  }

  export default {
    name: 'Calendar',
    components: {
      fullCalendar:fullCalendar
    },
    data () {
      return {
        taskPlanList : [],
        calendarList: [],
        abnormalList: [],
      }
    },
    mounted(){
     let data = {
        "abnormalList": [
        {
          "abnormalDay": 1583078400000,
          "abnormalType": 2,
          "numberLocation": 2
        },
        {
          "abnormalDay": 1583164800000,
          "abnormalType": 2,
          "numberLocation": 3
        },
        {
          "abnormalDay": 1583251200000,
          "abnormalType": 2,
          "numberLocation": 4
        },
        {
          "abnormalDay": 1583337600000,
          "abnormalType": 2,
          "numberLocation": 5
        },
        {
          "abnormalDay": 1583424000000,
          "abnormalType": 2,
          "numberLocation": 6
        },
        {
          "abnormalDay": 1583683200000,
          "abnormalType": 2,
          "numberLocation": 9
        },
        {
          "abnormalDay": 1583769600000,
          "abnormalType": 2,
          "numberLocation": 10
        },
        {
          "abnormalDay": 1583856000000,
          "abnormalType": 2,
          "numberLocation": 11
        },
        {
          "abnormalDay": 1583942400000,
          "abnormalType": 2,
          "numberLocation": 12
        },
        {
          "abnormalDay": 1584028800000,
          "abnormalType": 2,
          "numberLocation": 13
        },
        {
          "abnormalDay": 1584288000000,
          "abnormalType": 2,
          "numberLocation": 16
        },
        {
          "abnormalDay": 1584374400000,
          "abnormalType": 2,
          "numberLocation": 17
        },
        {
          "abnormalDay": 1584460800000,
          "abnormalType": 2,
          "numberLocation": 18
        },
        {
          "abnormalDay": 1584547200000,
          "abnormalType": 2,
          "numberLocation": 19
        },
        {
          "abnormalDay": 1584633600000,
          "abnormalType": 2,
          "numberLocation": 20
        },
        {
          "abnormalDay": 1584892800000,
          "abnormalType": 2,
          "numberLocation": 23
        },
        {
          "abnormalDay": 1584979200000,
          "abnormalType": 2,
          "numberLocation": 24
        },
        {
          "abnormalDay": 1585065600000,
          "abnormalType": 2,
          "numberLocation": 25
        },
        {
          "abnormalDay": 1585238400000,
          "abnormalType": 1,
          "numberLocation": 27
        },
        {
          "abnormalDay": 1585324800000,
          "abnormalType": 1,
          "numberLocation": 28
        },
        {
          "abnormalDay": 1585497600000,
          "abnormalType": 2,
          "numberLocation": 30
        },
        {
          "abnormalDay": 1585843200000,
          "abnormalType": 2,
          "numberLocation": 34
        },
        {
          "abnormalDay": 1586188800000,
          "abnormalType": 2,
          "numberLocation": 38
        },
        {
          "abnormalDay": 1586275200000,
          "abnormalType": 2,
          "numberLocation": 39
        },
        {
          "abnormalDay": 1586361600000,
          "abnormalType": 2,
          "numberLocation": 40
        },
        {
          "abnormalDay": 1586448000000,
          "abnormalType": 2,
          "numberLocation": 41
        }
      ],
        "calendarList": [
        {
          "numberLocation": 1,
          "workdayDate": 1582992000000,
          "workdayType": 2
        },
        {
          "numberLocation": 2,
          "workdayDate": 1583078400000,
          "workdayType": 1
        },
        {
          "numberLocation": 3,
          "workdayDate": 1583164800000,
          "workdayType": 1
        },
        {
          "numberLocation": 4,
          "workdayDate": 1583251200000,
          "workdayType": 1
        },
        {
          "numberLocation": 5,
          "workdayDate": 1583337600000,
          "workdayType": 1
        },
        {
          "numberLocation": 6,
          "workdayDate": 1583424000000,
          "workdayType": 1
        },
        {
          "numberLocation": 7,
          "workdayDate": 1583510400000,
          "workdayType": 2
        },
        {
          "numberLocation": 8,
          "workdayDate": 1583596800000,
          "workdayType": 2
        },
        {
          "numberLocation": 9,
          "workdayDate": 1583683200000,
          "workdayType": 1
        },
        {
          "numberLocation": 10,
          "workdayDate": 1583769600000,
          "workdayType": 1
        },
        {
          "numberLocation": 11,
          "workdayDate": 1583856000000,
          "workdayType": 1
        },
        {
          "numberLocation": 12,
          "workdayDate": 1583942400000,
          "workdayType": 1
        },
        {
          "numberLocation": 13,
          "workdayDate": 1584028800000,
          "workdayType": 1
        },
        {
          "numberLocation": 14,
          "workdayDate": 1584115200000,
          "workdayType": 2
        },
        {
          "numberLocation": 15,
          "workdayDate": 1584201600000,
          "workdayType": 2
        },
        {
          "numberLocation": 16,
          "workdayDate": 1584288000000,
          "workdayType": 1
        },
        {
          "numberLocation": 17,
          "workdayDate": 1584374400000,
          "workdayType": 1
        },
        {
          "numberLocation": 18,
          "workdayDate": 1584460800000,
          "workdayType": 1
        },
        {
          "numberLocation": 19,
          "workdayDate": 1584547200000,
          "workdayType": 1
        },
        {
          "numberLocation": 20,
          "workdayDate": 1584633600000,
          "workdayType": 1
        },
        {
          "numberLocation": 21,
          "workdayDate": 1584720000000,
          "workdayType": 2
        },
        {
          "numberLocation": 22,
          "workdayDate": 1584806400000,
          "workdayType": 2
        },
        {
          "numberLocation": 23,
          "workdayDate": 1584892800000,
          "workdayType": 1
        },
        {
          "numberLocation": 24,
          "workdayDate": 1584979200000,
          "workdayType": 1
        },
        {
          "numberLocation": 25,
          "workdayDate": 1585065600000,
          "workdayType": 1
        },
        {
          "numberLocation": 26,
          "workdayDate": 1585152000000,
          "workdayType": 1
        },
        {
          "numberLocation": 27,
          "workdayDate": 1585238400000,
          "workdayType": 1
        },
        {
          "numberLocation": 28,
          "workdayDate": 1585324800000,
          "workdayType": 2
        },
        {
          "numberLocation": 29,
          "workdayDate": 1585411200000,
          "workdayType": 2
        },
        {
          "numberLocation": 30,
          "workdayDate": 1585497600000,
          "workdayType": 1
        },
        {
          "numberLocation": 31,
          "workdayDate": 1585584000000,
          "workdayType": 1
        },
        {
          "numberLocation": 32,
          "workdayDate": 1585670400000,
          "workdayType": 1
        },
        {
          "numberLocation": 33,
          "workdayDate": 1585756800000,
          "workdayType": 1
        },
        {
          "numberLocation": 34,
          "workdayDate": 1585843200000,
          "workdayType": 1
        },
        {
          "numberLocation": 35,
          "workdayDate": 1585929600000,
          "workdayType": 2
        },
        {
          "numberLocation": 36,
          "workdayDate": 1586016000000,
          "workdayType": 2
        },
        {
          "numberLocation": 37,
          "workdayDate": 1586102400000,
          "workdayType": 2
        },
        {
          "numberLocation": 38,
          "workdayDate": 1586188800000,
          "workdayType": 1
        },
        {
          "numberLocation": 39,
          "workdayDate": 1586275200000,
          "workdayType": 1
        },
        {
          "numberLocation": 40,
          "workdayDate": 1586361600000,
          "workdayType": 1
        },
        {
          "numberLocation": 41,
          "workdayDate": 1586448000000,
          "workdayType": 1
        },
        {
          "numberLocation": 42,
          "workdayDate": 1586534400000,
          "workdayType": 2
        }
      ],
        "taskPlanList": [
        {
          "end": 1585324800000,
          "prjCode": "PJ2020B0001",
          "start": 1585152000000,
          "taskId": 326,
          "taskWorkloadPlan": 16,
          "title": "任务一吃饭"
        },
        {
          "end": 1585152000000,
          "prjCode": "PJ2020B0001",
          "start": 1585152000000,
          "taskId": 327,
          "taskWorkloadPlan": 0,
          "title": "任务二喝水"
        },
        {
          "end": 1585756800000,
          "prjCode": "PJ2020B0001",
          "start": 1585756800000,
          "taskId": 329,
          "taskWorkloadPlan": 0,
          "title": "交付"
        },
        {
          "end": 1585324800000,
          "prjCode": "PJ2020B0002",
          "start": 1585152000000,
          "taskId": 333,
          "taskWorkloadPlan": 16,
          "title": "任务一吃饭"
        },
        {
          "end": 1585152000000,
          "prjCode": "PJ2020B0002",
          "start": 1585152000000,
          "taskId": 334,
          "taskWorkloadPlan": 0,
          "title": "任务二喝水"
        },
        {
          "end": 1585756800000,
          "prjCode": "PJ2020B0002",
          "start": 1585756800000,
          "taskId": 336,
          "taskWorkloadPlan": 0,
          "title": "交付"
        },
        {
          "end": 1585756800000,
          "prjCode": "PJ2020A0003",
          "start": 1585584000000,
          "taskId": 340,
          "taskWorkloadPlan": 10,
          "title": "yzytest"
        }
      ]
      };

     setTimeout(()=>{
       this.dataDeal(data);
     },200)
    },

    methods:{
      dataDeal(data){
        let {abnormalList, calendarList, taskPlanList} = data;

        abnormalList = abnormalList || [];
        calendarList = calendarList || [];
        taskPlanList = taskPlanList || [];

        taskPlanList.forEach((item, index)=>{
          // add task theme
          let themeKey = index%7 + 1;
          item.cssClass = themeMap[themeKey];
        });

        this.taskPlanList = taskPlanList;
        // this.dayList = calendarList.filter(i => i.workdayType === 2)
        this.calendarList = calendarList;
        this.abnormalList = abnormalList;

      },

      handleMoreClick(){

      }
    }
  }
</script>

<style >
    .red{
        background-color: red;
    }
</style>