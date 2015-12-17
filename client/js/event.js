if (Meteor.isClient) {
  Template.nav.events({
    /*顶部导航条*/
    'click .router-nav>li': function (e) {
      var $target=$(e.currentTarget);
      $target.addClass('active').siblings().removeClass('active');
      $target.data().href&&Router.go($target.data().href);
    }
  });
  Template.side_nav.events({
    /*左侧导航条*/
    'click .router-nav>li': function (e) {
      var $target=$(e.currentTarget);
      $target.addClass('active').siblings().removeClass('active');
      $target.data().href&&Router.go($target.data().href);
    }
  });
}


