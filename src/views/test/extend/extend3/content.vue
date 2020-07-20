<template>
    <div class="content">
        <h1 @click="close">qqq</h1>
        <h2 @click="test">aaa</h2>
        <div>{{name}}</div>
    </div>
</template>
<script>
export default {
    name: 'test',
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        close() {
            this.$close() // 这个是在最后一个js中去扩展的
        },
        test() {
            console.log('test')
        }
    }
}
</script>