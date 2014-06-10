(function() {
    Acensus.VoteView = Acensus.View.extend({
        route: 'vote',
        el: $('#vote-view'),
        template: JST['templates/underscore/vote.html'],
        idnum: "XXXX",

        initialize: function(options) {
            if (options && options.idnum) {
                this.idnum = options.idnum;
            }
            this.init();
        },

        events: {
            'click #vote': 'vote',
        },

        render: function() {
            this.$el.html(this.template({idnum: this.idnum}));
        },

        vote: function () {
            $(".loading").show();
            var self = this;
            Acensus.api.vote(this.idnum, $("#extra").val(),
                //success
                function (data) {
                    $(".loading").hide();
                    $(".extra").hide();
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


