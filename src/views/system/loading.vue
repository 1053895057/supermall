<!--  -->
<template>
    <div>
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
export default {
    name: 'loading',
    data() {
        return {
            msg: '加载中'
        }
    },
    created(){
        console.log(1111111)
    }
}
</script>
<style>
</style>