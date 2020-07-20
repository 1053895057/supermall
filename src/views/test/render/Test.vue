<template>
    <div class="btn-page">
        <btn></btn>
        <!-- <div id="extend-test" v-if="showExtend">
            <div>{{text}}</div>
            <div>{{name}}</div>
        </div> -->
    </div>
</template>

<script>
import Btn from '@/components/btn'

export default {
    name:'Test',
    components: { Btn },
    props:{
        showExtend:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            name: 'tsj'
        }
    },
    methods:{
        vsll(){
            console.log(this.showExtend)
        }
    }

}
</script>
<style>
</style>