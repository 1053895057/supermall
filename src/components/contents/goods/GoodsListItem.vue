<template>
    <div class="goods-item" @click="itemClick">
      <!-- <img :src="goodsItem.show.img" alt="">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div> -->
      <img src="http://img5.imgtn.bdimg.com/it/u=1773030271,56041054&fm=26&gp=0.jpg" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>香甜面包</p>
        <span class="price">20.00</span>
        <span class="collect">1111</span>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "GoodsListItem",
      props: {
        goodsItem: {
          type: Object,
          default() {
            return {}
          }
        }
      },
      computed:{
        showImg(){
          return this.goodsItem.imgage||this.goodsItem.show.img
        }
      },
      methods:{
        imageLoad(){
          this.$bus.$emit('itemImageLoad')
        },
        // 跳转商品详情页
        itemClick(){
          this.$router.push({
            path:'/detail',
            query:{
              goodsId:2
            }
          })
        }
      }
    }
  </script>
  
  <style scoped>
    .goods-item {
      padding-bottom: 80px;
      position: relative;
  
      width: 48%;
    }
  
    .goods-item img {
      width: 100%;
      border-radius: 10px;
    }
  
    .goods-info {
      font-size: 24px;
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      overflow: hidden;
      text-align: center;
    }
  
    .goods-info p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 6px;
    }
  
    .goods-info .price {
      color: var(--color-high-text);
      margin-right: 40px;
    }
  
    .goods-info .collect {
      position: relative;
    }
  
    .goods-info .collect::before {
      content: '';
      position: absolute;
      left: -30px;
      top: -2px;
      width: 28px;
      height: 28px;
      background: url("~assets/img/common/collect.svg") 0 0/28px 28px;
    }
  </style>
  