<template>
    <div>
        <Tabbar>
            <TabbarIndex path="/home" activeColor="blue">
                <img slot='item-icon' src="~assets/img/tabbar/home.svg" alt="">
                <img slot='item-icon-avtive' src="~assets/img/tabbar/home_active.svg" alt="">
                <div slot='item-text'>首页</div>
            </TabbarIndex>
            <TabbarIndex path="/category" activeColor="red">
                <img slot='item-icon' src="~assets/img/tabbar/category.svg" alt="">
                <img slot='item-icon-avtive' src="~assets/img/tabbar/category_active.svg" alt="">
                <div slot='item-text'>分类</div>
            </TabbarIndex>
            <TabbarIndex path="/cart" activeColor="red">
                <img slot='item-icon' src="~assets/img/tabbar/shopcart.svg" alt="">
                <img slot='item-icon-avtive' src="~assets/img/tabbar/shopcart_active.svg" alt="">
                <div slot='item-text'>购物车</div>
            </TabbarIndex>
            <TabbarIndex path="/profile" activeColor="red">
                <img slot='item-icon' src="~assets/img/tabbar/profile.svg" alt="">
                <img slot='item-icon-avtive' src="~assets/img/tabbar/profile_active.svg" alt="">
                <div slot='item-text'>我的</div>
            </TabbarIndex>
        </Tabbar>
    </div>
</template>
<script>
    import Tabbar from 'components/commons/tabbar/Tabbar'
    import TabbarIndex from 'components/commons/tabbar/TabBarItem'
    export default {
        name: 'MainTabbar',
        components: {
            Tabbar,
            TabbarIndex
        }
    }
</script>
<style>

</style>