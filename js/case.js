(function(win, doc) {
    var navIconPaths = [
        { path: 'imgs/case_nav_icon_1.png', activePath: 'imgs/case_nav_active_icon_1.png' },
        { path: 'imgs/case_nav_icon_2.png', activePath: 'imgs/case_nav_active_icon_2.png' },
        { path: 'imgs/case_nav_icon_3.png', activePath: 'imgs/case_nav_active_icon_3.png' }

    ];
	$('.nav-item').on('click', function() {
        var index = $(this).index();
        
        $('.nav-item').removeClass('nav-item_active');
        $(this).addClass('nav-item_active');
        
        navIconPaths.forEach((item, forIndex) => {
            $('.nav-item-img').eq(forIndex).attr('src', navIconPaths[forIndex].path)
        });
        $('.nav-item-img').eq(index).attr('src', navIconPaths[index].activePath);
        $('.list-box').hide();
        $('.list-box').eq(index).show();
    });

    // 筛选弹窗
    $('.filter-btn').on('click', function() {
        $('.popup-bg').show();
        $('.popup').attr('style', 'right: 0;');
    });
    $('.popup-bg, .popup .confirm-btn, .popup .popup-list-item').on('click', function() {
        $('.popup-bg').hide();
        $('.popup').attr('style', 'right: -2.5rem;');
    });
    $('.popup-list-item').on('click', function() {
        $('.popup-list-item').removeClass('popup-list-item_active');
        $(this).addClass('popup-list-item_active');
    });
})(window, document);