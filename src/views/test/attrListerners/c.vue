<template>
    <div>
        <p @click="handlegrandParent">type:{{type}}</p>
        <button @click="sendMessage">传值</button>
    </div>
</template>

<script>
export default {
    name: 'CModule',
    inject: {
        _this: {
            default: ''
        }
    },
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: {
        sendMessage() {
            this.$emit('upDataA', 'success')
        },
        handlegrandParent(){
            this._this.msg=2
        }
    }
}
</script>
<style>
</style>