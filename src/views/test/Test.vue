<template>
    <div>
        <ul>
            <li v-for="(item,index) in arr">{{item}}</li>
        </ul>
        <button @click="setArr">修改</button>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default{
        name:'Test',
        data(){
            return{
                arr:[1,2,3,4,5]
            }
        },
        methods:{
            setArr(){
                this.arr[0]=9
                this.arr.push('')
                this.arr.pop()
            }
        }
    }



</script>