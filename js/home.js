(function(win, doc) {
	// 轮播
	var bannerIndex = 0;
	var banner = new Swiper(".banner",{
		pagination : '.swiper-pagination',
		autoplayDisableOnInteraction : false,
		autoplay : 5000,
		loop: true,
		on: {
			slideChangeTransitionEnd() {
				bannerIndex = this.realIndex;
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (bannerIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});
	
	// 方案
	var industrySolutions = new Swiper(".industry-solutions-banner",{
		pagination : '.swiper-pagination',
		autoplayDisableOnInteraction : false,
		autoplay : 5000,
		loop: true
	});
	
	//服务案例 
	$('.services-case-navItem').on('click', function() {
		$('.services-case-navItem').removeClass('services-case-navItem_active');
		$(this).addClass('services-case-navItem_active');
	});

	// 关于我们
	$('.about-us-navItem').on('click', function() {
		$('.about-us-navItem').removeClass('about-us-navItem_active');
		$(this).addClass('about-us-navItem_active');
	});
	
	// 新闻中心
	$('.news-center-navItem').on('click', function() {
		$('.news-center-navItem').removeClass('news-center-navItem_active');
		$(this).addClass('news-center-navItem_active');
	});
})(window, document);