//b6f0cb12d38fb1510fc6fb510c01a8da
$(document).ready(function () {
    $(".submit").click(function () {
        //Make the API Call
            var city = 33629;
            var apiKey = "b6f0cb12d38fb1510fc6fb510c01a8da";
            var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=" + apiKey;
            console.log(uri);
            $.get(uri, onRes);
    });
});

function onRes(response) {
//reponse is a variable
console.log(response);
$(".country").html(response.sys.country);
$(".temp").html(response.main.temp);
$(".city-name").html(response.name);
$(".weather").html(response.weather[0].description);
}