(function() {
    var Acensus = this.Acensus = {};
    Acensus.userdata = null;
    Acensus.basepath = 'http://dario.gnun.net:4701/';

    Acensus.api = function(path, method, data, onsuccess, onerror) {
        var fullpath = Acensus.basepath + path;
        var req = $.ajax({url:fullpath,
                          data: data,
                          cache: false,
                          timeout: 10000,
                          type:method,
//                           headers: {Auth: Acensus.apikey},
                          crossDomain: true});

        // DONE
        req.done(function(data) {
            onsuccess(data);
        });

        // ERROR
        req.fail(function(data, textStatus, error) {
            // no connection
            if (data.status == 0 || textStatus == "timeout") {
                Acensus.error("Conectivity problem...");
                return;
            }

            onerror(data);
        });
    };


    // generic view
    Acensus.View = Backbone.View.extend({
        initialize: function() {
            this.init();
        },

        init: function() {
            this.render();
            this.listenTo(Acensus.router, "route", this.close);
        },

        close: function(router, route) {
            if (router != this.route) {
                //COMPLETELY UNBIND THE VIEW
                this.undelegateEvents();
                this.$el.removeData().unbind();

                //Remove view from DOM
                this.remove();
            }
        },

        remove: function() {
            this.$el.empty();
            this.stopListening();
            return this;
        },

        render: function(){
            this.$el.html(this.template({}));
        },
    });

    Acensus.isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (Acensus.isMobile.Android() || Acensus.isMobile.BlackBerry() || Acensus.isMobile.iOS() || Acensus.isMobile.Opera() || Acensus.isMobile.Windows());
        }
    };

    /**
     * returns true if the web browser supports HTML5 WEbStorage standard
     * http://dev.w3.org/html5/webstorage/
     */
    Acensus.supportsLocalStorage = function () {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    };

    Acensus.loadData = function() {
        function isSet(name) {
            var a = window.localStorage.getItem(name);
            return a != null && a.length > 0;
        }

        if (!Acensus.supportsLocalStorage() || !isSet('userdata'))
        {
            Acensus.showLogin();
            return;
        }

        //Acensus.userdata = window.localStorage.getItem("userdata");

        //Acensus.login = new Acensus.LoginView();
        //Acensus.onlogin();
        //User.main();
        Acensus.showLogin();
    };

    // main method
    Acensus.main = function() {
        $(".loading").hide();
        Acensus.loadData();
    }

    Acensus.logout = function() {
        Acensus.userdata = '';
        window.localStorage.setItem("userdata", '');
        window.location = 'index.html';
    }

    Acensus.showLogin = function() {
        Acensus.router = new Acensus.LoginRouter();
        if (Backbone.History.started) {
            Backbone.history.stop();
        }
        Backbone.history.start();
        Acensus.router.navigate("login", {trigger: true});
    }

    Acensus.onlogin = function() {
        Acensus.router = new Acensus.AppRouter();
        if (Backbone.History.started) {
            Backbone.history.stop();
        }
        Backbone.history.start();
        Acensus.login.deltree();
        Acensus.login.remove();

        Acensus.router.navigate("index", {trigger: true});
    }
}).call(this);
