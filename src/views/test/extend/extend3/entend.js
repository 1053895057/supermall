import Vue from 'vue'
import container from './container.vue'
const containerConstructor = Vue.extend(container)
// 缓存container的实例
let cache = []
let getComponentInstance = (constructor) => {
    if (cache.length) {
        let instance = cache[0]
        cache.splice(0, 1)
        return instance
    }
    return new constructor({
        el: document.createElement('div')
    })
}
let cacheInstance = (instance) => {
    if (instance) {
        cache.push(instance)
    }
}
let removeContainerDom = (e) => {
    // 先移除自定义组件的元素content.vue
    const content = e.target.querySelector('.content-wrap')
    content.removeChild(content.childNodes[0])
    // 然后再移除container.vue
    if (e.target.parentNode) {
        e.target.parentNode.removeChild(e.target)
    }
}

containerConstructor.prototype.close = function () {
    this.visible = false;
    // this.$el元素transition动画完成后执行removeContainerDom函数
    this.$el.addEventListener('transitionend', removeContainerDom);
    this.closed = true;
    cacheInstance(this)
    if (this.closeCallback) {
        this.closeCallback()
    }
}

function showDialog(object) {

    const containerInstance = getComponentInstance(containerConstructor)
    const { component, data, config } = object
    const dialogContructor = Vue.extend(component)
    dialogContructor.prototype.$close = containerConstructor.prototype.close.bind(containerInstance)
    const dialogBodyInstance = new dialogContructor({
        el: containerInstance.$el
    })
    // 将需要传给自定义组件的数据传入
    for (let i in data) {
        dialogBodyInstance[i] = data[i]
    }
 
    containerInstance.closed = false
    containerInstance.duration = config ? config.duration : 0
    containerInstance.maskCloseDialog = config ? config.maskCloseDialog : false
    containerInstance.closeCallback = config ? config.closeCallback : null
    clearTimeout(containerInstance.timer);
    containerInstance.$el.querySelector('.content-wrap').appendChild(dialogBodyInstance.$el)
    document.body.appendChild(containerInstance.$el)
    // 元素在body中添加好后
    Vue.nextTick(() => {
        containerInstance.visible = true
        containerInstance.$el.removeEventListener('transitionend', removeContainerDom)
        const { duration } = containerInstance
        if (duration && duration > 0) {
            containerInstance.timer = setTimeout(() => {
                if (containerInstance.closed) {
                    return
                }
                containerInstance.close()
            }, duration)
        }
    })

    // 以上代码的简易版本
    
    // const containerInstance=new containerConstructor({
    //     el:document.createElement('div'),
    // }).$mount()
    // const dialogContructor=Vue.extend(component)
    // const dialogBodyInstance = new dialogContructor({
    //     el: containerInstance.$el
    // })
    // // 将需要传给自定义组件的数据传入
    // for (let i in data) {
    //     dialogBodyInstance[i] = data[i]
    // }
    // containerInstance.$el.querySelector('.content-wrap').appendChild(dialogBodyInstance.$el)
    // document.body.appendChild(containerInstance.$el)
    // Vue.nextTick(()=>{
    //     containerInstance.visible=true
    // })
    return containerInstance
}

function asynDialog() {
    Vue.prototype.$asynDialog = showDialog
}
 
export default asynDialog