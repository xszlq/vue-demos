<template>
  <div class="full-calendar-body">
    <div class="weeks">
      <strong class="week" v-for="week in weekNames">{{week}}</strong>
    </div>
    <div class="dates" ref="dates">
      <div class="dates-bg">
        <div class="week-row" v-for="week in currentDates">
          <div class="day-cell" v-for="day in week"
            :class="{'today' : day.isToday,
              'not-cur-month' : !day.isCurMonth}">
            <p class="day-number">{{day.monthDay}}</p>

            <div class="rest-day" v-if="day.weekDay === 0 || day.weekDay === 6">
              <p class="day-number">{{day.monthDay}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- absolute so we can make dynamic td -->
      <div class="dates-events">
        <div class="events-week" v-for="week in currentDates">
          <div class="events-day" v-for="day in week" track-by="$index"
            :class="{'today' : day.isToday,
              'not-cur-month' : !day.isCurMonth}" @click.stop="dayClick(day.date, $event)">
            <p class="day-number">{{day.monthDay}}</p>

            <div class="day-warn" v-if="day.monthDay === 10">
              <button @click="handleShowWarn(day, $event)">warn</button>
            </div>

            <div class="event-box">
              <p class="event-item" v-for="event in day.events" v-show="event.cellIndex <= eventLimit"
                 :class="[classNames(event.cssClass), {
                  'is-start'   : isStart(event.start, day.date),
                  'is-end'     : isEnd(event.end,day.date),
                  'is-opacity' : !event.isShow
                  }]"
                 :title="event.title"
                @click="eventClick(event,$event)">
                {{isBegin(event, day.date, day.weekDay)}}
              </p>
              <p v-if="day.events.length > eventLimit"
                class="more-link" @click.stop="selectThisDay(day, $event)">
                + {{day.events[day.events.length -1].cellIndex - eventLimit}} more
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- full events when click show more -->
      <div class="more-events" v-show="showMore"
        :style="{left: morePos.left + 'px', top: morePos.top + 'px'}">
        <div class="more-header">
          <span class="title">{{moreTitle(selectDay.date)}}</span>
          <span class="close" @click.stop="showMore = false">x</span>
        </div>
        <div class="more-body">
          <ul class="body-list">
            <li v-for="event in selectDay.events"
              v-show="event.isShow" class="body-item"
              @click="eventClick(event,$event)">
              {{event.title}}
            </li>
          </ul>
        </div>
      </div>

      <div class="more-events" v-show="showWarn"
           :style="{left: warnPos.left + 'px', top: warnPos.top + 'px'}">
        <div class="more-header">
          <span class="title">{{moreTitle(warnDay.date)}}</span>
          <span class="close" @click.stop="showWarn = false">x</span>
        </div>
        <div class="more-body" style="height: 50px; background-color: white;">
          <div>当日无任务安排</div>
          <button>调整工时</button>
        </div>
      </div>

      <slot name="body-card">

      </slot>

    </div>
  </div>
