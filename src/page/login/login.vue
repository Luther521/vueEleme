<template>
	<div>
		<div class="login">
			<mt-field label="账号" placeholder="请输入账号"  v-model="username"  :attr="{ maxlength:20 }"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"  :attr="{ maxlength: 10 }"></mt-field>
			<mt-field label="验证码" >
			  <img src="" height="45px" width="100px">
			</mt-field>
		</div>
		<div class="btn">
			<p>温馨提示：未注册过的账号，登录时将自动注册</p>
			<p>注册过的用户可凭账号密码登录</p>
			<mt-button type="primary" size="large" @click.native="login">登录</mt-button>
			<a>重置密码</a>
		</div>
	</div>
</template>

<script>
	  import { Field,Button,Toast } from 'mint-ui';
       export default {
	    data(){
	        return{
	           username:'',
	           password:''
	        }
	    },
		mounted(){
	        
	    },
	    components:{
          Field,
          Button,
          Toast
	    },
	    computed:{
	    	
	        
	    },
	    methods:{
	        login(){
	        	if(!this.username){
	        		Toast({
					  message: '你输入的账号不正确！',
					  position: 'middle',
                      duration: 2000
					});
	        	}else if(!this.password){
	        		Toast({
					  message: '你输入的密码不正确！',
					  position: 'middle',
                      duration: 2000
					});
	        	}else{
	        	     this.toLogin();	
	        	}
	        },
	        toLogin(){
	           this.$router.push('/');
	        }
}
	    }
</script>
<style lang="scss" scoped>
    $cred:red;
  	.login{
  		 margin-top: 0.6rem;
  		a{
  		 margin-bottom: 0.1rem;
  		}
  	}
  .btn{
  	 padding-top:0.6rem;
  	 width: 90%;
  	 margin: auto ;
  	 p{
  	  color:$cred;
  	  font-size: 0.8rem;
  	 }
  	 button{
  	 	margin-top:0.6rem;
  	 	position: relative;
  	 }
  	 a{
  	 	float: right;
	    top: 0.6rem;
	    display: inline-block;
	    padding-right: 0.6rem;
	    color: #4646d6;
	    font-size: 1.0rem;
	    padding-top: 0.2rem;
  	 }
  }
</style>