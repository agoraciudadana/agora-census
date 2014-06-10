(function() {
    // mock
    Acensus.base_minshu_url = "http://dario.gnun.net:4701";
    Acensus.api.login = function (password, onsuccess, onerror) {
        Acensus.userdata = {password: password};
        window.localStorage.setItem("userdata", Acensus.userdata);
        $.ajax({
            url: Acensus.base_minshu_url + "/api/v1/voter/an_invalid_voter",
            headers:{'Authorization': Acensus.userdata.password},
            cache: false,
            timeout: 10000,
            crossDomain: true
        }).fail(function(jqXHR, textStatus, errorThrown) {
            // 404 means the Authorization worked
            if (jqXHR.status == 404) {
                onsuccess({"status": "OK"});
            } else {
                onerror({"message": "invalid password"});
            }
        }).done(function(e) {
            onerror({"message": "strange, 'an_invalid_voter is registered? report this error'"});
        });
    };

    Acensus.api.search = function (id, onsuccess, onerror) {
        $.ajax({
            url: Acensus.base_minshu_url + "/api/v1/voter/" + CryptoJS.SHA512(id),
            headers: {'Authorization': Acensus.userdata.password},
            cache: false,
            timeout: 10000,
            crossDomain: true
        }).fail(function(jqXHR, textStatus, errorThrown) {
            // 404 means the Authorization worked
            if (jqXHR.status == 404) {
                onsuccess({voted: false, values: []});
            } else {
                onerror({message: "internal error"});
            }
        }).done(function(data) {
            onsuccess({voted: true, values: data});
        });
    };

    /**
     * TODO: receive also extra data
     */
    Acensus.api.vote = function (dni, onsuccess, onerror) {
        $.ajax({
            url: Acensus.base_minshu_url + "/api/v1/voter",
            headers: {'Authorization': Acensus.userdata.password},
            data: {value: CryptoJS.SHA512(id), extra: ''},
            contentType : 'application/json',
            cache: false,
            timeout: 10000,
            crossDomain: true,
            type: 'POST'
        }).fail(function(jqXHR, textStatus, errorThrown) {
            onerror({message: "internal error"});
        }).done(function(data) {
            onsuccess();
        });
    };
}).call(this);

