function searchCitys(city) {
  var apiKey = "9c96d6ff0e0ae61b13ab10a485fbdcc0"

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=9c96d6ff0e0ae61b13ab10a485fbdcc0",
    method: "GET",
  }).then(function (response) {
    var imigeIcon = response.weather[0].icon;
    var imigeUrl = "https://openweathermap.org/img/w" + imigeIcon + ".png";

    $("#weatherImige").attr("src", imigeUrl);
    $("#enteredCity").html(response.name + " (" + todayDate + ")");
    $("#temperature").text("Temperature: " + response.main.temp);
    $("#humidity").text("Humidity: " + response.main.humidity);
    $("#windSpeed").text("WindSpeed: " + response.wind.speed);
    $(".card-header").text(city);

    var latitude = response.coord.latitude;
    var longitude = response.coord.longe;
    var cityName = response.id;

    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/uvi?appid=9c96d6ff0e0ae61b13ab10a485fbdcc0=" + latitude + "&" + "lon=" + longitude,
      method: "GET",
    }).then(function(response){
      var uvIndex = response.value;

      $("#uv").append(`UV Index: <span class="uvSpan> ${uvIndex} </span>`);

      if(uvIndex < 3){
        $(".uvSpan").addClass("good");
      }
      else if(uvIndex > 2 && uvIndex < 8){
        $(".uvSpan").addClass("ok"); 
      }
      else{
        $(".uvSpan").addClass("bad");
      }
    })
  })

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=9c96d6ff0e0ae61b13ab10a485fbdcc0",
    method: "GET",
  }).then(function(response){
    var dateOne = imigeUrl;

    $("#weatherImige").attr("src", imigeUrl);
  })
}