</template>
<script type="text/babel">
  import dateFunc from './dateFunc'

  export default {
    props : {
      currentDate : {},
      events      : {},
      weekNames   : {
        type : Array,
        default : []
      },
      monthNames  : {},
      firstDay    : {}
    },
    created () {
      this.events.forEach((item, index) => {
        item._id = item.id || index
        item.end = item.end || item.start
      })
      // this.events = events
    },
    data () {
      return {
        // weekNames : DAY_NAMES,
        weekMask : [1,2,3,4,5,6,7],
        // events : [],
        isLismit : true,
        eventLimit : 3,
        showMore : false,
        showWarn: false,
        morePos : {
          top: 0,
          left : 0
        },
        selectDay : {},
        warnDay: {},
        warnPos: {
          top: 0,
          left : 0,
        }
      }
    },
    watch : {
      weekNames (val) {
        console.log('watch weekNames', val)
      }
    },
    computed : {
      currentDates () {
        return this.getCalendar()
      }
    },
    methods : {
      isBegin (event, date, index) {
        let st = new Date(event.start)

        if (index == 0 || st.toDateString() == date.toDateString()) {
          return event.title
        }
        return '　'
      },
      moreTitle (date) {
        let dt = new Date(date)
        return this.weekNames[dt.getDay()] + ', ' + this.monthNames[dt.getMonth()] + dt.getDate()
      },
      classNames (cssClass) {
        if(!cssClass) return ''
        // string  
        if (typeof cssClass == 'string') return cssClass

        // Array
        if (Array.isArray(cssClass)) return cssClass.join(' ')
        
        // else
        return ''
      },
      getCalendar () {
        // calculate 2d-array of each month
        // first day of this month
        let now = new Date() // today
        let current = new Date(this.currentDate)

        let startDate = dateFunc.getStartDate(current) // 1st day of this month

        let curWeekDay = startDate.getDay()

        // begin date of this table may be some day of last month
        let diff = parseInt(this.firstDay) - curWeekDay
        diff = diff > 0 ? (diff - 7) : diff

        startDate.setDate(startDate.getDate() + diff)
        let calendar = []

        for(let perWeek = 0 ; perWeek < 6 ; perWeek++) {

          let week = []

          for(let perDay = 0 ; perDay < 7 ; perDay++) {
            week.push({
              monthDay : startDate.getDate(),
              isToday : now.toDateString() == startDate.toDateString(),
              isCurMonth : startDate.getMonth() == current.getMonth(),
              weekDay : perDay,
              date : new Date(startDate),
              events : this.slotEvents(startDate),
              isRest: false,
              warnData: {
                type: 0, // 0 当日工时分配超过8小时 1 当日无任务安排
              }
            })

            startDate.setDate(startDate.getDate() + 1)
            // if (startDate.toDateString() == endDate.toDateString()) {
            //   isFinal = true
            //   break
            // }
          }
          calendar.push(week)
          // if (isFinal) break
        }
        return calendar
      },
      slotEvents (date) {

        // find all events start from this date
        let cellIndexArr = []
        let thisDayEvents = this.events.filter(day => {
          let dt = new Date(day.start)
          let st = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate())
          let ed = day.end ? new Date(day.end) : st
          // console.log('slotEvt', st, ed, date)
          return date>=st && date<=ed
        })

        // sort by duration
        thisDayEvents.sort((a,b)=>{
          if(!a.cellIndex) return 1
          if (!b.cellIndex) return -1
          return a.cellIndex - b.cellIndex
        })

        // mark cellIndex and place holder
        for (let i = 0;i<thisDayEvents.length;i++) {
          thisDayEvents[i].cellIndex = thisDayEvents[i].cellIndex || (i + 1)
          thisDayEvents[i].isShow = true
          if (thisDayEvents[i].cellIndex == i+1 || i>2) continue
          thisDayEvents.splice(i,0,{
            title : 'holder',
            cellIndex : i+1,
            start : dateFunc.format(date,'yyyy-MM-dd'),
            end : dateFunc.format(date,'yyyy-MM-dd'),
            isShow : false
          })
        }

        return thisDayEvents
      },
      isStart (eventDate, date) {
        let st = new Date(eventDate)
        return st.toDateString() == date.toDateString()
      },
      isEnd (eventDate,date) {
        let ed = new Date(eventDate)
        return ed.toDateString() == date.toDateString()
      },
      selectThisDay (day, jsEvent) {
        this.selectDay = day
        this.showMore = true
        this.morePos = this.computePos(event.target)
        this.morePos.top -= 100
        let events = day.events.filter(item =>{
          return item.isShow == true
        })

        this.$emit('moreclick', day.date, events, jsEvent)
      },
      computePos (target) {
        let eventRect = target.getBoundingClientRect()
        let pageRect = this.$refs.dates.getBoundingClientRect()
        return {
          left : eventRect.left - pageRect.left,
          top  : eventRect.top + eventRect.height - pageRect.top
        }
      },
      dayClick(day, jsEvent) {
        this.$emit('dayclick', day, jsEvent)
      },
      eventClick(event, jsEvent) {
        if (!event.isShow) {
          return
        }
        jsEvent.stopPropagation()
        let pos = this.computePos(jsEvent.target)
        this.$emit('eventclick', event, jsEvent, pos)
      },
      handleShowWarn(day, jsEvent){
        this.warnDay = day
        this.showWarn = true
        this.warnPos = this.computePos(event.target)
        this.warnPos.top -= 100
      }
    }
  }
</script>
<style lang="scss">
  $colorOne : #FF545E;
  $colorTwo : #FF8247;
  $colorThree : #FFC900;
  $colorFour : #47D5FF;
  $colorFive : #4BD4A1;
  $colorSix : #A46EFF;
  $colorSeven : #0F62FE;
  $fixWidth : 3px;

