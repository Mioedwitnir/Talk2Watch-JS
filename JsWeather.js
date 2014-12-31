function locationSuccess(pos) {
  var coordinates = pos.coords;
  fetchWeather(coordinates.latitude, coordinates.longitude);
}

function locationError(err) {

}

function fetchWeather(latitude, longitude) {
    var response;
    var req = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?" + "lat=" + latitude + "&lon=" + longitude + "&cnt=1";

    req.open('GET', url, true);
    req.onload = function(e) {

        if (req.readyState == 4) {
            if (req.status == 200) {
                response = JSON.parse(req.responseText);
                var temperature;
                if (response) {
                    var temp = response.main.temp;
                    var unit = " C";
                    if (response.sys.country === "US") {
                        temperature = Math.round(((temp - 273.15) * 1.8) + 32);
                        unit = " F";
                    }
                    else {
                        temperature = Math.round(temp - 273.15);
                    }

                    Talk2Watch.sendSms(temperature + unit, "Weather in " + response.name);
                }
            }
        }
    };
    req.send(null);
}

window.navigator.geolocation.getCurrentPosition(locationSuccess,locationError);