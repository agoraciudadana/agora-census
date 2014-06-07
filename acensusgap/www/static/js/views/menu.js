(function() {
    Acensus.MenuView = Backbone.View.extend({
        el: $('#menu-view'),
        template: JST['templates/underscore/menu.html'],
        buttons: [],
        login: false,

        events: {
            'click #logout': 'logout',
            'click #connection': 'connections',
            'click #profile': 'profile',
            'click #unmute': 'unmute'
        },

        unmute: function() {
            Acensus.unmuteAll();
            this.render();
        },

        initialize: function() {
            this.render();

            if (Acensus.apikey) {
                this.listenTo(User.user, 'change:username', this.render);
            }
        },

        logout: function() {
            Acensus.logout();
        },

        render: function() {
            var name = "Foobar";
            if (Acensus.apikey) {
//                 name = User.user.get('username');
            }

            var context = {
                buttons: this.buttons,
                login: this.login,
                name: name,
                balance: "300"
            };
            this.$el.html(this.template(context));
            this.bindButtons();
        },

        clearButtons: function() {
            this.buttons = [];
            this.render();
        },

        addButton: function(text, img, id, route) {
            this.buttons.push({text: text, img:img, id:id, route: route});
            this.render();
        },

        bindButtons: function() {
            this.buttons.forEach(function(b) {
                $("#"+b.id).click(function() {
                    if (typeof(b.route) == "string") {
                        Acensus.router.navigate(b.route, {trigger: true});
                    } else {
                        b.route();
                    }
                    $("#"+b.id).unbind("click");
                    return false;
                });
            });
        },

        connections: function() {
            Acensus.router.navigate("connection", {trigger: true});
            return false;
        },

        profile: function() {
            Acensus.router.navigate("profile", {trigger: true});
            return false;
        },
    });
}).call(this);
