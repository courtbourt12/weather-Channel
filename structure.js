var APIKey = "62af3ed8671f158493e172339537199e";

// Variables for API calls.

var city;
var temperature;
var date;
var state;
var country;
var humidity;
var UVIndex;
var windSpeed;

// Setting up the city search.

var citySearch = document.querySelector("#searchBar");

var clickHere = document.getElementById("searchNow");

function cityLookup() {
  
    var citySelected = document.querySelector("#searchBar").value;
    var geocoding = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySelected + "&appid=" + APIKey;

    console.log(geocoding);

    fetch(geocoding)
    .then(function(response) {
        
    })
};

 clickHere.addEventListener("click", cityLookup);
