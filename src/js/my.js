/*        topBanner 轮播图           */
var b_t=0;
var speed3=2000;
var timer3=setInterval(fun3, speed3);
function fun3(){
	$('.topBanner a').eq(b_t).stop().fadeIn('2000').siblings().stop().fadeOut('2000');
	$('#topBannerWrap ol li').eq(b_t).addClass('cur').siblings().removeClass('cur');
	b_t++;
	if(b_t>3){
		b_t=0;
	}
}

  /*小圆点的hover事件*/
$('#topBannerWrap ol li').hover(function(){
	clearInterval(timer3);
	/*$(this).eq($(this).index()).addClass('cur').siblings().removeClass('cur');
	这里不能用this*/
	/*$('#topBannerWrap ol li').eq($(this).index()).addClass('cur').siblings().removeClass('cur');*/
	$(this).addClass('cur').siblings().removeClass('cur');

	$('.topBanner a').eq($(this).index()).stop().fadeIn('2000').siblings().stop().fadeOut('2000');
	
},function(){
	clearInterval(timer3);
	timer3=setInterval(fun3,speed3);
});
/*   closebar 的点击关闭事件*/
$('#topBannerWrap span').click(function(){
	$(this).parent().slideUp();
})



/*中间轮播图*/
var speed=3000; var ani_speed=800;
$('.pic_play_box>li>div').hover(function(){
		$(this).addClass('cur');
},function(){
	$(this).removeClass('cur');
});
$('.pic_play_in').hover(function(){
	$(this).children('a').css({'display':'block'});
},function(){
	$(this).children('a').css({'display':'none'});
});
$('.pic_play_in>a').hover(function(){
	clearInterval(timer1);
	$(this).addClass('cur');
},function(){
	clearInterval(timer1);
	timer1=setInterval(fun1,speed);
	$(this).removeClass('cur');
});

/*              图片轮播的定时器                          */
var $key=0;   var $circle=0; 
var timer1=setInterval(fun1,speed);
function fun1(){
	// 图片的轮播
	$key++;
	if($key>$('.pic_play_box li').length-1){
		$key=1;
		$('.pic_play_box').css('left',0);
	}
	$('.pic_play_box').stop().animate({'left':-$key*$('.pic_play_box li').width()},ani_speed);
	//小圆点的轮播
	$circle++;
	if($circle>$('.xiaoyuandian i').length-1){
		$circle=0;
	}
	$('.xiaoyuandian i').eq($circle).addClass('cur').siblings().removeClass('cur');
};
	
//  hover 停止计时器
$('.pic_play_box').hover(function(){
	clearInterval(timer1);
},function(){
	clearInterval(timer1);
	timer1=setInterval(fun1,speed);
});


// 小圆点的 hover 
$('.xiaoyuandian i').hover(function(){
		clearInterval(timer1);
		$(this).addClass('cur').siblings().removeClass('cur');
		
		$('.pic_play_box').stop().animate({'left':-($(this).index())*$('.pic_play_in').width()},ani_speed);
},function(){
	clearInterval(timer1);
	timer1=setInterval(fun1,speed);
});
	
	
/*                  右边按钮的点击                     */
$('.pic_play_in a:nth-child(2)').click(function(){
	fun1();
});

/*                   左边按钮的点击                                  */
$('.pic_play_in a:nth-child(1)').click(function(){
	$key--;
	if($key<0){
		$key=$('.pic_play_box li').length-2;
		$('.pic_play_box').css('left',-($key+1)*$('.pic_play_in').width());
	}
	$('.pic_play_box').stop().animate({'left':-$key*$('.pic_play_in').width()},ani_speed);
	
	$circle--;
	if($circle<0){
		$circle=$('.xiaoyuandian i').	length-1;
	}
	$('.xiaoyuandian i').eq($circle).addClass('cur').siblings().removeClass('cur');
});

/*                     分类导航的部分                         */
$('.category>ul>li').hover(function(){
		$(this).children('.li_main_outer').addClass('cur');
		$(this).children('.li_container').css({'display':'block'});
		$(this).children('.li_main_outer').children('.li_main').children('span').addClass('cur');
},function(){
		$(this).children('.li_main_outer').removeClass('cur');
		$(this).children('.li_container').css({'display':'none'});
		$(this).children('.li_main_outer').children('.li_main').children('span').removeClass('cur');
})

/*                           side_bar 部分                                          */
var speed2=3000;
var timer2=setInterval(fun2,speed2);
var i=0;
function fun2(){
	if(i>1){
		i=0;	
	}
	$('.sidebar_picplay div a ').eq(i).stop().fadeOut(1000).siblings().fadeIn(1000);	
	$('.sidebar_picplay span i').eq(i).addClass('cur').siblings().removeClass('cur');
	i++;
}

/* sidebar 图片 hover*/
$('.sidebar_picplay').hover(function(){
	clearInterval(timer2);
},function(){
	clearInterval(timer2);	
	timer2=setInterval(fun2,speed2);
});

/* sidebar小圆点的hover*/
$('.sidebar_picplay span i').hover(function(){
	clearInterval(timer2);
	//alert($(this).index());	
	$('.sidebar_picplay div a').eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
	$(this).addClass('cur').siblings().removeClass('cur');
},function(){
	clearInterval(timer2);	
	timer2=setInterval(fun2,speed2);
});
///////////////////////////////////////////////////////
/*			 	 主要内容部分				*/
$('.con_item a').hover(function(){
	$(this).addClass('cur');
	$(this).children('.hide').addClass('cur');
},function(){
	$(this).removeClass('cur');
	$(this).children('.hide').removeClass('cur');
});

/*        content  内容区的up_bar 固定导航栏的scroll事件        */
var upbar_top_height=$('#topBannerWrap').outerHeight(true)+$('#topBarWrap').outerHeight(true)+$('#header').outerHeight(true)+$('#categoryNavWrap').outerHeight(true);
var upbar_top_height2=$('#topBarWrap').outerHeight(true)+$('#header').outerHeight(true)+$('#categoryNavWrap').outerHeight(true);

$(window).scroll(function(event) {
			var $scrollh=$(document).scrollTop(); 
			 /*因为我们每时每刻都需要获取新的值*/
			/*alert($num);*/
			/*$("#main").html($num);*/

			/*当  #topBannerWrap 存在的时候*/
			if($('#topBannerWrap').css('display','block')){
				//alert(1);
				if($scrollh>=upbar_top_height){
					$(".up_bar").css({"position":"fixed","top":0,'z-index':99999999});
				}else{
					$(".up_bar").css({"position":"static"});
				}
			}else{
				/*当  #topBannerWrap display:none的时候*/
				if($scrollh>=upbar_top_height2){
					$(".up_bar").css({"position":"fixed","top":0,'z-index':99999999});
				}else{
					$(".up_bar").css({"position":"static"});
				}
			}

			
		});





