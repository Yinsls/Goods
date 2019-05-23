<template>
	<div class="sign_up">
		<div id="nav">
			<router-link to="/">登录</router-link> |
			<router-link to="/sign_in">注册</router-link> |
			<router-link to="/Index">购物车</router-link>
		</div>
		
		<el-input size="medium" type="text" placeholder="请输入账户" required="required" v-model="input_username">
			<i slot="prefix" class="iconfont icon-geren"></i>
		</el-input>
		<el-input size="medium" type="password" placeholder="请输入密码" required="required" v-model="input_pwd">
			<i slot="prefix" class="iconfont icon-icon-mima"></i>
		</el-input>
		
		<el-row>
			<el-button type="primary" @click="changeLoadStatus">登录</el-button>
			<el-button type="warning">取消</el-button>
		</el-row>
		
	</div>
</template>


<script>
import test from './SignIn.vue'
	export default {
		name: 'SignUp',
		props: {
			msg: String
		},
		data(){
			return {
				input_username: "",
				input_pwd: "",
				goods: this.$store.state.goods,
			}

		},
		mounted(){
			// console.log(this.select({name:'aaa',age: 123}, 123));
		},
		methods:{
			changeLoadStatus(){
				var _this = this;
				//获取密码 username:123 password:123
				this.axiosData('/data.json','get').then(res =>{
					console.log(res.UserInfo)
					var datas = this.select(res.UserInfo, this.input_username);
					
					if(datas.length == 0){
					this.$layer.open({
                style: 'border:none; background-color:#78BA32; color:#fff;',
                content:'您还未注册，请...'
            })
				}else if(this.input_username == ""){
					this.$layer.open({
						style: 'border:none; background-color:#78BA32; color:#fff;',
						content:'输入正确昵称'
					})
				}else if(datas[0].password != this.input_pwd){
					var _this = this;
					this.$layer.loading('再想想...');
					setTimeout(function(){
						_this.$layer.close();
					},3000);
				}else{
					var _this = this;
					this.$layer.loading('恭喜'+ this.input_username+'，登录成功，请稍后');
					setTimeout(function(){
						_this.$layer.close();
					},1000);
				}
				});
				
			},

			//只查询简单数组数值： [1,2,{name:'123',age:12}]
			select(array, select){
				let result = [];
				if(array != undefined){
					Object.keys(array).forEach((key, index) =>{
						//是否为对象
						if(Object.prototype.toString.call(array[key]) === '[object Object]'){
							if(Object.values(array[key]).indexOf(select) != -1){
								result.push(array[key]);
							}
						}	//是否为数组
						else if(Object.prototype.toString.call(array[key]) === '[object Array]'){
							//暂不做处理
						}else{
							if(array[key] === select){
								result.push(array[key]);
							}
						}
						
					})
						
				}
				return result;
			},

			axiosData(url,type){
				let _this = this;
				let result = new Promise((resolve,reject)=>{
					_this.$axios({
						url: url,
						methods: type

					}).then(res =>{
						resolve(res.data)

					}).catch(err =>{
						console.log(err)
						reject(err)
					})
				})

				return result;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	
	.el-input {
		width: 65%;
		margin-bottom: 20px;
		
		.iconfont {
			line-height: 36px;
		}
	}
	
	button{
		width: 100px;
	}
	
	#nav {
	  padding: 30px;
	  a {
	    font-weight: bold;
	    color: #3e5a63;
			text-decoration: none;
			
	    &.router-link-exact-active {
	      color: #42b983;
	    }
	  }
	}
	
</style>
