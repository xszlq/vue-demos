<template>
 <div class="x-rdms-pop" v-show="show">
     <div :class="className" :style="inputStyle">
        <slot></slot>
     </div>
     <div class="x-rdms-pop-mask" @click="maskClick"></div>
 </div>
</template>
<script>
import './pop.scss';

export default {
  name: "x-rdms-pop",

  props: {
    show: Boolean,// whether to show popup
    title: String,
    togglePop: Function,
    maskClose: {
      default: false,
      type: Boolean
    },
    // 弹出位置
    position: {
      default: "center",
      type: String
    },
    //
    width: String,
  },
  computed:{
    className(){
      return this.show ?  `x-rdms-pop-content x-rdms-pop-${this.position}` : 'x-rdms-pop-content'
    },
    inputStyle(){
      return this.position === "right" ? `height: 100%;` : ""
    }
  },

  methods:{
    close() {
      console.log('pop close')
      this.togglePop();
    },
    maskClick(){
      console.log('click mask close ', this.maskClose)
      if(this.maskClose){
        this.close();
      }
    },
  }
}
</script>