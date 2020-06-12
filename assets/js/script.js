function mySearchFunction() {
    var input, filter, ul, item, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("city");
      for (i = 0; i < length; i++) {
      item = [i];
      txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        [i].style.display = "";
      } else {
        [i].style.display = "none";
      }
    }
  }

  var url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=d4209304f0d7177a2344feb60a6dadd8"

  // fetch (
  //   "https://api.openweathermap.org/data/2.5/forecast?q=saltlakecity&appid=d4209304f0d7177a2344feb60a6dadd8"
  //   //api.openweathermap.org/data/2.5/forecast?q={salt lake city}&appid={your api key}
  // )