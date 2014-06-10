(function() {
    // mock
    Acensus.base_minshu_url = "https://dario.im/minshu";

    Acensus.api.getHeaders = function () {
        return {'Authorization': "Basic " + btoa(Acensus.userdata.password + ":")};
    };

    Acensus.api.login = function (password, onsuccess, onerror) {
        Acensus.userdata = {password: password};
        window.localStorage.setItem("userdata", Acensus.userdata);
        $.ajax({
            url: Acensus.base_minshu_url + "/api/v1/voter/an_invalid_voter",
            headers: Acensus.api.getHeaders(),
            crossDomain: true,
            timeout: 10000,
            type: 'GET'
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

    Acensus.api.search = function (idnum, onsuccess, onerror) {
        $.ajax({
            url: Acensus.base_minshu_url + "/api/v1/voter/" + CryptoJS.SHA512(idnum).toString(),
            headers: Acensus.api.getHeaders(),
            cache: false,
            crossDomain: true,
            type: 'GET'
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
    Acensus.api.vote = function (idnum, extra, onsuccess, onerror) {
        $.ajax({
            url: Acensus.base_minshu_url + "/api/v1/voter",
            headers: Acensus.api.getHeaders(),
            data: JSON.stringify({value: CryptoJS.SHA512(idnum).toString(), extra: extra}),
            contentType : 'application/json',
            cache: false,
            crossDomain: true,
            type: 'POST'
        }).fail(function(jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 200) {
                onsuccess();
            } else {
                onerror({message: "internal error"});
            }
        }).done(function(data) {
            onsuccess();
        });
    };
}).call(this);

