(function() {
    var User = this.User = {};
    User.login = null;

    // Routes
    User.Router = Backbone.Router.extend({
        routes: {
            'login' : 'login',
        },

        welcome: function() {
            User.login = new User.LoginView();
        },
    });

    // main method
    User.main = function() {
        Acensus.login.remove();
        User.user = new User.Model();

        Acensus.menu = new Acensus.MenuView();
        Acensus.menu.render();

        Acensus.router = new User.Router();
        if (Backbone.History.started) {
            Backbone.history.stop()
        }
        Backbone.history.start();
//         setInterval("User.user.update(User.user, true)", 2000);
    }
}).call(this);
