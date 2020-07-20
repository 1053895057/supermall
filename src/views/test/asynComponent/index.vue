<template>
    <div>
        <h3>异步组件测试</h3>
        <p>点击按钮后，第一个延迟300毫秒从服务器加载，第二个不延迟从服务区加载</p>
        <template v-if="show">
            <later1></later1>
            <later2></later2>
        </template>
        <button @click="loadComponent">加载</button>
    </div>
</template>

<script>
const later1 = resolve =>{
    setTimeout(() => {
        require.ensure([], () => resolve(require('./components/later1.vue')))
    }, 3000);
}
    
const later2 = resolve =>
    require.ensure([], () => resolve(require('./components/later2.vue')))
export default {
    data() {
        return {
            show: false
        }
    },
    components: {
        later1,
        later2
    },
    methods: {
        loadComponent() {
            this.show = !this.show
        }
    }
}
</script>
<style>
</style>