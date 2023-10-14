(function(window, document, $, undefined) {
    'use strict';

    var megaminiInit = {
        i: function(e) {
            megaminiInit.s();
            megaminiInit.methods();
        },

        s: function(e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },

        methods: function(e) {
            megaminiInit.w();
            megaminiInit.mobileMenuActivation();
            megaminiInit.stickyHeaderMenu();
            megaminiInit.salActivation();
            megaminiInit.watch_video();
            megaminiInit.megaminiBackToTop();
            megaminiInit.themeColorSet();
            megaminiInit.megaMiniSilckslider();
            megaminiInit.initMap();
        },

        w: function(e) {
            this._window.on('load', megaminiInit.l).on('scroll', megaminiInit.res)
        },


        megaMiniSilckslider: function(){
            $('.silck-fade').slick({
                dots: false,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });
        },


     initMap: function(){
        map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        });
    },



        megaminiBackToTop: function() {
            var btn = $('#backto-top');
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 300) {
                    btn.addClass('show');
                } else {
                    btn.removeClass('show');
                }
            });
            btn.on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, '300');
            });
        },

        themeColorSet: function() {
            var defaultColor = 'active-light-mode';
            if ($('body').hasClass('active-dark-mode')) {
                $('body').removeClass('active-light-mode');
            }else if ($('body').hasClass('active-light-mode')) {
                $('body').removeClass('active-dark-mode');
            }else {
                $('body').addClass(defaultColor);
            }
        },

        salActivation: function() {
            sal({
                threshold: 0.1,
                once: true
            });
        },

        watch_video: function() {
            $('.megamini-video').each(function() {
                $(this).magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            });
        },

        mobileMenuActivation: function(e) {
            
            $('.menu-item-has-children > a').on('click', function(e) {
                
                var targetParent = $(this).parents('.mainmenu-nav'),
                    target = $(this).siblings('.megamini-submenu'),
                    targetSiblings = $(this).parent('.menu-item-has-children').siblings().find('.megamini-submenu');
                
                if (targetParent.hasClass('offcanvas')) {
                    $(target).slideToggle(400);
                    $(targetSiblings).slideUp(400);
                    $(this).parent('.menu-item-has-children').toggleClass('open');
                    $(this).parent('.menu-item-has-children').siblings().removeClass('open');
                }

            });
           
            function resizeClassAdd() {
                if (window.matchMedia('(min-width: 992px)').matches) {
                    $('body').removeClass('mobilemenu-active');
                    $('#mobilemenu-popup').removeClass('offcanvas show').removeAttr('style');
                    $('.megamini-mainmenu .offcanvas-backdrop').remove();
                    $('.megamini-submenu').removeAttr('style');
                } else {
                    $('body').addClass('mobilemenu-active');
                    $('#mobilemenu-popup').addClass('offcanvas');
                    $('.menu-item-has-children > a').on('click', function(e) {
                        e.preventDefault();
                    });
                }
            }

            $(window).on('resize', function() {
                resizeClassAdd();
            });
            
            resizeClassAdd();
        },


        stickyHeaderMenu: function() {

            $(window).on('scroll', function() {
                // Sticky Class Add
                if ($('body').hasClass('sticky-header')) {
                    var stickyPlaceHolder = $('#megamini-sticky-placeholder'),
                        menu = $('.megamini-mainmenu'),
                        menuH = menu.outerHeight(),
                        topHeaderH = $('.megamini-header-top').outerHeight() || 0,
                        targrtScroll = topHeaderH + 200;
                    if ($(window).scrollTop() > targrtScroll) {
                        menu.addClass('megamini-sticky');
                        stickyPlaceHolder.height(menuH);
                    } else {
                        menu.removeClass('megamini-sticky');
                        stickyPlaceHolder.height(0);
                    }
                }
            });
        },
    }
    megaminiInit.i();

})(window, document, jQuery);