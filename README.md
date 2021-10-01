# weather-Channel
Shows the predicted weather for multiple cities.  City names can be searched for in the search bar and their names are saved in a search history.  The weather is shown for the entire week with widgets showing the kind of weather that is predicted for the day.

---

## HTML 

The HTML has four main sections: 
<br>
>    1. The header.
>>>  <li>Includes the colored background with website name in the header bar.
<br>  

>    2. The search section.
>>>  <li>Is left aligned on the page and inlcudes a search bar, search button, and the search history.
<br>

>    3. The current day weather.
>>>  <li>Shows the current date, city name, a widget for the current weather, and the other weather parameters for the day. This sections takes up the top right portion of the website page.
<br>

>    3. The next five day forcast.
>>>  <li>This has the same information as the current day besides the city name and the UV Index.  The cards are in a row beneath the current day weather.

## CSS

The CSS was needed for the page color scheme and to allow for the cards to be aligned properly.  An @ media screen parameter was made so the cards adjust properly as the screen shrinks in width.  The following code was what allowed for the proper changes to be made.

                            @media screen and (max-width: 1270px) {
                                .currentDay {
                                    top: 200px;
                                    right: auto;
                                    height: 270px;
                                    padding-right: auto;
                                }
                                .forcast {
                                    top: 500px;
                                    right: auto;
                                }
                            }


The first media screen parameter was so that if the screen width went below 1270px in width, the current day box needs to adjust in padding width on the right automatically to fit the screen and the box needs to move down more.  At that screen width, the box overlapped with the search bar, so it needed to move down below the search bar. 

## JavaScript

The JavaScript was fairly straight forward.  It was amazing practice for understanding how to call specific values from arrays and objects as well as how to use the third party APIs.  The websites are very detailed typically on how to make the calls, and it was interesting figuring out how to use the weather one.  

The tricky part of the JavaScript was not how to make the API calls for the weather parameters, it was how to get the widget to work properly.  I ended up figuring out that I would make an image tag in JavaScript with the id of the proper widget getting put within the source.  This was then apended to the HTML in the proper location.
