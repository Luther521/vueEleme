<template>
   <div>
         <headTop></headTop>
          <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/' + guessCityid" class="guess_city">
                <span>{{guessCity}}</span>
                <svg class="arrow_right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg>
            </router-link>  
        </nav>
         <section>
         	<h4>热门城市</h4>
         	<ul>
         		<li>深圳</li>
         		<li>深圳</li>
         		<li>深圳</li>
         		<li>深圳</li>
         		<li>深圳</li>
         		<li>深圳</li>
         		<li>深圳</li>
         		<li>深圳</li>
         	</ul>
         </section>
   </div>
</template>
<script>
	import headTop from '../../components/header/head'
	export default {
    data(){
        return{
           guessCity:'深圳'
        }
    },
	mounted(){
        
    },
    components:{
      headTop 
    },
    computed:{
        
    },
    methods:{
       
    },
}
</script>
<style lang="scss" scoped type="text/css">
 @import '../../style/mixin';
 nav{
 	 height: 2.8rem;
 	 line-height: 2.8rem;
 	 width: 100%;
 	 font-size: 0.8rem;
 	 color: #666;
 	 border-bottom:1px solid #dcdbdb;
 	 background: white;
 	 span{
 	 	padding-left:0.5rem;
 	 	color: #666;
 	 }
 	 .nowcity{
 	 	 color: #9f9f9f;
 	 }
 	 .guess_city{
 	 	display: inline-block;
	    height: 2rem;
	    line-height: 2rem;
	    width: 100%;
	    border-bottom:1px solid #dcdbdb;
	    background: white;
	    color: blue;
	    font-size: 1rem;
	    margin-bottom: 1rem;
	     .arrow_right{
                @include wh(.6rem, .6rem);
                fill: #999;
            }
 	 }
 }
 section{
 	margin-top: 3rem;
 	background: white;
 }
</style>