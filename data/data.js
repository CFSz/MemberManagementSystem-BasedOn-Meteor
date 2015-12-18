Workmate = new Mongo.Collection("workmate");


if (Meteor.isClient) {
    /**
     * 序列化表单内容,并添加默认值
     * @param $form 表单元素
     * @param defaultData 默认值
     * @returns {{}} 合并后的信息
     */
    function serializeForm($form,defaultData) {
        var resultData = {};
        var formData = $form.serializeArray();
        $(formData).each(function (index, item) {
            resultData[item.name] = item.value;
        });
        $.extend(resultData, defaultData);
        return resultData;
    }
    /**
     * 处理表单提交事件
     * @param e 事件对象
     * @param collection 数据对象
     * @param act 操作
     * @param options 配置
     */
    function submitHandle(e,collection,act,options){
        e.preventDefault();
        var options=options||{};
        var $form=$(e.currentTarget);
        var postData =serializeForm($form,options.defaultData||{});
        switch (act){
            case 'insert':
                collection.insert(postData, function (error,id) {
                    if (error) {
                        options.errorHandle&&options.errorHandle(error);
                    } else {
                        options.successHandle&&options.successHandle(id);
                    }
                });
                break;

            case 'update':
                var curid=options.curid;
                if(!curid){
                    throw '更新数据时id不能为空'
                }
                collection.update(curid, {$set: postData}, function (error) {
                    if (error) {
                        options.errorHandle&&options.errorHandle(error);
                    } else {
                        options.successHandle&&options.successHandle(curid);
                    }
                });

        }
    }

    /* 列表页数据 */
    Template.list.helpers({
        people: function () {
            return Workmate.find().fetch();
        }
    });

    /* 详情页数据数据 */
    Template.detail.helpers({

    });

    /* 录入页面表单提交事件 */
    Template.input.events({
        'submit form': function (e) {
            var template=this;
            var curid=template._id;
            submitHandle(e,Workmate,'insert',{
                curid:curid,
                defaultData:{
                    createdAt:new Date(),
                    createdBy:Meteor.user().emails[0].address
                },
                successHandle:function(){
                    Router.go('detail', {_id: curid});
                },
                errorHandle:function(e){
                    alert(e);
                }
            });
        }
    });

    /* 编辑页面表单提交事件 */
    Template.edit.events({
        'submit form': function (e) {
            this._id
            submitHandle(e,Workmate,'update',{
                defaultData:{
                    createdAt:new Date(),
                    createdBy:Meteor.user().emails[0].address
                },
                successHandle:function(id){
                    Router.go('detail', {_id: id});
                },
                errorHandle:function(e){
                    alert(e);
                }
            });
            Workmate.update(currentPostId, {$set: postData}, function (error) {
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


