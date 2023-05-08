$(document).ready(function() {

    $('select').select2();

    $('.sidebar__trigger, .sidebar__layer').click(function(event){
        event.preventDefault();
        $('.sidebar').stop().toggleClass('sidebar--active');
    });

    $('.header__contrast').click(function(event){
        event.preventDefault();
    });

    $('.accordion__trigger').click(function(event){
        var self = $(this);
        event.preventDefault();
        self.next().stop().slideToggle();
    });

    if($('.slider__articles').length > 0){
        $('.slider__articles').slick({
            infinite: false
        });
    }

}); //end ready