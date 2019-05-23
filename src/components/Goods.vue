<template>
    <div id="goods">
        <ul>
            <li class="items" v-for="item in goods">
                <div class="select">
                    <input @click="checkgoods(item)" type="checkbox" :checked='item.isSelect'>
                </div>
                <img :src="item.imgSrc" alt="">
                <div class="information">
                    <p>{{item.name}}</p>
                    <span>￥{{item.price}}</span>
                </div>
                <div class="num">
                    <button @click="decrement(item)" v-show="isShow(item)">-</button>
                    <span class="sum" v-show="isShow(item)">{{item.num}}</span>
                    <button @click="increment(item)">+</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import {mapActions} from 'vuex'
export default {
    name: 'goods',
    data(){
        return{
            goods:this.$store.state.goods,
            cartList: '张三'
        }
    },
    
    mounted(){
        this.publicV.$emit('list', this.cartList)
    },
    computed:{
        
    },
    watch:{
        
    },
    methods:{
        //若商品数量<1不显示减少按钮
        isShow(datas){
            if(datas.num >=1){
                return true;
            }else{
                return false;
            }
        },

        

        //增加商品数量
        increment(datas){
            this.$store.dispatch('increment', datas)
        },

        //减少商品数量
        decrement(datas){
            this.$store.dispatch('decrement', datas)
        },

        //选中商品
        checkgoods(datas){
            this.$store.dispatch('checkgoods',[datas,event.target.checked])
            if(event.target.checked){
                this.publicV.$emit('goodsum', 1);
            }else{
                this.publicV.$emit('goodsum', -1);
            }
            
        }
    },
}
</script>

<style lang="less" scoped>
    li{
        list-style-type: none;
    }

    #goods ul{
        overflow-y: auto;
        height: 50vh;
        padding: 5px;
    }

    .items{
        clear: both;
        overflow: hidden;
        margin: 5px;
        position: relative;
    }

    .items .select{
        float: left;
        height: 100px;
        line-height: 100px;
        margin-right: 10px;
    }

    .items img{
        float: left;
        height: 100px;
        width: 100px;
    }

    .items .information{
        float: left;
        margin-left: 20px;
    }

    .items p{
        text-align: left;
    }

    .num{
        position: absolute;
        right: 20px;
        bottom: 25%;
    }

    .num button{
        border: none;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        outline: none;
    }

    .num button:hover{
        background: #ccc;
    }

    .num span.sum{
        display: inline-block;
        width: 20px;
        margin: 0 5px;
    }



</style>


