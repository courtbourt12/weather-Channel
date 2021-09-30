var APIKey = "62af3ed8671f158493e172339537199e";
var currentDate = moment();
var today = currentDate.format("M/DD/YYYY");
var day2 = moment().add(1, "days");
var tomorrow = day2.format("M/DD/YYYY");
var day3 = moment().add(2, "days");
var tomorrow2 = day3.format("M/DD/YYYY");
var day4 = moment().add(3, "days");
var tomorrow3 = day4.format("M/DD/YYYY");
var day5 = moment().add(4, "days");
var tomorrow4 = day5.format("M/DD/YYYY");
var day6 = moment().add(5, "days");
var tomorrow5 = day6.format("M/DD/YYYY");



// Variables for API calls.

var city;
var temperature;
var date;
var state;
var country;
var humidity;
var UV = document.querySelector(".uv");
var windSpeed;

document.querySelector("#cityDate").innerHTML = "City - Current Day";
document.querySelector("#day2nd").innerHTML = "Day 2";
document.querySelector("#day3rd").innerHTML = "Day 3";
document.querySelector("#day4th").innerHTML = "Day 4";
document.querySelector("#day5th").innerHTML = "Day 5";
document.querySelector("#day6th").innerHTML = "Day 6";

// var classes = document.querySelector(".readyToGo");
// var lastHistory = localStorage.getItem("search");
// classes.innerHTML(lastHistory);
// document.querySelector("ul").appendChild(history);

// Setting up the city search.

var citySearch = document.querySelector("#searchBar");

var clickHere = document.getElementById("searchNow");

function cityLookup() {
    
    var citySelected = document.querySelector("#searchBar").value;
    var geocoding = "https://api.openweathermap.org/geo/1.0/direct?q=" + citySelected + "&appid=" + APIKey;
    
    var history = document.createElement("ol");
    history.classList.add("readyToGo");
    history.appendChild(document.createTextNode(citySelected));
    document.querySelector("ul").appendChild(history);
    localStorage.setItem("search", citySelected);

    // document.querySelector("#cityDate").innerHTML=citySelected + " - " + "(" +today+ ")";
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
            }).then(function(data) {data.current.weather
                console.log(data);
                theWidget1= data.current.weather[0].icon;
                theWidget2= data.daily[0].weather[0].icon;
                theWidget3= data.daily[1].weather[0].icon;
                theWidget4= data.daily[2].weather[0].icon;
                theWidget5= data.daily[3].weather[0].icon;
                theWidget6= data.daily[4].weather[0].icon;

                document.querySelector("#day2nd").innerHTML = tomorrow+ "<image src= 'http://openweathermap.org/img/wn/" + theWidget1 +"@2x.png'>";
                document.querySelector("#day3rd").innerHTML = tomorrow2+ "<image src= 'http://openweathermap.org/img/wn/" + theWidget2 +"@2x.png'>";
                document.querySelector("#day4th").innerHTML = tomorrow3+ "<image src= 'http://openweathermap.org/img/wn/" + theWidget3 +"@2x.png'>";
                document.querySelector("#day5th").innerHTML = tomorrow4+ "<image src= 'http://openweathermap.org/img/wn/" + theWidget4 +"@2x.png'>";
                document.querySelector("#day6th").innerHTML = tomorrow5+ "<image src= 'http://openweathermap.org/img/wn/" + theWidget5 +"@2x.png'>";

                console.log(theWidget1);
                document.getElementById("cityDate").innerHTML = citySelected + " - " + "(" +today+ ") <image src= 'http://openweathermap.org/img/wn/" + theWidget1 +"@2x.png'>";
                
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

                document.querySelector("#temp6").innerHTML = data.daily[4].temp.day + "°F";
                document.querySelector("#wind6").innerHTML = data.daily[4].wind_speed + "mph";
                document.querySelector("#humidity6").innerHTML = data.daily[4].humidity + "%";

                   
               })
        
        }
    })

};

 clickHere.addEventListener("click", cityLookup);

 // 
