/* slide menu
--------------------------------------- */
$(function () {
	$('.slide-menu__btn').click(function () {
		$(this).toggleClass('active');
		$('.slide-menu__bg').fadeToggle();
		$('nav').toggleClass('open');
	})
	$('.slide-menu__bg').click(function () {
		$(this).fadeOut();
		$('.slide-menu__btn').removeClass('active');
		$('nav').removeClass('open');
	});
})


/* scroll
--------------------------------------- */
$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 1500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


/* swiper
--------------------------------------- */
let mySwiper = new Swiper ('.swiper-container', {

  loop: true,
  speed: 550,
  slidesPerView: 1,
  simulateTouch: true,
  spaceBetween: 10,

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  //ナビゲーションボタン
  navigation: { 
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //スクロールバー
  scrollbar: { 
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    769: {
      slidesPerView: 2
    }
  }
})