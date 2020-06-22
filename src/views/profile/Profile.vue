<template>
    <div id="profile">
        <test v-model="number" componentMsg="我是测试">
            <div slot="a">1111111111111</div>
            <div slot="b">2222222222222222</div>
        </test>
        <nav-bar class="nav-bar">
            <div slot="center">小码哥商城</div>
        </nav-bar>
        <!--1.单独封装一个组件: 利用slot知识点-->
        <UserInfo></UserInfo>

        <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
        <section class="account">
            <div class="account-item">
                <div class="number">
                    <span class="balance">0.00</span>元
                </div>
                <div class="account-info">我的余额</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>个
                </div>
                <div class="account-info">我的优惠</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>分
                </div>
                <div @click="handleTest" class="account-info">我的积分</div>
            </div>
        </section>

        <!--3.封装成一个整体-->
        <list-view :list-data="orderList" class="order-list"></list-view>
        <list-view :list-data="serviceList" class="service-list"></list-view>
        <div @click="showToast">点击</div>
    </div>
</template>

<script>
import Test from '@/components/test'
import UserInfo from './childComps/UserInfo'
import ListView from './childComps/ListView'
import NavBar from 'common/navbar/NavBar'
import Vue from 'vue'
export default {
    name: 'Profile',
    components: {
        UserInfo,
        ListView,
        NavBar,
        Test
    },
    data: function() {
        return {
            orderList: [
                { icon: '#order', iconColor: '#ff8198', info: '我的消息' },
                { icon: '#point', iconColor: '#fc7b53', info: '积分商城' },
                { icon: '#vip', iconColor: '#ffc636', info: '会员卡' }
            ],
            serviceList: [
                { icon: '#service', iconColor: '#ff8198', info: '我的购物车' },
                { icon: '#download', iconColor: '#ff8198', info: '下载购物APP' }
            ],
            number:55
        }
    },
    mounted: function() {
        var result = this.testFn(this.add, 1, 2)
    },
    methods: {
        testFn(fn) {
            // arguments是一个类数组对象，没有slice方法
            // const arg=arguments.slice(1)
            // 相当于将arguments转换为数组对象
            var args = Array.prototype.slice.call(arguments, 1)
            console.log(arguments)
            return function() {
                console.log(arguments)
                var innerArgs = Array.prototype.slice.call(arguments)
                var finalArgs = args.concat(innerArgs)
                return fn.apply(null, finalArgs)
            }
        },
        add(num1, num2) {
            return num1 + num2
        },
        handleTest() {
            this.$router.push({
                path: '/test'
            })
        },
        showToast(){
            this.$toast('测试extend',100)
    

        }
    }
}
</script>

<style lang="less" scoped >
#profile {
    background-color: #f2f2f2;
}

.nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
}

.account {
    display: flex;
    .test{
        color:#ff0;
    }
}

.account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
}

.account-item:last-of-type {
    margin-right: 0;
}

.account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
}

.account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
}

.account-info {
    margin-top: 6px;
}

.order-list,
.service-list {
    margin-top: 12px;
}
</style>
