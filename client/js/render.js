/*切换导航条*/
(function(){
    function toggleNavActive(target){
        $('.router-nav>li[data-href="'+target+'"]').addClass('active').siblings().removeClass('active');
    }
    Template.list.onRendered(function () {
        toggleNavActive('/list')
    });
    Template.input.onRendered(function () {
        toggleNavActive('/input')
    });
    Template.nav.onRendered(function () {
        console.log('render nav')
    });
})();