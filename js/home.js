(function(win, doc) {
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