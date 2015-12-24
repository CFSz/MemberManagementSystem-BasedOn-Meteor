if (Meteor.isClient) {
    /**
     * 切换导航条状态
     * @param e 传入事件参数
     */
    function toogleActive(e) {
        var $target = $(e.currentTarget);
        $target.data().href && Router.go($target.data().href);
    }

    /*顶部导航条*/
    Template.top_nav.events({
        'click .router-nav>li': function (e) {
            toogleActive(e);
        }
    });
    /*左侧导航条*/
    Template.side_nav.events({
        'click .router-nav>li': function (e) {
            toogleActive(e);
        }
    });

    /*录入页面编辑按钮*/
    Template.input.events({
        'click .add-btn': function (e) {
            Router.go('/setting');
        }
    });
    /*录入页面添加按钮*/
    Template.input.events({
        'click .add-btn': function (e) {
            Router.go('/setting');
        }
    });
}


