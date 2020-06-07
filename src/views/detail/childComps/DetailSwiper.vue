<template>

    <swiper class="detail-swiper">
        <swiper-item v-for="item in topImages" slot="swiper" class="detail-swiper">
            <img :src="item.image" alt="">
        </swiper-item>
    </swiper>

   
</template>

<script>
    import { Swiper, SwiperItem } from 'components/commons/swiper'

    export default {
        name: "DetailSwiper",
        components: {
            Swiper,
            SwiperItem
        },
        props: {
            topImages: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .detail-swiper {
        height: 400px;
        overflow: hidden;
    }
    .detail-swiper img{
        height: 100%;
    }
</style>