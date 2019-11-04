/*
    
    0. when page loads, get saved cities from localStorae and display on page.
    1. click button
        a. get city
        b. save city
        c. query api for that city
            1 display on screen
*/


$(document).ready(function() {



    var loc = JSON.parse(localStorage.getItem("locations")) || [];

    renderMyPlaces();



    currentLocation = $("#myCity").val().trim();

    $(".today").html(moment().format("MMM Do YY"));

    // var currentTime = moment().format('YYYY MM DD'); 
    // console.log('Current Time is ',currentTime);


    function getWeather() {

        // var myKey = "170713f23aa67db96d4c9211f6c7c078"

        var weatherEl = "http://api.openweathermap.org/data/2.5/forecast?q=" + currentLocation + "&appid=170713f23aa67db96d4c9211f6c7c078&units=imperial";

        console.log(weatherEl);

        $.ajax({
            url: weatherEl,
            method: "GET"

        }).then(function(response) {

            // var here = ("<newEl>");

            // newEl.text();

            // newEl.attr(city);
            console.log(response)



            $("#cityHere").text("City: " + response.city.name);
            $("#temp").text("Temperature: " + response.list[0].main.temp);
            $("#hum").text("Humidity: " + response.list[0].main.humidity);
            $("#wind").text("Wind: " + response.list[0].wind.speed);



            for (i = 1; i < response.list.length; i++) {

                $(".card-temp").text("Temp: " + response.list[i].main.temp);
                $(".card-text").text("Humidity: " + response.list[i].main.humidity);

                // $("#myPic").text(response.list[i].weather.main);



            };



        });

    };

    // console.log("working");

    //we need to work of the button fumction

    $(".btn").on("click", function() {

        // $("#cities").empty();


        event.preventDefault();


        currentLocation = $("#myCity").val().trim();

        loc.push(currentLocation);

        localStorage.setItem("locations", JSON.stringify(loc));


        getWeather();

        renderMyPlaces();




        // $(".class-title").text(moment().format('MMMM Do YYYY'));
    });



    // On click syntax for dynamic elements
    // $(document).on("click", ".cityLi", function() {

    //     currentLocation = $(this).text(loc);
    //     getWeather();
    // });


    function renderMyPlaces() {

        $("#cities").empty();

        for (i = 0; i < loc.length; i++) {

            var newEl = $("<li>");


            newEl.text(loc[i])

            newEl.prependTo("#cities");


        }

    };

});



// function fiveCards() {




//     var forecastEl = "https://api.openweathermap.org/data/2.5/forecast?q=" + currentLocation + "&appid=170713f23aa67db96d4c9211f6c7c078&mode=JSON";





//     console.log(forecastEl);

//     $.ajax({
//         url: forecastEl,
//         method: "GET"

//     }).then(function(cast) {

//         // var here = ("<newEl>");

//         // newEl.text();

//         // newEl.attr(city);
//         console.log(cast)

//     });


// };






// function displayBig() {


//     var weatherEl = "http://api.openweathermap.org/data/2.5/weather?q=" + currentLocation + "&appid=170713f23aa67db96d4c9211f6c7c078&units=imperial";

//     console.log(weatherEl);

//     $.ajax({
//         url: weatherEl,
//         method: "GET"

//     }).then(function(response) {

//         // var here = ("<newEl>");

//         // newEl.text();

//         // newEl.attr(city);
//         console.log(response)

//         for (i = 0; i < response.length; i++) {

//             $("#cityHere").text(response.name);
//             $("#temp").text(response.main.temp);
//             $("#hum").text(response.main.humidity);
//             //  $("#").text(response.main.rain.temp);

//         }
//     });












// };






//we need to work on the input section here
//this input will also need need to use local storage


/*
    //we need to get info from URL- use ajax
    //.then, create elements
    //display that infor as text
    //attribut.

    var place = $("input");
    localStorage.setItem("key here", place)

    localStorage.getItem("key here")

    var myKey = 170713f23aa67db96d4c9211f6c7c078

    var weatherEl = "api.openweathermap.org/data/2.5/forecast?q=" + place + myKey

    $.ajax({
        url: weatherEl,
        method: "GET"

    }).then(function(response){

        var here = ("<newEl>");

        newEl.text();

        newEl.attr(city);



        console.log(response)
    });




*/


//

// then we can focus more on design and final touches.

//JSON.parse();
//JSON.stringify();


// var loc = JSON.parse(localStorage.getItem("locations"))