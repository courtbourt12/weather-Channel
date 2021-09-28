var APIKey = "62af3ed8671f158493e172339537199e";

// Variables for API calls.

var city;
var temperature;
var date;
var state;
var country;
var humidity;
var UV = document.querySelector(".uv");
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
      return (response.json())
    }).then(function(data) {
        console.log(data);
        var latitude = data[0].lat;
        var longitude = data[0].lon;
    
        console.log(latitude);
        console.log(longitude);

        weatherForcast();

        function weatherForcast() {
        
           var weatherInfo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + APIKey;
        
               fetch(weatherInfo)
               .then(function(response) {
                   return (response.json())
               }).then(function(data) {
                   console.log(data);
                
                document.querySelector(".temperature").innerHTML = data.current.temp + "°F";
                document.querySelector(".wind").innerHTML = data.current.wind_speed + "mph";
                document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
                UV.innerHTML = data.current.uvi;
                UVColor = data.current.uvi;
                    if (UVColor<2.01) {
                        UV.style.backgroundColor="green";
                    }else if (UV<5.01) {
                            UV.style.backgroundColor="yellow";
                    }else {
                        UV.style.backgroundColor="red";
                    }
                
                document.querySelector("#temp2").innerHTML = data.daily[0].temp.day + "°F";
                document.querySelector("#wind2").innerHTML = data.daily[0].wind_speed + "mph";
                document.querySelector("#humidity2").innerHTML = data.daily[0].humidity + "%";

                document.querySelector("#temp3").innerHTML = data.daily[1].temp.day + "°F";
                document.querySelector("#wind3").innerHTML = data.daily[1].wind_speed + "mph";
                document.querySelector("#humidity3").innerHTML = data.daily[1].humidity + "%";

                document.querySelector("#temp4").innerHTML = data.daily[2].temp.day + "°F";
                document.querySelector("#wind4").innerHTML = data.daily[2].wind_speed + "mph";
                document.querySelector("#humidity4").innerHTML = data.daily[2].humidity + "%";

                document.querySelector("#temp5").innerHTML = data.daily[3].temp.day + "°F";
                document.querySelector("#wind5").innerHTML = data.daily[3].wind_speed + "mph";
                document.querySelector("#humidity5").innerHTML = data.daily[3].humidity + "%";

                   
               })
        
        }
    })

};

 clickHere.addEventListener("click", cityLookup);

 // 