.full-calendar-body{
  margin-top: 20px;
  .weeks{
    display: flex;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    border-left:1px solid #e0e0e0;
    .week{
      flex:1;
      text-align: center;
      border-right:1px solid #e0e0e0;
    }
  }
  .dates {
    position:relative;
    .week-row{
      // width: 100%;
      // position:absolute;
      border-left:1px solid #e0e0e0;
      display: flex;
      .day-cell{
        position: relative;
        flex:1;
        min-height: 100px;
        padding:4px;
        border-right:1px solid #e0e0e0;
        border-bottom:1px solid #e0e0e0;

        .rest-day{
          position: absolute;
          background-color: #FAFAFA;
          top: 0; left: 0; width: 100%; height: 100%;
         padding: 4px;
          z-index: 10;
          box-sizing: border-box;
        }

        .day-number{
          text-align: right;
        }
        &.today{
          background-color:#fcf8e3;
        }
        &.not-cur-month{
          .day-number{
            color:rgba(0,0,0,.24);
          }
        }
      }
    }
    .dates-events{
      position:absolute;
      top:0;
      left:0;
      z-index:1;
      width: 100%;
      .events-week{
        display: flex;
        .events-day{
          cursor: pointer;
          flex:1;
          min-height: 109px;
          overflow: hidden;
          text-overflow: ellipsis;
          position: relative;


          .day-warn{
            position: absolute;
            top: 4px;
            left: 8px;
            color: #FF5151;
          }

          .day-number{
            text-align: right;
            padding:4px 5px 4px 4px;
            opacity: 0;
          }
          &.not-cur-month{
            .day-number{
              color:rgba(0,0,0,.24);
            }
          }
          .event-box{
            .event-item{
              cursor: pointer;
              font-size:12px;
              background-color:#C7E6FD;
              margin-bottom:2px;
              color: rgba(0,0,0,.87);
              padding:0 0 0 4px;
              height: 18px;
              line-height: 18px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              /*&.is-start{*/
                /*margin-left: 4px;*/
              /*}*/

              &.one.is-start{
                border-left: $fixWidth solid $colorOne;
              }
              &.two.is-start{
                border-left: $fixWidth solid $colorTwo;
              }
              &.three.is-start{
                border-left: $fixWidth solid $colorThree;
              }
              &.four.is-start{
                border-left: $fixWidth solid $colorFour;
              }
              &.five.is-start{
                border-left: $fixWidth solid $colorFive;
              }
              &.six.is-start{
                border-left: $fixWidth solid $colorSix;
              }
              &.seven.is-start{
                border-left: $fixWidth solid $colorSeven;
              }

              &.is-end{
                margin-right: 4px;
              }
              &.is-opacity{
                opacity: 0;
              }

              &.one{
                background-color: #FFDCDE; color:$colorOne;
              }
              &.two{
                background-color: #FFE6D6; color: $colorTwo;
              }
              &.three{
                background-color: #FFF9C4; color: $colorThree;
              }
              &.four{
                background-color: #CCF3FF; color: $colorFour;
              }
              &.five{
                background-color: #E6FFF6; color: $colorFive;
              }
              &.six{
                background-color: #E7DAFF; color: $colorSix;
              }
              &.seven{
                background-color: #EBF4FF; color: $colorSeven;
              }

            }
            .more-link{
              cursor: pointer;
              // text-align: right;
              padding-left: 8px;
              padding-right: 2px;
              color: rgba(0,0,0,.38);
              font-size: 14px;
            }
          }
        }
      }
    }
    .more-events{
      position:absolute;
      width: 150px;
      z-index: 999;
      border:1px solid #eee;
      box-shadow: 0 2px 6px rgba(0,0,0,.15);
      .more-header{
        background-color:#eee;
        padding:5px;
        display: flex;
        align-items : center;
        font-size: 14px;
        .title{
          flex:1;
        }
        .close{
          margin-right: 2px;
          cursor: pointer;
          font-size: 16px;
        }
      }
      .more-body{
        height: 140px;
        overflow: hidden;
        .body-list{
          height: 120px;
          padding:5px;
          overflow: auto;
          background-color:#fff;
          .body-item{
            cursor: pointer;
            font-size:12px;
            background-color:#C7E6FD;
            margin-bottom:2px;
            color: rgba(0,0,0,.87);
            padding:0 0 0 4px;
            height: 18px;
            line-height: 18px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }

    .show-warn{

    }
  }
}
</style>
