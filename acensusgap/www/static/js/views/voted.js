(function() {
    Acensus.VotedView = Acensus.View.extend({
        route: 'voted',
        el: $('#voted-view'),
        template: JST['templates/underscore/voted.html'],
        dni: "XXXX",

        initialize: function(options) {
            if (options && options.dni) {
                this.dni = options.dni;
            }
            this.init();
        },

        render: function() {
            this.$el.html(this.template({dni: this.dni}));
        },
    });
}).call(this);

