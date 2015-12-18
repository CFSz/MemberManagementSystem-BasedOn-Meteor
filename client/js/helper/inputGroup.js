Template.inputGroup.helpers({
    uploadCallback: function () {
        return {
            validate: function (file) {
                console.log(file);
                return true;
            }
            , finished: function (index, fileInfo, context) {
                var $form = $(context.firstNode);
                var $container = $form.parentsUntil('.form-group', '.input-container');
                var $textInput = $container.find('input[type=text]');
                var $imgContainer = $container.find('.img-container');
                var $img = $container.find('.preview-img');
                var url = fileInfo.url;
                $textInput.val(url);
                $img.attr('src', url);
                $imgContainer.removeClass('hide');
            }
            , formData: function () {
                return {
                    id: '232323', other: '没啥别的', contentType: 'image'
                }
            }
        }
    }
})