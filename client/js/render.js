/* 切换导航条 */
(function () {
    function toggleNavActive(targetArray) {
        $(targetArray).each(function (index, item) {
            Template[item].onRendered(function () {
                $('.router-nav>li[data-href="' + '/' + item + '"]').addClass('active').siblings().removeClass('active');
            });
        })
    }

    toggleNavActive(['list', 'input', 'setting', 'databaseset']);
})();