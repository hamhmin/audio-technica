$(function(){
    // popup close btn
    $('.close-btn').click(function(){
        $('#popup').fadeOut(200);
    });
    // pop close 이후 view more btn 애니메이션 활성화
    $('.down-btn-box').hide();
    $('.close-btn').click(function(){
        $('.down-btn-box').slideDown(600);
    });

    //toggle gnb animate
    $('.gnb-btn').click(function(){
        $('.gnb').css({'right':'0'});
    });
    $('.btn-close').click(function(){
        $('.gnb').css('right','-265px');
    });

    // 기존에 opacity 0 display flex 상태일때 메뉴바 중앙에 위치한 버튼 클릭 안되는 문제 수정 [.input-box.hide() 추가]
    $('.input-box').hide();
    $('.search .bi-search').click(function(){
        //  search box animate
        $('*').stop();
        $('.input-box').css('display','flex');
        $('.input-box').css({'width':'80vw','opacity':'1'});
        $('.input-box input').css({'display':'flex','width':'80vw'});
        $('.search .bi-search').fadeOut();
        $('.search-x').fadeIn();
    });
    $('.search-x').click(function(){
        $('*').stop();
        $('.input-box').css({'width':'0','opacity':'0'});
        $('.input-box input').css({'width':'0px'});
        $('.search .bi-search').fadeIn();
        $('.search-x').fadeOut();
    });




    $('#snap').scroll(function(){
        var sa1 = $('.sa1').position().top;
        var sa2 = $('.sa2').position().top -200;
        var sa3 = $('.sa3').position().top -200;
        var sa4 = $('.sa4').position().top - 200;
    
        console.log(sa1, sa2, sa3, sa4);
            var scroll = $('#snap').scrollTop();

        
        if(scroll < sa2 )
        {   
            $('.ca1 , .ca3 ,.ca4').removeClass('current-sub-active');
            $('.ca2').addClass('current-sub-active');
            $('.ca1').siblings('.ca').removeClass('current-active');
            $('.ca1').addClass('current-active');
            $('.ca1').siblings('.ca').removeClass('current-active');
        }
        else if ( sa2 <= scroll && scroll < sa3 )
        {   
            $('.ca2 ,.ca4').removeClass('current-sub-active');
            $('.ca1, .ca3').addClass('current-sub-active');
            $('.ca2').siblings('.ca').removeClass('current-active');
            $('.ca2').addClass('current-active');
            $('.ca2').siblings('.ca').removeClass('current-active');
        }
        else if ( sa3 <= scroll && scroll < sa4 )
        {
            $('.ca3 ,.ca1').removeClass('current-sub-active');
            $('.ca2, .ca4').addClass('current-sub-active');
            $('.ca3').siblings('.ca').removeClass('current-active');
            $('.ca3').addClass('current-active');
            $('.ca3').siblings('.ca').removeClass('current-active');
        }
        else if( sa4 < scroll )
        {   
            $('.ca4, .ca2 ,.ca1').removeClass('current-sub-active');
            $('.ca3').addClass('current-sub-active');
            $('.ca4').siblings('.ca').removeClass('current-active');
            $('.ca4').addClass('current-active');
        }
    });

        // shop 메뉴바 on addclass  .on=css-border-bottom
        $('.menu-bar ul li').click(function(){
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
        });

        //분류별 제품보기
        $('.btn-all').click(function(){
            $('.col').show();
        });
        $('.btn-col').click(function(){
            $('.col').not('.Collaboration').hide();
            $('.Collaboration').show();
        });
        $('.btn-new').click(function(){
            $('.col').not('.New-Arrival').hide();
            $('.New-Arrival').show();
        });
        $('.btn-out').click(function(){
            $('.col').not('.Outwear').hide();
            $('.Outwear').show();
        });
        $('.btn-kni').click(function(){
            $('.col').not('.Knitwear').hide();
            $('.Knitwear').show();
        });
        $('.btn-swe').click(function(){
            $('.col').not('.Sweatshirt').hide();
            $('.Sweatshirt').show();
        });
        $('.btn-shi').click(function(){
            $('.col').not('.Shirts').hide();
            $('.Shirts').show();
        });
        $('.btn-inn').click(function(){
            $('.col').not('.Innerwear').hide();
            $('.Innerwear').show();
        });
        $('.btn-bot').click(function(){
            $('.col').not('.Bottom').hide();
            $('.Bottom').show();
        });
        $('.btn-acc').click(function(){
            $('.col').not('.Accessories').hide();
            $('.Accessories').show();
        });

        //detail shop-box slide
        $('.shop-box .shop-down').click(function(){
               $('.shop-box').css('bottom','-50px');
               $('.shop-down').hide();
               $('.shop-up').show();
        });
        $('.shop-box .shop-up').click(function(){
            $('.shop-box').css('bottom','0px');
            $('.shop-down').show();
            $('.shop-up').hide();
     });
        
});