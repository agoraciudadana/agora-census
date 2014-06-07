(function() {
    Acensus.AppRouter = Backbone.Router.extend({
        routes: {
            'index' : 'index',
            'voted/:dni' : 'voted',
        },

        index: function() {
            Acensus.index = new Acensus.IndexView();
        },

        voted: function(dni) {
            Acensus.voted = new Acensus.VotedView({dni: dni});
        },
    });
}).call(this);
