Talk2Watch.addEventListener("ready", function(e) {
    getBtcValue();
});

function getBtcValue() {
    var response;
    var req = new XMLHttpRequest();

    var url = "https://api.bitcoinaverage.com/ticker/USD/";
    
    req.open('GET', url, true);
    req.onload = function(e) {
        response = JSON.parse(req.responseText);
        var btc = response.last;
        
        Talk2Watch.sendSms(String(btc) + " $", "[Bitcoin]");
    };
    req.send(null);
}

