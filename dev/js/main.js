$(document).ready(function() {

    let stage = 0;

    $('.header__switch').click(function(event){
        event.preventDefault();
        $('.header__menu').stop().slideToggle();
    });

    if($('.header--home').length > 0){
        $(window).scroll(function(){
            stage = $('.bgblock--stage').outerHeight();
            if ($(window).scrollTop() >= stage){
                $('.header').removeClass('header--home');
            }else{
                $('.header').addClass('header--home');
            }
        });
    };

    $(window).resize(function() {
      if(window.innerWidth > 991){
        $('.header__menu').css('display', 'table');
        $('.header__menu').css('height', 'auto');
      }else{
        $('.header__menu').css('display', 'block');
        $('.header__menu').hide();
      }
      if($('.header--home').length > 0){
        stage = $('.bgblock--stage').outerHeight();
      }
    });

    $('select').select2();

    $('.sidebar__trigger, .sidebar__layer').click(function(event){
        event.preventDefault();
        $('.sidebar').stop().toggleClass('sidebar--active');
    });

    $('.accordion__trigger').click(function(event){
        var self = $(this);
        event.preventDefault();
        self.next().stop().slideToggle();
    });

    if($('.slider__articles').length > 0){
        $('.slider__articles').slick({
            infinite: false,
            centerPadding: '30px',
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }


}); //end ready