Template.databaseset.helpers({
    title: '设置数据库',
    inputGroups: {
        list: [
            {
                label: '证件照'
                , required: 'required'
                , key: 'memberPhoto'
                , _type: 'image'
            }
            , {
                label: '姓名'
                , required: 'required'
                , key: 'memberName'
                , _type: 'text'
            }
            , {
                label: '手机号'
                , required: 'required'
                , key: 'memberPhone'
                , _type: 'text'
            }
        ]
    }
})