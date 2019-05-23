<template>
  <div id="Index">
    <Carousel></Carousel>
    <Goods></Goods>
    <el-button class="backLogin" @click="back" type="primary">返回登录</el-button>
    <Statement></Statement>
    <!-- <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="showDate">
    </mt-datetime-picker> -->
    <!-- <mt-button type="default" @click="openPicker">default</mt-button> -->
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Goods from '@/components/Goods.vue'
import Statement from '@/components/Statement.vue'

export default {
  name: 'Index',
  components: {
    Carousel,
    Goods,
    Statement
  },
  methods:{
    openPicker() {
        this.$refs.picker.open();
      },
    
    back(){
      this.$router.push({
        path:'/'
      })
    },

    //显示选择的日期
    showDate(res){
      let date = new Date(res);
      let [year,month,day,hours,minute] = [date.getFullYear(),date.getMonth(),date.getDay(),
                                           date.getHours(),date.getMinutes()];
      // let result = year + '-' + month + '-' + day + ' ' + hours + ':' +minute;
      let result = year + '-' + month + '-' + day ;
      
    }
  }
}
</script>

<style lang="less" scoped>
    #Index{
        width: 100%;

        Carousel{
          top: 0;
        }

        .backLogin{
          width: 80%;
        }
    }
</style>

