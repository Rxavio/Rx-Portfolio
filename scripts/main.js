$(document).ready(function() {


  let $header = $('header');
  let $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function(){
    let scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

    //SMOOTH SCROLL 
    $('.menu li a[href^="#"]').on('click', function(e){
        e.preventDefault();

        let target = $(this.hash);

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top -60
            }, 1000);
        }

    });

    $(' a[href^="#"]').on('click', function(e){
      e.preventDefault();

      let target = $(this.hash);

      if (target.length) {
          $('html, body').stop().animate({
              scrollTop: target.offset().top -60
          }, 1000);
      }

  });

 




    //RESPONSIVE MENU START

    let body = $('body');
    let menuTrigger = $('.js-menu-trigger');
    let mainOverlay = $('.js-main-overlay');

    menuTrigger.on('click', function(){
      body.addClass('menu-is-active');
    });

    mainOverlay.on('click', function(){
      body.removeClass('menu-is-active');
    });

    $('.menu li a').on('click', function(){
        $('body').removeClass("menu-is-active");
    });


});
