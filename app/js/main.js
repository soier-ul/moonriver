$(function () {
  //header hide
  let lastScroll = 0;
  const defaultOffset = 800;
  const header = document.querySelector('.header');

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('header--hide');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      header.classList.add('header--hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      header.classList.remove('header--hide');
    }

    lastScroll = scrollPosition();
  });
  //header hide

  const swiper = new Swiper('.swiper', {
    slidesPerView: 5.15,
    loop: true,
    spaceBetween: 25,
    freeMode: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 'auto',
        spaceBetween: 25
      }
    }
  });

  $('.menu__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.menu__tabs-link').removeClass('menu__tabs-link--active');
    $(this).addClass('menu__tabs-link--active');

    $('.menu__items-tab').removeClass('menu__items-tab--active');
    $($(this).attr('href')).addClass('menu__items-tab--active');
  });

  $('.burger').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.header').toggleClass('header--active');
    $('.burger').toggleClass('burger--active');

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.burger, .menu')) {
        $('.menu').removeClass('menu--active');
        $('.header').removeClass('header--active');
        $('.burger').removeClass('burger--active');
      }
    });
  });

  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true
  });
  wow.init();
});