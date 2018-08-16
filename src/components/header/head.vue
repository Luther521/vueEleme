<template>
    <div>
         <header>
        	 <span>{{title}}</span>
        	 <a><i>登录</i>|<i>注册</i></a>
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
	       
	    },
}
</script>

<style lang="scss">
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
	    a{
	    	right: .4rem;
		    font-weight: 400;
		    font-size: 0.9rem;
		    color: #fff;
		    width: 4.3rem;
		    height: .7rem;
		    position: absolute;
		    top: 50%;
		    transform: translateY(-50%);
		    i{
		    	color: white;
		    }
	    }
	}
</style>