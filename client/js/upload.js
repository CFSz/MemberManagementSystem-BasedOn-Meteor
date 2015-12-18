Template.inputGroup.helpers({
    uploadCallback: function () {
        return {
            validate: function (file) {
                console.log(file);
                return true;
            }
            , finished: function (index, fileInfo, context) {
                console.log(arguments);
            }
            , formData: function () {
                return {
                    id: '232323', other: '没啥别的', contentType: 'image'
                }
            }
        }
    }
})