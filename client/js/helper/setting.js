Template.setting.helpers({
    inputGroups: {
        _id: '1',
        list: [
            {
                label: '名称'
                , value: '证件照'
                , required: 'required'
                , _type: 'text'
            }
            , {
                label: 'key'
                , value: 'memberPhoto'
                , required: 'required'
                , _type: 'text'
            }
            , {
                label: '类型'
                , value: 'text'
                , required: 'required'
                , _type: 'select'
                , selectOptions: [
                    {
                        value: 'image'
                        , text: '图片'
                        , selected: ''
                    }
                    , {
                        value: 'text'
                        , text: '文本'
                        , selected: 'selected'
                    }
                ]
            }
            , {
                label: '是否必填'
                , value: 'required'
                //, required: 'required'
                , _type: 'select'
                , selectOptions: [
                    {
                        value: 'required'
                        , text: '必填'
                        , selected: 'selected'
                    }
                    , {
                        value: ''
                        , text: '非必填'
                        , selected: ''
                    }
                ]
            }
        ]
    }
})