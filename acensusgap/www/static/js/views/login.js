(function() {
    Acensus.LoginRouter = Backbone.Router.extend({
        routes: {
            'login' : 'login',
        },

        login: function() {
            if (Acensus.login !== undefined) {
                Acensus.login.deltree();
            }

            Acensus.login = new Acensus.LoginView();
        },
    });

    Acensus.LoginView = Backbone.View.extend({
        el: $('#login-view'),
        template: JST['templates/underscore/login.html'],

        events: {
            'click #login': 'login',
        },

        deltree: function() {
            this.undelegateEvents();
            this.$el.removeData().unbind();
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template({}));
        },

        login: function() {
            var u = $("#username").val();
            var p = $("#password").val();
            $(".loading").show();
            Acensus.api.login(u, p,
                // success
                function() {
                    $(".loading").hide();
                    alert("LOGIN: " + u);
                    Acensus.onlogin();
                },
                // error
                function(data) {
                    $(".loading").hide();
                    Acensus.error(data.message);
                }
            );
        },
    });
}).call(this);
