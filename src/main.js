import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import testEntend from './views/test/extend/extend1/extend.js'
import dialog1 from './views/test/extend/extend2/extend.js'
import dialog2 from './views/test/extend/extend3/entend.js'
import eruda from './untils'

Vue.use(testEntend)
Vue.use(dialog1)
Vue.use(dialog2)
Vue.use(eruda)

Vue.config.productionTip = false


Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')


// function Fn1() {
//   this.age = 1;
// }
// Fn1.prototype.close = function () {
//   this.visible = false;
//   this.show = true;
// }

// const fn1=new Fn1()
// function Fn2(){
//   this.age=2
// }
// Fn2.prototype.$close=Fn1.prototype.close.bind(fn1)
// const fn2=new Fn2()
// console.dir(Fn2)
// console.dir(fn2.visible)
