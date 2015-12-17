Workmate = new Mongo.Collection("workmate");


if (Meteor.isClient) {
    function serializeForm($form,defaultOption){
        var resultObj={};
        var formData=$form.serializeArray();
        $(formData).each(function(index,item){
            resultObj[item.name]=item.value;
        });
        for(var index in defaultOption) {
            var item = defaultOption[index];
            resultObj[index] = resultObj[index] || item;
        }
        return resultObj;
    }
    Template.list.helpers({
        people: function () {
            return Workmate.find().fetch();
        }
    });

    Template.detail.helpers({
        people: function () {
            return Workmate.find().fetch();
        }
    });

    Template.input.events({
        'submit form': function (e) {
            e.preventDefault();
            var $form=$(e.currentTarget);
            var postProperties = {};
            postProperties=serializeForm($form,{
                createdAt:new Date(),
                createdBy:Meteor.user().emails[0].address
            });
            Workmate.insert(postProperties, function (error,id) {
                if (error) {
                    // 向用户显示错误信息
                    alert(error.reason);
                } else {
                    Router.go('detail', {_id: id});
                }
            });
        }
    });

    Template.edit.events({
        'submit form': function (e) {
            e.preventDefault();
            var currentPostId = this._id;
            var $form=$(e.currentTarget);
            var postProperties = {};
            postProperties=serializeForm($form,{
                createdAt:new Date(),
                createdBy:Meteor.user().emails[0].address
            });

            Workmate.update(currentPostId, {$set: postProperties}, function (error) {
                if (error) {
                    // 向用户显示错误信息
                    alert(error.reason);
                } else {
                    Router.go('detail', {_id: currentPostId});
                }
            });
        }
    });
}


