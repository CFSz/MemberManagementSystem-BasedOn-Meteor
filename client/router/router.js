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
        var id = this.params._id;
        var data = conventKeyValueToArray(Workmate.findOne(id));
        console.log(data)
        return {
            _id: id,
            inputGroups: data
        };
    }
});
Router.route('/detail/:_id', {
    name: 'detail',
    data: function () {
        return Workmate.findOne(this.params._id);
    }
});

function conventKeyValueToArray(obj) {
    console.log(obj);
    var resultArray = [
        //{
        //    label: "证件照",
        //    key: "memberPhoto",
        //    value: "http://localhost:3000/upload/image/bg-3-lg.png",
        //    _type: "image",
        //    isImage: true,
        //    required: 'required'
        //}
    ];
    for (var index in obj) {
        if (index === '_id') {
            continue;
        }
        var item = obj[index];
        if (typeof item._type === 'undefined') {
            item = {
                key: index,
                label: index,
                value: item,
                _type: 'text'
            }
        }
        resultArray.push(item);
    }

    return resultArray;
}