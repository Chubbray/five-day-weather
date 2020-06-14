function searchCitys(city) {
  var apiKey = "d4209304f0d7177a2344feb60a6dadd8"

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=d4209304f0d7177a2344feb60a6dadd8",
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
      url: "https://api.openweathermap.org/data/2.5/uvi?appid=d4209304f0d7177a2344feb60a6dadd8=" + latitude + "&" + "lon=" + longitude,
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
}

// function mySearchFunction() {
//   var input, filter, ul, item, i, txtValue;
//   input = document.getElementById("input");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("city");
//   for (i = 0; i < length; i++) {
//     item = [i];
//     txtValue = item.textContent || item.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       [i].style.display = "";
//     } else {
//       [i].style.display = "none";
//     }
//   }
// }

// var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=d4209304f0d7177a2344feb60a6dadd8"

//   // fetch (
//    //  "https://api.openweathermap.org/data/2.5/forecast?q=SaltLakeCity&appid=d4209304f0d7177a2344feb60a6dadd8"
//   //   //api.openweathermap.org/data/2.5/forecast?q={salt lake city}&appid={your api key}
//   // )