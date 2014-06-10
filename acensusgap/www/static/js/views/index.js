(function() {
    Acensus.IndexView = Acensus.View.extend({
        route: 'index',
        el: $('#index-view'),
        template: JST['templates/underscore/index.html'],

        events: {
            'click #search': 'search',
        },

        search: function() {
            var idnum = $("#idnum").val().toUpperCase();
            idnum = idnum.replace(/-/g, "").replace(/ /g, "");

            $(".loading").show();
            Acensus.api.search(idnum,
                //success
                function (data) {
                    $(".loading").hide();
                    Acensus.view_data = data;
                    if (data.voted) {
                        Acensus.router.navigate("voted/" + idnum, {trigger: true});
                    } else {
                        Acensus.router.navigate("vote/" + idnum, {trigger: true});
                    }
                },
                // error
                function (data) {
                    $(".loading").hide();
                    Acensus.error("Error searching idnum: " + data.message);
                });
        },
    });
}).call(this);
