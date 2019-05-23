<template>
    <div id="carousel">
        <el-carousel height="150px" indicator-position="outside">
            <el-carousel-item v-for="(item,index) in imgSrc" :key="index">
                <img class="carousel_img" :src="item.imgSrc" alt="item.title" srcset="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data(){
        return{
            imgSrc: this.$store.state.images
        }
    }
}
</script>

<style lang="less" scoped>
    #carousel{
        border: 1px dashed rgb(81, 161, 236);
        padding: 5px 10px;
    }
    .carousel_img{
        height: 100%;
        width: 100%;
    }
</style>