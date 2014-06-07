(function() {
    // mock
    Acensus.api.login = function (username, password, onsuccess, onerror) {
        Acensus.userdata = {username: username, password: password};
        window.localStorage.setItem("userdata", Acensus.userdata);
        onsuccess({"status": "OK"});
    };

    Acensus.api.search = function (dni, onsuccess, onerror) {
        if (dni === "XXX") {
            onsuccess({voted: true});
        } else if (dni === "invalid") {
            onerror({message: "Invalid"});
        } else {
            onsuccess({voted: false});
        }
    };

    Acensus.api.vote = function (dni, onsuccess, onerror) {
        if (dni === "YYY") {
            onerror({message: "Invalid"});
        } else {
            onsuccess();
        }
    };
}).call(this);

