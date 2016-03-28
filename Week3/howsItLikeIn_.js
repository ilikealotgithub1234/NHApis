var city = 'New York';//$('#city').val();
var country; //$('#country').val();
var apiKey = 'd9ff9547a8c6475c6fb3de92b53235e8';
var getDataAbout_ = function(){
   $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`,
            method: "GET",
            success: (response) => {
              console.log('wind spd',response.wind.spd,'wind direction',response.wind.deg,'Rain volume for the last 3 hours',response.rain,'cloudiness',response.clouds.all)
            }
   });
 }

$('#submit').on('click',getDataAbout_());




 /*$.ajax({
          url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`,
          method: "GET",
          success: (response) => {
            console.log(response);
            var temperature = Math.round(response.main.temp);
          }
 });
*/
