<template>
    <div class="personal-circle">
       <svg xmlns="http://www.w3.org/200/svg" height="110" width="110">
            <circle cx="55" cy="55" r="50" fill="none" :stroke="secondColor" stroke-width="5" stroke-linecap="round"/>
            <circle class="demo2" id="J_demo2" cx="55" cy="55" r="50" fill="none" :stroke="mainColor" stroke-width="5" stroke-dasharray="0,10000"/>
        </svg>

        <div class="show-area">
            <div>
                <span class="display-text">{{displayText}}</span>
                <span>{{unit}}</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'progress-circle',
    props: {
        mainColor: {
          type: String,
          default: "#0F62FE"
        },
        secondColor: {
          type: String,
          default: "#C3DEFF"
        },
        displayText: [String, Number],
        unit: String,
        percent: {
          type: Number,
          default: 0,
        },
    },
    data(){
      return {
        rotate: 'rotate(-180deg)'
      }
    },
    watch:{
      percent(newV){
        let demo2 =  document.querySelector("#J_demo2");
        let circleLength = Math.floor(2 * Math.PI * demo2.getAttribute("r"));

        demo2.setAttribute("stroke-dasharray","" + circleLength * newV / 100 + ",10000");
      }
    },

    mounted(){

    }
  }
</script>

<style lang="scss">
    .personal-circle{
        position: relative;
        width: 110px;
        height: 110px;

        .demo2{
            transform-origin: 55px 55px;
            transform: rotate(-90deg);
            transition: stroke-dasharray 1s ease-in;
        }

        .show-area{
            position: absolute;
            top: 0;
            left: 0;
            font-size: 12px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .display-text{
                font-size: 24px;
            }
        }
    }
</style>