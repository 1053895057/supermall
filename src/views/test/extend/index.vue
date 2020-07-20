<template>
    <div class="show-wrap">
        <div class="btn-box">
            <button class="btn btn-green" @click="dialog2">弹窗</button>
        </div>
    </div>
</template>

<script>
import Content from './extend3/content'
export default {
    data() {
        return {}
    },
    methods: {
        dialog2() {
            this.$asynDialog({
                component: Content,
                data: {
                    name: 'rose'
                },
                config: {
                    closeCallback: () => {
                        this.state = '弹框已关闭'
                    },
                    maskCloseDialog:true
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.show-wrap {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn-box {
        width: 100%;
        .btn {
            width: 150px;
            height:30px;
            margin: 30px auto 0;
            border-radius: 6px;
            color:#fff;
            border:none;
            outline: none;
            display: block;
        }
        .btn-green {
            background: #ff6e50;
        }
    }
}
</style>