<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"  v-show="isTabFixed"/>
    </TabControl>
    
    <scroll class="content" ref='scroll' :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <HomeSwiper :banners="banners" @swiperImgLoad="swiperImgLoad"></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>

      <TabControl  :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" v-show="!isTabFixed"/>
      </TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
      <FeatureView></FeatureView>
      <FeatureView></FeatureView>
      <FeatureView></FeatureView>
    </scroll>
    <!-- .native对于组件的监听事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
  import RecommendView from 'views/home/childComps/RecommendView.vue'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/commons/navbar/NavBar'
  import { getHomeMultidata, getHomeGoods } from 'http/home'
  import { debounce } from 'commons/until'
  import TabControl from 'components/contents/tabControl/TabControl'
  import GoodsList from 'components/contents/goods/GoodsList'
  import Scroll from 'components/commons/scroll/Scroll'
  import BackTop from 'components/contents/backTop/BackTop'




  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] },
        },
        currentType: 'pop',
        isShowBackTop: false,
        tapOffofsetTop: 0,
        isTabFixed: false,
        saveY:0
      }
    },
    computed: {
      showGoods() {
        let type = this.currentType
        return this.goods[type].list
      }
    },
    created() {
      // 请求多个数据
      this.getHomeMultidata()


      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    mounted() {
      /*
      1.图片加载完成的事件监听
      */
      var refresh = debounce(this.$refs.scroll.refresh, 500)
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })

      /*
      2.获取当前tabControl的offsetTop
      直接获取组件的offsetTop,无法拿到得到
      所有组件都有一个属性$el:用于获取组件中的元素
      */


    },
    methods: {
      /*
      轮播图加载完成，计算tab的高度
      */
      swiperImgLoad() {
        // 1..
        this.tapOffofsetTop = this.$refs.tabControl1.$el.offsetTop;

      },
      /*
      **防抖
      */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;

        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods({ type, page }).then(res => {
          // this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          // 关闭上拉加载
          this.$refs.scroll.finishPullUp()
        })
      },
      /**
      * 事件监听相关的方法(字传父)
      */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl2.currentIndex=index
      },
      /**
       * 返回顶部
       */
      backClick() {
        // this.$ref.scroll.scroll拿到Scroll.vue组件的data的scroll属性，调用better-scroll插件的scrollTo方法
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      /**
       *监听月面滚动 
       */
      contentScroll(position) {
        // 1.判断backTop是否显示
        this.isShowBackTop = (-position.y) > 800
        // 2.决定tabcontrol是否吸顶（position:fixed）,44为nvabar高度
        this.isTabFixed = (-position.y) > this.tapOffofsetTop - 44

      },
      /**
       * 上拉加载更多
       */
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      /*
      
      */ 
    },
    activated(){
        if(this.saveY>0){
          this.$refs.scroll.scrollTo(0,this.saveY,0)        
          this.$refs.scroll.refresh()
        }
       
    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY()
    }
  }
</script>
<style scoped>
  #home {
    height: auto;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  /* .tab-control {
    position: sticky;
    top: 88px;
    z-index: 9;
  } */
  .content {
    height: calc(100vh - 196px);
    margin-top: 88rpx;
    overflow: hidden;
    /* overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */
  }
</style>