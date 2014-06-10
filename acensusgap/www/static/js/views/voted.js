(function() {
    Acensus.VotedView = Acensus.View.extend({
        route: 'voted',
        el: $('#voted-view'),
        template: JST['templates/underscore/voted.html'],
        idnum: "XXXX",

        initialize: function(options) {
            if (options && options.idnum) {
                this.idnum = options.idnum;
            }
            this.init();
        },

        render: function() {
            this.$el.html(this.template({idnum: this.idnum, values: Acensus.view_data.values}));
        },

        events: {
            'click #vote': 'vote',
        },

        vote: function () {
            $(".loading").show();
            var self = this;
            Acensus.api.vote(this.idnum, $("#extra").val(),
                //success
                function (data) {
                    $(".loading").hide();
                    $(".extra").hide();
                    $("#vote").hide();
                    alert("The ID " + self.idnum + " has been set as VOTED successfully");
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
