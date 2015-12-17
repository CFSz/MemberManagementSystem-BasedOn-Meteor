if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
        console.log('server is running')
    });
}