<template>
    <div>
        <Swiper>
            <SwiperItem slot='swiper' v-for="item in banners">
                <a :href="item.link">
                    <img :src="item.image" @load="imageLoad"></img>
                </a>
            </SwiperItem>
        </Swiper>
    </div>

</template>
<script>
    import { Swiper, SwiperItem } from 'components/commons/swiper'


    export default {
        name: 'HomeSwiper',
        components: {
            Swiper,
            SwiperItem
        },
        props: {
            banners: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                isLoad: false
            }
        },
        methods: {
            imageLoad() {
                if (!this.isLoad) {
                    this.$emit('swiperImgLoad')
                    this.isLoad = true
                }

            }
        },
        created() {

        }
    }
</script>