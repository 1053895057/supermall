
import Vue from 'vue'
var profile=Vue.extend({
    template:'<p>{{name}}</p>',
    data(){
        return {
            name:'test'
        }
    }
})
export default profile