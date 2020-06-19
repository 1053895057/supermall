<template>
    <div class="btn-page">
        <btn></btn>
        <div id="extend-test"></div>
    </div>
</template>

<script>
import Btn from '@/components/btn'

// import Profile from './extend'
// console.log(new Profile())
// new Profile().$mount('#app')



export default {
    components: { Btn },
    data() {
        return {
            name: 'test'
        }
    }
}
</script>
<style>
</style>