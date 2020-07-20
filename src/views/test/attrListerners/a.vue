<!--  -->
<template>
    <div>
        <h2>{{msg}}</h2>
        <b-module :title="title" :type="type" @upDataA="receiveB"></b-module>
    </div>
</template>

<script>
import BModule from './b'
export default {
    components: {
        BModule
    },
    provide(){
        return {
            _this:this
        }
    },
    data() {
        return {
            title: '$attr和$listeners',
            type: '测试',
            msg:'provide'
        }
    },
    methods:{
        receiveB(e){
            console.log(e)
        }
    }
}
</script>
<style>
</style>