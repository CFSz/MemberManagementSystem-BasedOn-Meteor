Template.input.helpers({
    uploadCallback: function () {
        return {
            //validate: function (file) {
            //    console.log(file);
            //    return true;
            //}
            finished: function (index, fileInfo, context) {
                console.log(arguments);
            }
        }
    }
})