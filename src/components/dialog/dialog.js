import Vue from 'vue'
import pop from '../pop/pop'
import './dialog.scss'

// 支持两种调用方式 Dialog.alert Dialog.confirm

function Dialog () {

}

let Comp = function(config={}, resolve, reject){
  const {title = '提示', content = '这是内容区域',} = config

  return Vue.extend({
    name: 'alert',
    data: function () {
      return {
        title,
        content,
        show: true
      }
    },
    template:
      ` <pop class="head-pop" :show="show" :togglePop="togglePop">
                <div class="header">
                    <div class="title">{{title}}</div>
                    <button @click="togglePop" class="el-icon-close" style="border: none;">x</button>
                </div>
                <div>{{content}}</div>
                <div class="footer">
                    <button @click="handleCancel"  class="head-btn cancel">取消</button>
                    <button @click="handleConfirm" class="head-btn confirm">确定</button>
                </div>
        </pop>`,
    components: {
      pop,
    },
    methods: {
      togglePop(){
        this.show = !this.show;
      },
      handleConfirm(){
        this.togglePop();
        resolve();
      },
      handleCancel(){
        this.togglePop();
        reject();
      }
    }
  });
}

Dialog.alert = function (config) {
  return new Promise((resolve, reject) => {
    console.log('resolve:', resolve)
    let Comp1 = Comp(config, resolve, reject)

    let ins = new Comp1().$mount();

    document.body.appendChild(ins.$el);
  })
}

export default Dialog

