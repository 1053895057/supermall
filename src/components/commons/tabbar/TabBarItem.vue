<template>

    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name='item-icon'></slot>
        </div>
        <div v-else>
            <slot name='item-icon-avtive'></slot>
        </div>
        <div :style="activeStyle">
            <slot name='item-text'></slot>
        </div>

    </div>


</template>
<script>
    export default {
        name: 'TabBarItem',
        props: {
            path: String,
            activeColor: {
                default: 'red',
                type: String
            }
        },
        data() {
            return {

            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path)
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) != -1
            },
            activeStyle() {
                return this.isActive ? { color: this.activeColor } : {}
            }
        },
        created() {

        }
    }
</script>
<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 98px;
        font-size: 28px;
    }

    .tab-bar-item img {
        width: 48px;
        height: 48px;
        vertical-align: middle;
        margin-top: 4px;
    }
</style>