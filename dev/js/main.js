$(document).ready(function() {

    $('select').select2();

    $('.sidebar__trigger, .sidebar__layer').click(function(event){
        event.preventDefault();
        $('.sidebar').stop().toggleClass('sidebar--active');
    });

    $('.header__contrast').click(function(event){
        event.preventDefault();
        $('body').toggleClass('darkmode');
    });

    $('.accordion__trigger').click(function(event){
        var self = $(this);
        event.preventDefault();
        self.toggleClass('accordion__trigger--active');
        self.next().stop().slideToggle();
    });

    if($('.slider__articles').length > 0){
        $('.slider__articles').slick({
            infinite: false
        });
    }

}); //end ready