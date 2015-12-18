Template.input.helpers({
    uploadCallback: function () {
        return {
            validate: function (file) {
                console.log(file);
            }
        }
    }
})