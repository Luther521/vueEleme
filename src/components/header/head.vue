<template>
    <div>
         <header>
        	 <span @click="reonload">{{title}}</span>
        	 <i><router-link to="/login">登录</router-link>|<router-link to="/register">注册</router-link></i>
         </header>
    </div>
</template>
<script>
       export default {
	    data(){
	        return{
	           title:'ele.me'
	        }
	    },
		mounted(){
	        
	    },
	    components:{

	    },
	    computed:{
	        
	    },
	    methods:{
	       reonload(){
	       	//刷新当前页面
	       	 window.location.reload();
	       }
	    },
}
</script>

<style lang="scss">
	div{
		height: 2.8rem;
	}
	header{
		background-color: #3190e8;
	    position: fixed;
	    z-index: 100;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 2.8rem;
	    span{
	    	left: .4rem;
		    font-weight: 400;
		    font-size: 0.9rem;
		    color: #fff;
		    width: 2.3rem;
		    height: .7rem;
		    position: absolute;
		    top: 50%;
		    transform: translateY(-50%);
	    }
	    i{
	    	right: .4rem;
		    font-weight: 400;
		    font-size: 0.9rem;
		    color: #fff;
		    width: 4.3rem;
		    height: .7rem;
		    position: absolute;
		    top: 50%;
		    transform: translateY(-50%);
		    a{
		    	color: white;
		    }
	    }
	}
</style>