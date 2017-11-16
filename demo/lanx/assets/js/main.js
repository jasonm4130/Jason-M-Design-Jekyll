$(function() {

    /**
     * Hamburger Menu
     */    
    
    $('.toggler-container').click(function() {
       $('.navbar-toggler').toggleClass('active');
    });

});

$(window).on("load", function() {

        $('.counter').counterUp();
    
        // Initialize Isotope
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
              // use outer width of grid-sizer for columnWidth
              columnWidth: '.grid-sizer'
            }
        });

        $('.portfolio-filter').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });


        $(function() {
            $('.portfolio-grid').find('> .grid-item').each(function () {
                $(this).hoverdir({
                    hoverDelay : 75
                });
            });
        });

    /**
     * Clients Carousel
     */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    
    
});

$(window).on('scroll', function(){

    /**
    * Animations
    */
    if ($('.cta .text-center').is(':visible')){
        $('.cta .text-center').addClass('fadeIn');
    };

    if ($('.services .col:nth-child(1)').is(':visible')){
        $('.services .col:nth-child(1)').addClass('fadeInLeft');
    };

    if ($('.services .col:nth-child(2)').is(':visible')){
        $('.services .col:nth-child(2)').addClass('fadeInUp');
    };

    if ($('.services .col:nth-child(3)').is(':visible')){
        $('.services .col:nth-child(3)').addClass('fadeInRight');
    };


});