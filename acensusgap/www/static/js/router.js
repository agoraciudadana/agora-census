(function() {
    Acensus.AppRouter = Backbone.Router.extend({
        routes: {
            'index' : 'index',
            'voted/:dni' : 'voted',
            'vote/:dni' : 'vote',
        },

        index: function() {
            Acensus.index = new Acensus.IndexView();
        },

        voted: function(dni) {
            Acensus.voted = new Acensus.VotedView({dni: dni});
        },

        vote: function(dni) {
            Acensus.vote = new Acensus.VoteView({dni: dni});
        },
    });
}).call(this);
