// 상세페이지 이미지 슬라이더
$(function(){
    const swiper = new Swiper('.swiper', {
        // 옵션
      
        direction: 'horizontal',
        loop: true, // true: 무한 넘김 false: 끝이 있음
      
        // 하단 pager
        pagination: {
            // class명 지정
        el: '.swiper-pagination',
          type: 'bullets'
        },
      
      });
});

// 수량 버튼
$(function(){
    $('#dec').click(function(e){
    e.preventDefault();
    var stat = $('#num').text();
    var num = parseInt(stat,10);
    num--;
    if(num<=0){

    num =1;
    }
    $('#num').text(num);
    });
    $('#inc').click(function(e){
    e.preventDefault();
    var stat = $('#num').text();
    var num = parseInt(stat,10);
    num++;
    
    if(num>5){

    num=5;
    }
    $('#num').text(num);
    });
    });
    

// 메뉴 토글
$(function(){

  $('header .gnb-btn').click(function(){
    $('#gnb').addClass('on');
  });


  $('#gnb header .gnb-btn-close').click(function(){
    $('#gnb').removeClass('on');
  });
});
// 메뉴 슬라이드 
$(function(){
  $(".main-list").click(function(){
          $(this).find('ul').stop().slideToggle();
      });
});


$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.col.scroll2 a').fadeIn(1000);
	} else{
		$('.col.scroll2 a').fadeOut(1000);
	}
});
$('.col.scroll2 a').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});

$(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200){
      $('.col').eq(0).fadeIn(400);
    } else{
      $('.col').eq(0).fadeOut(100);
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 800){
      $('.col').eq(1).fadeIn(400);
    } else{
      $('.col').eq(1).fadeOut(100);
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1400){
      $('.col').eq(2).fadeIn(400);
    } else{
      $('.col').eq(2).fadeOut(100);
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 2200){
      $('.col').eq(3).fadeIn(400);
    } else{
      $('.col').eq(3).fadeOut(100);
    }
  });
});



