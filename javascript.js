//7b4c123850177a48dc2ee0b6299083c6
$(document).ready(function () {
    $(".submit").click(function () {
        //Make the API Call
            var city = $(".city").val();
            var apiKey = "7b4c123850177a48dc2ee0b6299083c6";
            var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=" + apiKey;
            console.log(uri);
            $.get(uri, onRes);
    });
});

let request = require('request');

let apiKey = '7b4c123850177a48dc2ee0b6299083c6';
let city = 'Tampa Bay';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});