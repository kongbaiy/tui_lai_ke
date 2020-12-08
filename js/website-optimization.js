(function(win, doc) {
    // 营销推广
    $('.marketing-promotion-navItem').on('click', function() {
        var index = $(this).index();

        $('.marketing-promotion-navItem').removeClass('marketing-promotion-navItem_active');
        $(this).addClass('marketing-promotion-navItem_active');

        $('.marketing-promotion-services').hide();
        $('.marketing-promotion-services').eq(index).show();
    });
})(window, document);