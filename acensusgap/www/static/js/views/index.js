(function() {
    Acensus.IndexView = Acensus.View.extend({
        route: 'index',
        el: $('#index-view'),
        template: JST['templates/underscore/index.html'],

        events: {
            'click #search': 'search',
        },

        search: function() {
            var dni = $("#dni").val();
            // TODO do the search in the api and lock this DNI
            //Acensus.router.navigate("voted/" + dni, {trigger: true});
            Acensus.router.navigate("vote/" + dni, {trigger: true});
        },

    });
}).call(this);
