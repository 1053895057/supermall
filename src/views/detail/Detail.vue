<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="nav"></detail-nav-bar>
        <scroll class="content" ref='scroll' @scroll="contentScroll" :probe-type="3">
            <detail-swiper :top-images="topImages" />
            <detail-base-info :goods="goods" />
            <detail-shop-info :shop="shop" />
            <detail-goods-info class="bg-yellow" :detail-info="detailInfo" @imageLoad="imageLoad" />
            <detail-param-info ref="params" class="bg-blue" :param-info="paramInfo" />
            <detail-param-info ref="comment" class="bg-red" :param-info="paramInfo" />
            <detail-param-info ref="recommend" class="bg-yellow" :param-info="paramInfo" />
        </scroll>

    </div>
</template>
<script>
    import DetailNavBar from './childComps/DetailNavBar.vue'
    import DetailSwiper from './childComps/DetailSwiper.vue'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import DetailParamInfo from './childComps/DetailParamInfo'

    import Scroll from 'components/commons/scroll/Scroll'
    import { debounce } from 'commons/until'
    import { getDetail, Goods, shop } from 'http/detail'
    export default {
        name: 'Detail',
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailParamInfo,
            Scroll
        },
        data() {
            return {
                goodsId: null,
                topImages: [
                    {
                        image: 'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg'
                    },
                    {
                        image: 'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg'
                    }
                ],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                themTopY: [],  //保存滑动位置信息
                getThemTopY: null,  //定义一个闭包函数
                currentIndex: 0
            }
        },
        created() {
            // 1.拿到goodsid
            this.goodsId = this.$route.query.goodsId
            // 2.请求数据
            this.getGoodsDetail()
        },
        methods: {
            getGoodsDetail() {
                getDetail(this.goodsId).then((data) => {
                    // 1.获取顶部的图片轮播数据
                    // console.log(res);
                    // const data = res.result;
                    // this.topImages = data.itemInfo.topImages

                    // 2.获取商品信息
                    // this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

                    // 3.创建店铺信息的对象
                    // this.shop = new Shop(data.shopInfo)

                    // 4.保存商品的详情数据
                    // this.detailInfo = data.detailInfo;

                    // 5.获取参数的信息
                    // this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

                    // 1.第一次获取，值不对
                    // this.$refs.params.$el压根没有渲染
                    // this.themTopY=[]
                    // this.themTopY.push(0)
                    // this.themTopY.push(this.$refs.params.$el.offsetTop)
                    // this.themTopY.push(this.$refs.comment.$el.offsetTop)
                    // this.themTopY.push(this.$refs.recommend.$el.offsetTop)
                    // console.log(this.themTopY)

                    // 2.第二次获取，值不对
                    // 图片没有计算在内，很多图片还在加载，没有撑起高度
                    // 对应dom已经渲染完毕（img内的src资源还在加载）
                    // this.$nextTick(()=>{
                    //      this.themTopY=[]
                    //     this.themTopY.push(0)
                    //     this.themTopY.push(this.$refs.params.$el.offsetTop)
                    //     this.themTopY.push(this.$refs.comment.$el.offsetTop)
                    //     this.themTopY.push(this.$refs.recommend.$el.offsetTop)
                    //     console.log(this.themTopY)
                    // })


                    // 3.获取正确
                    // 给this.getThemTopY赋值一个防抖函数，在img加载完成后调用
                    this.getThemTopY = debounce(() => {
                        console.log(2)
                        this.themTopY = []
                        this.themTopY.push(0)
                        this.themTopY.push(this.$refs.params.$el.offsetTop)
                        this.themTopY.push(this.$refs.comment.$el.offsetTop)
                        this.themTopY.push(this.$refs.recommend.$el.offsetTop)
                        // 加上一个最大值，用于下方判断
                        this.themTopY.push(Number.MAX_VALUE)
                        console.log(this.themTopY)
                    }, 500)

                })
            },
            imageLoad() {
                this.$refs.scroll.refresh()
                this.getThemTopY()

                // this.themTopY = []
                // this.themTopY.push(0)
                // this.themTopY.push(this.$refs.params.$el.offsetTop)
                // this.themTopY.push(this.$refs.comment.$el.offsetTop)
                // this.themTopY.push(this.$refs.recommend.$el.offsetTop)
                // console.log(this.themTopY)
            },
            /*
            顶部点击某一个按钮
            */
            itemClick(index) {
                this.$refs.scroll.scrollTo(0, -this.themTopY[index])
            },
            /*
            监听滚动位置
            */
            contentScroll(position) {
                // 1.获取Y值
                const positionY = -position.y
                // 2.进行对比
                let length = this.themTopY.length;
                for (let i = 0; i < length - 1; i++) {
                    // if (this.currentIndex !== i && (i < length - 1 && positionY >= this.themTopY[i] && positionY < this.themTopY[i + 1]) || (i === length - 1 && positionY >= this.themTopY[i])) {
                    // }
                    if (this.currentIndex !== i && (i < length - 1 && positionY >= this.themTopY[i] && positionY < this.themTopY[i + 1])) {
                        this.currentIndex = i
                        this.$refs.nav.currentIndex = i
                    }
                }
            }
        }
    }
</script>
<style scoped>
    #detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }

    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }

    .content {
        height: calc(100% - 44px);
    }

    .bg-blue {
        height: 1000px;
        background-color: darkcyan;
    }

    .bg-red {
        height: 500px;
        background-color: crimson;
    }

    .bg-yellow {
        height: 1000px;
        background-color: burlywood;
    }
</style>