Router.configure({
    layoutTemplate: 'main'
    , loadingTemplate: 'loading'
    , notFoundTemplate: 'index'
    //,waitOn: function() {
    //    return [Meteor.subscribe('notifications')]
    //}
});
//Router.route('/', function () {
//    this.render('index');
//});
//Router.route('/:fPath', function () {
//    console.log(this.params.fPath);
//    alert(this.params.fPath);
//    this.render(this.params.fPath);
//});

//Router.route('/detail/:sPath', function () {
//    //console.log(this.params.fPath);
//    console.log(this.params.sPath);
//    //alert(this.params.fPath);
//    this.render('detail');
//});
Router.route('/:fPath/:sPath/:tPath', function () {
    console.log(this.params.fPath);
    console.log(this.params.sPath);
    console.log(this.params.tPath);
    //this.render(this.params.fPath);
    this.render('detail');
});

//Router.route('/:fPath/:sPath', function () {
//    //console.log(this.params.fPath);
//    console.log(this.params.sPath);
//    //alert(this.params.fPath);
//    this.render('input');
//});