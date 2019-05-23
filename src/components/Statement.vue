<template>
    <div id="statement">
        <div class="select">
            <label>
                <input class="selectAll" type="checkbox" @click="selectAll">
                <span>全选</span>
            </label>
            
        </div>
        
        <div class="count">
            合计：$<span>{{money}}</span>
            <button>结算：({{goodsum}})</button>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters ,mapState} from 'vuex'
export default {
    name: 'statement',
    data(){
        return{
            count: 0,       //商品金额
            goodsum: 0,     //选择商品数
        }
    },
    created(){
        //监听被选中商品数量
        for(var i = 0; i < this.$store.state.goods.length; i++){
            if(this.$store.state.goods[i].isSelect){
                this.goodsum++;
            }
        }
    },
    mounted(){
        let selectBtn = document.querySelectorAll('#goods .select input');
        let selectAllBtn = document.querySelector('#statement .select input.selectAll');
        

        this.publicV.$on('goodsum',(datas)=>{
            this.goodsum = this.goodsum + datas;
            if(this.goodsum === selectBtn.length){
                selectAllBtn.checked = true;
            }else{
                selectAllBtn.checked = false;
            }
        })
    },
    computed:{
        money: function(){
            let sum = 0;
            for(var i = 0; i<this.$store.state.goods.length; i++){
                if(this.$store.state.goods[i].isSelect){
                    sum += this.$store.state.goods[i].num * this.$store.state.goods[i].price;
                }
            }
            //实时监听商品数据，计算金额
            return sum.toFixed(2);
        }
    },
    watch:{

    },
    methods:{

        //全选
        selectAll(){
            let selectBtn = document.querySelectorAll('#goods .select input');
            if(event.target.checked == true){
                for(let i = 0; i < selectBtn.length; i++){
                    if(selectBtn[i].checked == false){
                        selectBtn[i].click();
                    }
                    
                }
            }else{
                for(let i = 0; i < selectBtn.length; i++){
                    if(selectBtn[i].checked){
                        selectBtn[i].click();
                    }
                    
                }
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
    #statement{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background: burlywood;
    }

    .select{
        float: left;
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 20px;

        label{
            display: flex;
            color: #7c7676;
        }

        .selectAll{
            width: 15px;
            height: 15px;
            border-radius: 10%;
        }
    }

    .count{
        float: right;
        height: 50px;
        line-height: 50px;
        margin-right: 20px;

        button{
            width: 80px;
            height: 30px;
            border: none;
            border-radius: 10px;
            margin-left: 10px;
            color: rgb(221, 117, 47);
        }
    }
</style>

