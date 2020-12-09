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

	var ourServicesIcons = [
		{ path: 'imgs/orl_1.png', activePath: 'imgs/orl_active_1.png', activeStatus: false },
		{ path: 'imgs/orl_2.png', activePath: 'imgs/orl_active_2.png', activeStatus: false },
		{ path: 'imgs/orl_3.png', activePath: 'imgs/orl_active_3.png', activeStatus: false },
		{ path: 'imgs/orl_4.png', activePath: 'imgs/orl_active_4.png', activeStatus: false }
	];
	// 我们的服务
	$('.our-services-listItem').on('click', function() {
		var index = $(this).index(), 
			item_el = $('.our-services-listItem'),
			item_icon_el = $('.our-services-listItemUlIcon'),
			ul_el = $('.our-services-listItemUl'), 
			li_box_el = $('.our-services-listItemLiBox');
		
		if(ourServicesIcons[index].activeStatus) {
			item_el.eq(index).removeClass('our-services-listItem_active');
			item_icon_el.eq(index).attr('src', ourServicesIcons[index].path);
			ul_el.eq(index).removeClass('our-services-listItemUl_active');
			li_box_el.eq(index).hide();
		} else {
			item_el.eq(index).addClass('our-services-listItem_active');
			item_icon_el.eq(index).attr('src', ourServicesIcons[index].activePath);
			ul_el.eq(index).addClass('our-services-listItemUl_active');
			li_box_el.eq(index).show();
		}
		ourServicesIcons[index].activeStatus = !ourServicesIcons[index].activeStatus;
	});
	
	//服务案例 
	$('.services-case-navItem').on('click', function() {
		$('.services-case-navItem').removeClass('services-case-navItem_active');
		$(this).addClass('services-case-navItem_active');
	});

	// 关于我们
	$('.about-us-navItem').on('click', function() {
		var index = $(this).index();

		$('.about-us-navItem').removeClass('about-us-navItem_active');
		$(this).addClass('about-us-navItem_active');
		$('.about-us-articleText').hide();
		$('.about-us-articleText').eq(index).show();
	});
	
	// 新闻中心
	$('.news-center-navItem').on('click', function() {
		$('.news-center-navItem').removeClass('news-center-navItem_active');
		$(this).addClass('news-center-navItem_active');
	});
})(window, document);