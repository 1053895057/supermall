import Vue from 'vue'
import dialog from './extend.vue'

export default function(Vue){
    const Constructor=Vue.extend(dialog)
    const Instance = new Constructor()
    Instance.$mount()
    document.body.appendChild(Instance.$el)
    Vue.prototype.$dialog=(title,content)=>{
        Instance.visible=true;
        Instance.title=title;
        Instance.content=content
        return Instance.showMsgBox().then(data=>{
            console.dir(Promise)
            return Promise.resolve(data)
        })
        .catch(err=>{
            return Promise.reject(err)
        })
    }
}
