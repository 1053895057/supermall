<template>
    <div class="goods">
        <!-- <Goods-list-item v-for="item in goods" :goods-item="item"/> -->
        <Goods-list-item v-for="item in [1,2,3,4]"/>
    </div>
</template>
<script>
    import GoodsListItem from './GoodsListItem.vue'
    export default {
        name:'GoodsList',
        components:{
            GoodsListItem
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 4px;
  }

</style>