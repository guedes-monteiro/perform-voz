(function($) {
    $('.search-form__h .search-trigger').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active icon-remove').addClass('icon-search').next().fadeOut(300);
        } else {
            $(this).removeClass('icon-search').addClass('active icon-remove').next().fadeIn(300);
        }
    })

    var resizeTimer = null;
    var resizeTimer2 = null;
    //var obj = $('.header-info-home .header-info_layer').not('.ie8 .header-info-home .header-info_layer').clone();
    if ($(window).width() > 768) {
        $('.header-info-home .header-info_layer').not('.ie8 .header-info-home .header-info_layer').parallax(
                {
                    mouseport: '.header-info-home',
                    xparallax: 0.2,
                    yparallax: false,
                    decay: 0.7,
                    frameDuration: 20,
                    freezeClass: 'freeze'
                },
        {
            mouseport: '.header-info-home',
            xparallax: 0.2,
            yparallax: false,
            decay: 0.7,
            frameDuration: 20,
            freezeClass: 'freeze'
        },
        {
            mouseport: '.header-info-home',
            xparallax: 0.4,
            yparallax: false,
            decay: 0.7,
            frameDuration: 20,
            freezeClass: 'freeze'
        }
        );
    }

    //mbm resize fix
    //$('.header-info-home .header-info_layer').not('.ie8 .header-info-home .header-info_layer')
    //            .css({top: 0, marginTop: 0, left: 0, marginLeft: 0})
    //            .parallax({mouseport: $('.header-info-home .header-info_layer').not('.ie8 .header-info-home .header-info_layer')});

    $(window).resize(function() {
        //return; //mbm debug
        resizeTimer && clearTimeout(resizeTimer); // Cleraring old timer to avoid unwanted resize calls.
        resizeTimer = setTimeout(function() {
            //console.log('resize parallax');
            
            var $els=$('.header-info-home .header-info_layer').not('.ie8 .header-info-home .header-info_layer');
            //console.log('unparallax');
            $els.unparallax(); //mbm
            
            //$els.closest(".header-info-home .header-info_layer").replaceWith($(obj).clone());
            if ($(window).width() > 768) {
                //console.log('parallax > 768');
                
                
    
                clearTimeout(resizeTimer2);
                resizeTimer2 = setTimeout(function() {
                    //console.log('parallax');
                    //$els.unparallax(); //mbm again
                    //$('.header-info-home .header-info_layer').not('.ie8 .header-info-home .header-info_layer').parallax(
                    $els.parallax(
                            {
                                mouseport: '.header-info-home',
                                xparallax: 0.2,
                                yparallax: false,
                                decay: 0.7,
                                frameDuration: 20,
                                freezeClass: 'freeze'
                            },
                            {
                                mouseport: '.header-info-home',
                                xparallax: 0.2,
                                yparallax: false,
                                decay: 0.7,
                                frameDuration: 20,
                                freezeClass: 'freeze'
                            },
                            {
                                mouseport: '.header-info-home',
                                xparallax: 0.4,
                                yparallax: false,
                                decay: 0.7,
                                frameDuration: 20,
                                freezeClass: 'freeze'
                            }
                    );
                }, 100); //mbm default:200;
            }

        }, 200); //mbm default:200
    });
})(jQuery);