<template>
    <div id="extend-test" v-if="showExtend">
        <div>{{text}}</div>
        <div>{{name}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'jack',
            showExtend:false
        }
    }
}
</script>
<style>
</style>