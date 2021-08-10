'use strict'

$(document).ready(function() {

  $(".header__burger").click(function() {
    $(this).toggleClass('open');
    $("main").toggleClass("open");
    $('.menu').toggleClass('open');
  });

  /* Owl Carousel */
  $('.video__carousel').owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    margin: 20,
    stagePadding: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    onInitialized: counter,
    onTranslated: counter,
    responsive: {
      0: {
        items: 1,
        nav: true,
        stagePadding: 10,
        navText: [
          '<img src="../img/svg/carousel-prev.svg" alt="">',
          '<img src="../img/svg/carousel-next.svg" alt="">'
        ]
      },
      600: {
        items: 2,
        stagePadding: 20,
        nav: false
      },
      1023: {
        items: 2
      },
      1200: {
        items: 3
      },
      1900: {
        stagePadding: 60
      },
      2500: {
        items: 4,
        stagePadding: 75
      }
    }
  });

  function counter(event) {
    let element   = event.target;
    let items     = event.item.count;
    let item      = event.item.index + 1;

    if(item > items) {
      item = item - items
    }

    $('.video__nav-count').html("<span> 0"+item+"</span> / "+"0 "+items)
  }

  if($(window).width() < 1023) {

    $('.post__carousel').owlCarousel({
      nav: true,
      loop: true,
      dots: false,
      margin: 0,
      autoHeight: true,
      items: 1,
      navText: [
        '<img src="../img/svg/carousel-prev.svg" alt="">',
        '<img src="../img/svg/carousel-next.svg" alt="">'
      ],
      onInitialized: counterPost,
      onTranslated: counterPost
      /*responsive : {
        0 : {
          items: 1
        },
        768 : {
          items: 1
        }
      }*/
    });
  }
  else {
    $('.post__carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
  }

  function counterPost(event) {
    let element   = event.target;
    let items     = event.item.count;
    let item      = event.item.index + 1;

    if(item > items) {
      item = item - items
    }

    $('.post__nav-count').html("<span> 0"+item+"</span> / "+"0 "+items)
  }


  /*$(".slider__nav-btn--next").click(function () {
    $(".slider__owl").trigger("next.owl.carousel");
  });
  $(".slider__nav-btn--prev").click(function () {
    $(".slider__owl").trigger("prev.owl.carousel");
  });*/

});
