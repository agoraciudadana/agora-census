(function() {
    Acensus.VoteView = Acensus.View.extend({
        route: 'vote',
        el: $('#vote-view'),
        template: JST['templates/underscore/vote.html'],
        dni: "XXXX",

        initialize: function(options) {
            if (options && options.dni) {
                this.dni = options.dni;
            }
            this.init();
        },

        events: {
            'click #vote': 'vote',
        },

        render: function() {
            this.$el.html(this.template({dni: this.dni}));
        },

        vote: function () {
            $(".loading").show();
            Acensus.api.vote(this.dni,
                //success
                function (data) {
                    $(".loading").hide();
                    alert("el dni " + this.dni + " se acaba de marcar como votado");
                    $("#vote").hide();
                },
                // error
                function (data) {
                    $(".loading").hide();
                    Acensus.error("Error: " + data.message);
                });
            return false;
        },
    });
}).call(this);


