<template>
	<div class="sign_in">
		<div id="nav">
			<router-link to="/">登录</router-link> |
			<router-link to="/sign_in">注册</router-link>
		</div>
		
		<el-input size="medium" type="text" placeholder="请输入账户" v-model="input_username">
			<i slot="prefix" class="iconfont icon-geren"></i>
		</el-input>
		<el-input size="medium" type="password" placeholder="请输入密码" v-model="input_pwd1">
			<i slot="prefix" class="iconfont icon-icon-mima"></i>
		</el-input>
		<el-input size="medium" type="password" placeholder="请再次输入密码" v-model="input_pwd2">
			<i slot="prefix" class="iconfont icon-icon-mima"></i>
		</el-input>
		<el-row>
			<el-button type="primary" :loading="isLoad" @click="toSignIn">注册</el-button>
			<el-button type="warning">取消</el-button>
		</el-row>
	</div>
</template>


<script>
	export default {
		name: 'SignUp',
		props: {
			msg: String
		},
		data(){
			return {
				input_username: "",
				input_pwd1: "",
				input_pwd2: "",
				isLoad: false,
			}
		},
		mounted(){
			// this.$layer.open({
			// 	style: 'border:none; background-color:#78BA32; color:#fff;',
			// 	content:'已加载成功！'
			// })
		},
		methods:{
			toSignIn(){
				if(this.input_username == ""){
					this.$layer.open({
						style: 'border:none; background-color:#78BA32; color:#fff;',
						content:'随便来个昵称'
					})
				}
				else if(this.input_pwd1 == "" || this.input_pwd2 == ""){
					var _this = this;
					this.$layer.loading('想好密码了吧...');
					setTimeout(function(){
						_this.$layer.close();
					},3000);
				}
				else if(this.input_pwd1 != this.input_pwd2){
					this.$layer.toast({
					  icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中 
					  content: '有没有发现，它们不一样',
					  time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒 
					})
				}
				else{
					var _this = this;
					this.$layer.loading('恭喜'+ this.input_username+'，用户名：123，密码123');
					setTimeout(function(){
						// _this.$datas.UserInfo[0].username = _this.input_username;
						// _this.$datas.UserInfo[0].password = _this.input_pwd1;
						//添加信息至数据库或其他操作...

						_this.$layer.close();
						_this.$router.push({path:'/'});
					},2000);
				}
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
