Template.input.helpers({
    inputGroups: [
        {
            label: '证件照'
            , isImage: true
            , required: 'required'
            , key: 'memberPhoto'
            , type: 'image'
        }
        , {
            label: '姓名'
            , required: 'required'
            , key: 'memberName'
            , type: 'text'
        }
        , {
            label: '手机号'
            , required: 'required'
            , key: 'memberPhone'
            , type: 'text'
        }
    ]
})