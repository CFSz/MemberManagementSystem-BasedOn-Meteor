/* 处理页面跳转请求 */

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', {name: 'index'});
Router.route('/list', {name: 'list'});
Router.route('/input', {name: 'input'});

Router.route('/edit/:_id', {
    name: 'edit',
    data: function () {
        return Workmate.findOne(this.params._id);
    }
});
Router.route('/detail/:_id', {
    name: 'detail',
    data: function () {
        return Workmate.findOne(this.params._id);
    }
});
