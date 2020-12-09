(function(win, doc) {
	// 轮播
	var cooperativeClientSwiperIndex = 0;
	var cooperativeClientSwiper = new Swiper(".cooperative-client-swiper",{
		pagination : '.swiper-pagination',
		autoplayDisableOnInteraction : false,
		autoplay : 5000,
		loop: true,
		on: {
			slideChangeTransitionEnd() {
				cooperativeClientSwiperIndex = this.realIndex;
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (cooperativeClientSwiperIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});

	// 关于我们
	$('.nav-item').on('click', function() {
		var index = $(this).index();

		$('.nav-item').removeClass('nav-item_active');
		$(this).addClass('nav-item_active');
		$('.header-content-text').hide();
		$('.header-content-text').eq(index).show();
	});
})(window, document);