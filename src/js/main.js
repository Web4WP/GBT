'use strict'

$(document).ready(function() {

  /*document.querySelectorAll('.map__fluid-tab-btn').forEach(function (el) {
    el.addEventListener('click', function (e) {
      const path = e.currentTarget;
      document.querySelector('.map__fluid-tab-btn_map').classList.remove('active');
      path.classList.toggle('active');
      document.querySelectorAll('.step__content').forEach(function (stepContent) {
        stepContent.classList.remove('active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('active');
    })
  })*/

  document.querySelector('.map__fluid-tab-btn_map_decr').addEventListener('click', function (el) {
    el.currentTarget.classList.add('active');
    document.querySelector('.map__fluid-tab-btn_map').classList.remove('active');
    document.querySelector('.map__fluid-content_clinics').classList.remove('active');
    document.querySelector('.map__fluid-content_map').classList.add('active');
  })

  document.querySelector('.map__fluid-tab-btn_map').addEventListener('click', function (el) {
    el.currentTarget.classList.add('active');
    document.querySelector('.map__fluid-tab-btn_map_decr').classList.remove('active');
    document.querySelector('.map__fluid-content_map').classList.remove('active');
    document.querySelector('.map__fluid-content_clinics').classList.add('active');
  })

  $(".header__burger").click(function() {
    $(this).toggleClass('open');
    $("main").toggleClass("open");
    $('.menu').toggleClass('open');
  });

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
    });

    $('.bio__carousel').owlCarousel({
      nav: false,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 450,
      autoHeight: true,
      responsive: {
        0: {
          items: 1
        }
      }
    });

    $('.faq__btn-link.nav-link.active').click(function (e) {
      $('.faq__btn-link.nav-link.active ~ .faq__btn-link.nav-link').addClass('open');
    })

  }
  else {
    $('.post__carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    $('.bio__carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
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

  if ($(window).width() < 1023) {
    $('.mission__left + img').insertAfter('.mission__left-text');
  }

  if ($(window).width() < 1279) {
    $('.go__link').insertAfter('.go__carousel');
  }

  $('.go__carousel-wrap').owlCarousel({
    nav: true,
    loop: true,
    dots: false,
    margin: 0,
    autoplay: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 3000,
    smartSpeed: 450,
    items: 1,
    onInitialized: counterGo,
    onTranslated: counterGo,
    navText: [
      '<img src="../img/svg/carousel-prev.svg" alt="">',
      '<img src="../img/svg/carousel-next.svg" alt="">'
    ]
  });

  function counterGo(event) {
    let element   = event.target;
    let items     = event.item.count;
    let item      = event.item.index + 1;

    if(item > items) {
      item = item - items
    }

    $('.go__carousel-count').html("<span> 0"+item+"</span> / "+"0 "+items)
  }

  $('.map__fluid-right select').select2();

  let clickCount = 0;
  let rules = [
    function() {
      if( $('.biofilm__item_1').hasClass('active') ) {
      $('.biofilm__item_1').removeClass('active'); $('.biofilm__item_2').addClass('active');
      $('.biofilm__right-item_1').removeClass('active'); $('.biofilm__right-item_2').addClass('active');
      $('.biofilm__right-number.active').text(2);
      $('.biofilm__right-number_2').text(3);
      $('.biofilm__right-span').text('Мотивация');
    }},
    function() {
      if( $('.biofilm__item_2').hasClass('active') ) {
        $('.biofilm__item_2').removeClass('active'); $('.biofilm__item_3').addClass('active');
        $('.biofilm__right-item_2').removeClass('active'); $('.biofilm__right-item_3').addClass('active');
        $('.biofilm__right-number.active').text(3);
        $('.biofilm__right-number_2').text(4);
        $('.biofilm__right-span').text('AIRFLOW');
      }},
    function() {
      if( $('.biofilm__item_3').hasClass('active') ) {
        $('.biofilm__item_3').removeClass('active'); $('.biofilm__item_4').addClass('active');
        $('.biofilm__right-item_3').removeClass('active'); $('.biofilm__right-item_4').addClass('active');
        $('.biofilm__right-number.active').text(4);
        $('.biofilm__right-number_2').text(5);
        $('.biofilm__right-span').text('PERIOFLOW');
      }},
    function() {
      if( $('.biofilm__item_4').hasClass('active') ) {
        $('.biofilm__item_4').removeClass('active'); $('.biofilm__item_5').addClass('active');
        $('.biofilm__right-item_4').removeClass('active'); $('.biofilm__right-item_5').addClass('active');
        $('.biofilm__right-number.active').text(5);
        $('.biofilm__right-number_2').text(6);
        $('.biofilm__right-span').text('PEIZON PS');
      }},
    function() {
      if( $('.biofilm__item_5').hasClass('active') ) {
        $('.biofilm__item_5').removeClass('active'); $('.biofilm__item_6').addClass('active');
        $('.biofilm__right-item_5').removeClass('active'); $('.biofilm__right-item_6').addClass('active');
        $('.biofilm__right-number.active').text(6);
        $('.biofilm__right-number_2').text(7);
        $('.biofilm__right-span').text('Контроль');
      }},
    function() {
      if( $('.biofilm__item_6').hasClass('active') ) {
        $('.biofilm__item_6').removeClass('active'); $('.biofilm__item_7').addClass('active');
        $('.biofilm__right-item_6').removeClass('active'); $('.biofilm__right-item_7').addClass('active');
        $('.biofilm__right-number.active').text(7);
        $('.biofilm__right-number_2').text(8);
        $('.biofilm__right-span').text('Повторный визит');
      }},
    function() {
      if( $('.biofilm__item_7').hasClass('active') ) {
        $('.biofilm__item_7').removeClass('active'); $('.biofilm__item_8').addClass('active');
        $('.biofilm__right-item_7').removeClass('active'); $('.biofilm__right-item_8').addClass('active');
        $('.biofilm__right-number.active').text(8);
        $('.biofilm__right-number_2').text(1);
        $('.biofilm__right-span').text('Оценка и контроль инфекции');
      }},
    function() {
      if( $('.biofilm__item_8').hasClass('active') ) {
        $('.biofilm__item_8').removeClass('active'); $('.biofilm__item_1').addClass('active');
        $('.biofilm__right-item_8').removeClass('active'); $('.biofilm__right-item_1').addClass('active');
        $('.biofilm__right-number.active').text(1);
        $('.biofilm__right-number_2').text(2);

      }},
  ];
  $('.biofilm__right-nav-btn_prev').on('click', function() {
    rules[clickCount++ % rules.length]();
  });

  $('.biofilm__item_1').click(function (e) {
    $(this).addClass('active');
    $('.biofilm__item_2').removeClass('active');
    $('.biofilm__item_3').removeClass('active');
    $('.biofilm__item_4').removeClass('active');
    $('.biofilm__item_5').removeClass('active');
    $('.biofilm__item_6').removeClass('active');
    $('.biofilm__item_7').removeClass('active');
    $('.biofilm__item_8').removeClass('active');
    $('.biofilm__right-item_2').removeClass('active'); $('.biofilm__right-item_1').addClass('active');
    $('.biofilm__right-item_3').removeClass('active');
    $('.biofilm__right-item_4').removeClass('active');
    $('.biofilm__right-item_5').removeClass('active');
    $('.biofilm__right-item_6').removeClass('active');
    $('.biofilm__right-item_7').removeClass('active');
    $('.biofilm__right-item_8').removeClass('active');
    $('.biofilm__right-number.active').text(1);
    $('.biofilm__right-number_2').text(2);
    $('.biofilm__right-span').text('Индикация налета');
  });

  $('.biofilm__item_2').click(function (e) {
    $(this).addClass('active');
    $('.biofilm__item_1').removeClass('active');
    $('.biofilm__item_3').removeClass('active');
    $('.biofilm__item_4').removeClass('active');
    $('.biofilm__item_5').removeClass('active');
    $('.biofilm__item_6').removeClass('active');
    $('.biofilm__item_7').removeClass('active');
    $('.biofilm__item_8').removeClass('active');
    $('.biofilm__right-item_1').removeClass('active'); $('.biofilm__right-item_2').addClass('active');
    $('.biofilm__right-item_3').removeClass('active');
    $('.biofilm__right-item_4').removeClass('active');
    $('.biofilm__right-item_5').removeClass('active');
    $('.biofilm__right-item_6').removeClass('active');
    $('.biofilm__right-item_7').removeClass('active');
    $('.biofilm__right-item_8').removeClass('active');
    $('.biofilm__right-number.active').text(2);
    $('.biofilm__right-number_2').text(3);
    $('.biofilm__right-span').text('Мотивация');
  });

  $('.biofilm__item_3').click(function (e) {
    $(this).addClass('active');
    $('.biofilm__item_1').removeClass('active');
    $('.biofilm__item_2').removeClass('active');
    $('.biofilm__item_4').removeClass('active');
    $('.biofilm__item_5').removeClass('active');
    $('.biofilm__item_6').removeClass('active');
    $('.biofilm__item_7').removeClass('active');
    $('.biofilm__item_8').removeClass('active');
    $('.biofilm__right-item_2').removeClass('active'); $('.biofilm__right-item_3').addClass('active');
    $('.biofilm__right-item_1').removeClass('active');
    $('.biofilm__right-item_4').removeClass('active');
    $('.biofilm__right-item_5').removeClass('active');
    $('.biofilm__right-item_6').removeClass('active');
    $('.biofilm__right-item_7').removeClass('active');
    $('.biofilm__right-item_8').removeClass('active');
    $('.biofilm__right-number.active').text(3);
    $('.biofilm__right-number_2').text(4);
    $('.biofilm__right-span').text('AIRFLOW');
  });

  $('.biofilm__item_4').click(function (e) {
    $(this).addClass('active');
    $('.biofilm__item_1').removeClass('active');
    $('.biofilm__item_2').removeClass('active');
    $('.biofilm__item_3').removeClass('active');
    $('.biofilm__item_5').removeClass('active');
    $('.biofilm__item_6').removeClass('active');
    $('.biofilm__item_7').removeClass('active');
    $('.biofilm__item_8').removeClass('active');
    $('.biofilm__right-item_3').removeClass('active'); $('.biofilm__right-item_4').addClass('active');
    $('.biofilm__right-item_1').removeClass('active');
    $('.biofilm__right-item_2').removeClass('active');
    $('.biofilm__right-item_5').removeClass('active');
    $('.biofilm__right-item_6').removeClass('active');
    $('.biofilm__right-item_7').removeClass('active');
    $('.biofilm__right-item_8').removeClass('active');
    $('.biofilm__right-number.active').text(4);
    $('.biofilm__right-number_2').text(5);
    $('.biofilm__right-span').text('PERIOFLOW');
  });

  $('.biofilm__item_5').click(function (e) {
    $(this).addClass('active');
    $('.biofilm__item_1').removeClass('active');
    $('.biofilm__item_2').removeClass('active');
    $('.biofilm__item_3').removeClass('active');
    $('.biofilm__item_4').removeClass('active');
    $('.biofilm__item_6').removeClass('active');
    $('.biofilm__item_7').removeClass('active');
    $('.biofilm__item_8').removeClass('active');
    $('.biofilm__right-item_3').removeClass('active'); $('.biofilm__right-item_5').addClass('active');
    $('.biofilm__right-item_1').removeClass('active');
    $('.biofilm__right-item_2').removeClass('active');
    $('.biofilm__right-item_4').removeClass('active');
    $('.biofilm__right-item_6').removeClass('active');
    $('.biofilm__right-item_7').removeClass('active');
    $('.biofilm__right-item_8').removeClass('active');
    $('.biofilm__right-number.active').text(5);
    $('.biofilm__right-number_2').text(6);
    $('.biofilm__right-span').text('PEIZON PS');
  });

  $('.biofilm__item_6').click(function (e) {
    $(this).addClass('active');
    $('.biofilm__item_1').removeClass('active');
    $('.biofilm__item_2').removeClass('active');
    $('.biofilm__item_3').removeClass('active');
    $('.biofilm__item_4').removeClass('active');
    $('.biofilm__item_5').removeClass('active');
    $('.biofilm__item_7').removeClass('active');
    $('.biofilm__item_8').removeClass('active');
    $('.biofilm__right-item_3').removeClass('active'); $('.biofilm__right-item_6').addClass('active');
    $('.biofilm__right-item_1').removeClass('active');
    $('.biofilm__right-item_2').removeClass('active');
    $('.biofilm__right-item_4').removeClass('active');
    $('.biofilm__right-item_5').removeClass('active');
    $('.biofilm__right-item_7').removeClass('active');
    $('.biofilm__right-item_8').removeClass('active');
    $('.biofilm__right-number.active').text(6);
    $('.biofilm__right-number_2').text(7);
    $('.biofilm__right-span').text('Контроль');
  });

  $('.biofilm__item_7').click(function (e) {
    $(this).addClass('active');
    $('.biofilm__item_1').removeClass('active');
    $('.biofilm__item_2').removeClass('active');
    $('.biofilm__item_3').removeClass('active');
    $('.biofilm__item_4').removeClass('active');
    $('.biofilm__item_5').removeClass('active');
    $('.biofilm__item_6').removeClass('active');
    $('.biofilm__item_8').removeClass('active');
    $('.biofilm__right-item_3').removeClass('active'); $('.biofilm__right-item_7').addClass('active');
    $('.biofilm__right-item_1').removeClass('active');
    $('.biofilm__right-item_2').removeClass('active');
    $('.biofilm__right-item_4').removeClass('active');
    $('.biofilm__right-item_5').removeClass('active');
    $('.biofilm__right-item_6').removeClass('active');
    $('.biofilm__right-item_8').removeClass('active');
    $('.biofilm__right-number.active').text(7);
    $('.biofilm__right-number_2').text(8);
    $('.biofilm__right-span').text('Повторный визит');
  });

  $('.biofilm__item_8').click(function (e) {
    $(this).addClass('active');
    $('.biofilm__item_1').removeClass('active');
    $('.biofilm__item_2').removeClass('active');
    $('.biofilm__item_3').removeClass('active');
    $('.biofilm__item_4').removeClass('active');
    $('.biofilm__item_5').removeClass('active');
    $('.biofilm__item_6').removeClass('active');
    $('.biofilm__item_7').removeClass('active');
    $('.biofilm__right-item_3').removeClass('active'); $('.biofilm__right-item_8').addClass('active');
    $('.biofilm__right-item_1').removeClass('active');
    $('.biofilm__right-item_2').removeClass('active');
    $('.biofilm__right-item_4').removeClass('active');
    $('.biofilm__right-item_5').removeClass('active');
    $('.biofilm__right-item_6').removeClass('active');
    $('.biofilm__right-item_7').removeClass('active');
    $('.biofilm__right-number.active').text(8);
    $('.biofilm__right-number_2').text(1);
    $('.biofilm__right-span').text('Оценка и контроль инфекции');
  });


  /*let rules2 = [
    function() {
    if( $('.biofilm__item_1').hasClass('active') ) {
      $('.biofilm__item_1').removeClass('active'); $('.biofilm__item_8').addClass('active');
      $('.biofilm__right-item_1').removeClass('active'); $('.biofilm__right-item_8').addClass('active');
      $('.biofilm__right-number.active').text(8);
      $('.biofilm__right-number_2').text(8);
      $('.biofilm__right-span').text('Повторный визит');
    }},
    function() {
      if( $('.biofilm__item_8').hasClass('active') ) {
        $('.biofilm__item_8').removeClass('active'); $('.biofilm__item_7').addClass('active');
        $('.biofilm__right-item_8').removeClass('active'); $('.biofilm__right-item_7').addClass('active');
        $('.biofilm__right-number.active').text(7);
        $('.biofilm__right-number_2').text(7);
        $('.biofilm__right-span').text('Контроль');
      }},
    function() {
      if( $('.biofilm__item_7').hasClass('active') ) {
        $('.biofilm__item_7').removeClass('active'); $('.biofilm__item_6').addClass('active');
        $('.biofilm__right-item_7').removeClass('active'); $('.biofilm__right-item_6').addClass('active');
        $('.biofilm__right-number.active').text(6);
        $('.biofilm__right-number_2').text(6);
        $('.biofilm__right-span').text('PEIZON PS');
      }},
    function() {
      if( $('.biofilm__item_6').hasClass('active') ) {
        $('.biofilm__item_6').removeClass('active'); $('.biofilm__item_5').addClass('active');
        $('.biofilm__right-item_6').removeClass('active'); $('.biofilm__right-item_5').addClass('active');
        $('.biofilm__right-number.active').text(5);
        $('.biofilm__right-number_2').text(5);
        $('.biofilm__right-span').text('PERIOFLOW');
      }},
    function() {
      if( $('.biofilm__item_5').hasClass('active') ) {
        $('.biofilm__item_5').removeClass('active'); $('.biofilm__item_4').addClass('active');
        $('.biofilm__right-item_5').removeClass('active'); $('.biofilm__right-item_4').addClass('active');
        $('.biofilm__right-number.active').text(4);
        $('.biofilm__right-number_2').text(4);
        $('.biofilm__right-span').text('AIRFLOW');
      }},
    function() {
      if( $('.biofilm__item_4').hasClass('active') ) {
        $('.biofilm__item_4').removeClass('active'); $('.biofilm__item_3').addClass('active');
        $('.biofilm__right-item_4').removeClass('active'); $('.biofilm__right-item_3').addClass('active');
        $('.biofilm__right-number.active').text(3);
        $('.biofilm__right-number_2').text(3);
        $('.biofilm__right-span').text('Мотивация');
      }},
    function() {
      if( $('.biofilm__item_3').hasClass('active') ) {
        $('.biofilm__item_3').removeClass('active'); $('.biofilm__item_2').addClass('active');
        $('.biofilm__right-item_3').removeClass('active'); $('.biofilm__right-item_2').addClass('active');
        $('.biofilm__right-number.active').text(2);
        $('.biofilm__right-number_2').text(2);
        $('.biofilm__right-span').text('Индикация налета');

      }},
    function() {
      if( $('.biofilm__item_2').hasClass('active') ) {
        $('.biofilm__item_2').removeClass('active'); $('.biofilm__item_1').addClass('active');
        $('.biofilm__right-item_2').removeClass('active'); $('.biofilm__right-item_1').addClass('active');
        $('.biofilm__right-number.active').text(1);
        $('.biofilm__right-number_2').text(1);
        $('.biofilm__right-span').text('Оценка и контроль инфекции');
      }}
  ];
  $('.biofilm__right-nav-btn_prev').on('click', function() {
    rules2[clickCount++ % rules2.length]();
  });*/


});
