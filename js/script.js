$(function() {
	$('.logo').click(function(){
    swiper1.slideTo( $('.main').index(),1000,false );
    $('.nav *').css('color', 'white');
    $('.logo').css('background-image', 'url(./img/tri-3d.png)');
	});

	$('.nav-dev').click(function(){
    swiper1.slideTo( $('.dev').index(),1000,false );
    $('.nav *').css('color', 'black');
    $('.logo').css('background-image', 'url(./img/tri-3d-black.png)');
	});
	
	$('.nav-design').click(function(){
    swiper1.slideTo( $('.design').index(),1000,false );
    $('.nav *').css('color', 'black');
    $('.logo').css('background-image', 'url(./img/tri-3d-black.png)');
	});
	
	$('.nav-about').click(function(){
    swiper1.slideTo( $('.about').index(),1000,false );
    $('.nav *').css('color', 'white');
    $('.logo').css('background-image', 'url(./img/tri-3d.png)');
	});
	
	$('.nav-contact').click(function(){
    swiper1.slideTo( $('.contact').index(),1000,false );
    $('.nav *').css('color', 'black');
    $('.logo').css('background-image', 'url(./img/tri-3d-black.png)');
	});
});

$(function(){
  $('.me').hover(function() {
    $('.me').fadeTo("fast",1);
    $('.me2').fadeTo("fast",0);
    $('.nav *').css('color', 'white');
    $('.logo').css('background-image', 'url(./img/tri-3d.png)');
  });

  $('.me2').hover(function() {
    $('.me2').fadeTo("fast",1);
    $('.me').fadeTo("fast", 0);
    $('.nav *').css('color', 'black');
    $('.logo').css('background-image', 'url(./img/tri-3d-black.png)');
  });
}) 


$(function(){
    $(".flip-h").flip({
        trigger: 'hover'
    });
    $(".flip-v").flip({
        trigger: 'hover',
        axis: 'x'
    });
});

$(function() {
     $(".contact-form").submit(function(e) {
      var name = $('.name');
      var email = $('.email');
      var message = $('.message');
      console.log(name.val()+" "+email.val()+" "+message.val());
    
      $.ajax({
          method: 'POST',
          url: '//formspree.io/yujiac8000@gmail.com',
          data: $('.contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.success').fadeToggle(400);
    });
  
  $('.fail, .success').click(function() {
    $(this).hide();
  })
});