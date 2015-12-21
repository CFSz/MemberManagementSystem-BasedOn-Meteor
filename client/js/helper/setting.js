Template.setting.helpers({
    inputGroups: [
        {
            _id: '1',
            label: {
                label: '名称'
                , value: '证件照'
                , required: 'required'
                , _type: 'text'
            }
            , key: {
            label: 'key'
            , value: 'memberPhoto'
            , required: 'required'
            , _type: 'text'
        }
            , _type: {
            label: '类型'
            , value: 'text'
            , required: 'required'
            , _type: 'select'
            , selectOptions: [
                {
                    value: 'text',
                    text: '文本'
                }, {
                    value: 'image',
                    text: '图片'
                }
            ]
        }
            , required: {
            label: '是否必填'
            , required: 'required'
            , _type: 'select'
            , selectOptions: [
                //{
                //    value:'true',
                //    text:'必填'
                //},{
                //    value:'false',
                //    text:'非必填'
                //}
            ]
        }
        }
    ]
})