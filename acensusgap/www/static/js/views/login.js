(function() {
    Acensus.LoginRouter = Backbone.Router.extend({
        routes: {
            'login' : 'login',
            'signup' : 'signup',
        },

        login: function() {
            if (Acensus.login !== undefined) {
                Acensus.login.deltree();
            }

            Acensus.login = new Acensus.LoginView();
            Acensus.login.template = Acensus.login.templateLogin;
            Acensus.login.render();
        },

        signup: function() {
            if (Acensus.login !== undefined) {
                Acensus.login.deltree();
            }

            Acensus.login = new Acensus.LoginView();
            Acensus.login.signup();
            Acensus.login.render();
            Acensus.login.prepareform();
        },
    });


    Acensus.LoginView = Backbone.View.extend({
        el: $('#login-view'),
        templateLogin: JST['templates/underscore/login.html'],
        templateSignup: JST['templates/underscore/signup.html'],
        template: this.templateLogin,

        events: {
            'click #login': 'login',
            'click #sendsignup': 'sendsignup',
        },

        deltree: function() {
            this.undelegateEvents();
            this.$el.removeData().unbind();
        },

        initialize: function() {
            this.template = this.templateLogin;
            this.render();
        },

        render: function() {
            this.$el.html(this.template({}));
        },

        login: function() {
        },

        signup: function() {
            this.template = this.templateSignup;
            this.render();
        },

        prepareform: function() {
        },

        sendsignup: function() {
        },
    });
}).call(this);
