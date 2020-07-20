<template>
    <transition name="dialog">
        <div class="container" v-show="visible" @click="maskClose">
            <div class="content-wrap" @click.stop="stopEvent"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'self-container',
    props: {
        maskCloseDialog: {
            // 是否支持遮罩层点击后关闭
            type: Boolean,
            default: true
        },
        closeCallback: {
            // 关闭弹出框后是否有回调，有就要调用
            type: Function,
            default: null
        }
    },
    data() {
        return {
            visible: false
        }
    },
    methods: {
        stopEvent() {

        },
        maskClose() {
            if (this.maskCloseDialog) {
                this.close()
            }
        }
    }
}
</script>
<style>
.container {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99999;
}

.content-wrap {
    width:200px;
    height:180px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.dialog-enter,
.dialog-leave-to {
    opacity: 0;
}
.dialog-enter-active,
.dialog-leave-active {
    transition: opacity 0.5s;
}
</style>