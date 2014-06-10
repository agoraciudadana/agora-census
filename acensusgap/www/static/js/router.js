(function() {
    Acensus.AppRouter = Backbone.Router.extend({
        routes: {
            'logout' : 'logout',
            'index' : 'index',
            'voted/:idnum' : 'voted',
            'vote/:idnum' : 'vote',
        },

        logout: function() {
            Acensus.logout();
        },

        index: function() {
            Acensus.index = new Acensus.IndexView();
        },

        voted: function(idnum) {
            Acensus.voted = new Acensus.VotedView({idnum: idnum});
        },

        vote: function(idnum) {
            Acensus.vote = new Acensus.VoteView({idnum: idnum});
        },
    });
}).call(this);
