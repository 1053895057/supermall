<template>
    <div>
        <p>attrs:{{$attrs}}</p>
        <p>title:{{title}}</p>
        <c-module v-bind="$attrs" v-on="$listeners"></c-module>
    </div>
</template>

<script>
import CModule from './c'
export default {
    name: 'b-moudle',
    components: {
        CModule
    },
    // inject:{
    //     _this:{
    //         default:''
    //     }
    // },
    inheritAttrs: false,
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: {
        // handleParent() {
        //     this._this.msg=1   
        // }
    }
}
</script>
<style>
</style>