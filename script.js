$(function() {
	$('.logo').click(function(){
    swiper1.slideTo( $('.main').index(),1000,false );
	});

	$('.nav-dev').click(function(){
    swiper1.slideTo( $('.dev').index(),1000,false );
	});
	
	$('.nav-design').click(function(){
    swiper1.slideTo( $('.design').index(),1000,false );
	});
	
	$('.nav-about').click(function(){
    swiper1.slideTo( $('.about').index(),1000,false );
	});
	
	$('.nav-contact').click(function(){
    swiper1.slideTo( $('.contact').index(),1000,false );
	});
});