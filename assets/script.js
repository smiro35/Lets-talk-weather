$(document).ready(function() {


    console.log("working");

    //we need to work of the button fumction

    $(".btn").on("click", function() {

        console.log("workkkkk");


    });



    // var myKey = "170713f23aa67db96d4c9211f6c7c078"

    var weatherEl = "openweathermap.org/data/2.5/forecast?" + "q=franklin,us&appid=170713f23aa67db96d4c9211f6c7c078";

    console.log(weatherEl);


});


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