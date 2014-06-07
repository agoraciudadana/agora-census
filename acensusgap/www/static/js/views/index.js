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
            $(".loading").show();
            Acensus.api.search(dni,
                //success
                function (data) {
                    $(".loading").hide();
                    if (data.voted) {
                        Acensus.router.navigate("voted/" + dni, {trigger: true});
                    } else {
                        Acensus.router.navigate("vote/" + dni, {trigger: true});
                    }
                },
                // error
                function (data) {
                    $(".loading").hide();
                    Acensus.error("Error searching dni: " + data.message);
                });
        },

    });
}).call(this);
