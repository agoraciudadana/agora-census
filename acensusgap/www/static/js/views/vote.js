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
            //TODO do the real query
            alert("el dni " + this.dni + " se acaba de marcar como votado");
            return false;
        },
    });
}).call(this);


