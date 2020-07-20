
import Vue from 'vue'
import TestExtend from './extend.vue'
//使用vue的extend，以vue文件为基础组件，返回一个可以创建vue组件的特殊构造函数
const TestConstructor = Vue.extend(TestExtend)
function showToast(text, duration = 200) {
    const toastDom = new TestConstructor({
        el: document.createElement('div'),
        data() {
            return {
                text: text,
                showExtend: true
            }
        },
        methods: {
            to() {

            }
        }
    }).$mount()
    //在body中动态创建一个div元素，后面自动会把它替换成整个vue文件内的内容
    document.body.appendChild(toastDom.$el)
    setTimeout(() => {
        toastDom.show = false
    }, duration)
}

function registryToast() {
    //把showToast这个方法添加到uve的原型中，可以直接调用，当调用的时候就是执行函数内的内容
    Vue.prototype.$toast = showToast
}

export default registryToast
