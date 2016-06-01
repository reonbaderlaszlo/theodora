$(function() {
    $.fn.moveIt = function() {
        var $window = $(window);
        var instances = [];

        $(this).each(function() {
            instances.push(new moveItItem($(this)));
        });

        window.onscroll = function() {
            var scrollTop = $window.scrollTop();
            instances.forEach(function(inst) {
                inst.update(scrollTop);
            });
        }
    }

    var moveItItem = function(el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function(scrollTop) {
        var pos = scrollTop / this.speed;
        this.el.css('transform', 'translateY(' + -pos + 'px)');
    };

    $('[data-scroll-speed]').moveIt();

    $('.bxslider').bxSlider({
        mode: 'fade',
        nextText: '<span></span>',
        prevText: '<span></span>',
        controls: true,
        autoStart: true
    });

    $('header .mobile-icon').on('click', function  (e) {

        e.preventDefault();

         $(this).next().slideToggle();

        if($(this).hasClass('active')){

         $(this).removeClass('active');

        }else{

            $(this).addClass('active');

        }
    })

  /*  $('nav li a.hash').click(function(e) {
        if (location.pathname != '/theodora')
            return true;
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('a[name="' + $(this).attr('href').substr(2) + '"]').offset().top
        }, 500);
    });
    if (location.hash && $('a[name="' + location.hash.substr(1) + '"]').length) {
        $('html, body').animate({
            scrollTop: $('a[name="' + location.hash.substr(1) + '"]').offset().top
        }, 500);
    }*/

});