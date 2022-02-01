let lat= 29.4246002;
let lon= -98.4951405

// direct geocode to find coordinates and everything else needed.
$.ajax(`https://api.openweathermap.org/geo/1.0/direct?q=San_antonio&limit=5&appid=`+WEATHER_CODE).done(function(geo){
    $("#location").append(geo[0].name);
    console.log(geo);
 })

/* working weather code below. just need to .map() for each desired input and figure out how to set long&lat from the geocoder above....
        commented out to stop calling everytime as i work on the map.

$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_CODE}`).done(function (weather) {
    console.log(weather)
    const date = new Date(weather.daily[0].dt * 1000)
    let today = date.getMonth()+"/"+ date.getDay() +"/"+date.getFullYear()
    $("#today").append(
        "<h3>"+
        today
       +" <br>now: "+ weather.current.temp +" mph <br>"+
       " feels like "+ weather.current.feels_like + " F <br>"+
       " high "+ weather.daily[0].temp.max +" mph <br>"+
        "low "+ weather.daily[0].temp.min+" mph <br>"+
        "Winds at " + weather.current.wind_speed+" mph, heading "+ weather.current.wind_deg+" Deg<br>"+
        "Gust " + weather.current.wind_gust+"<br>"+
        "humidity " + weather.current.humidity+"<br>"+
        "pressure " + weather.current.pressure+"<br>"+
        weather.current.dew_point

        +"</h3> <img src='http://openweathermap.org/img/w/"+weather.current.weather[0].icon+".png'>"
    )
    console.log("done")
})*/
 mapboxgl.accessToken = MAPBOX_CODE;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [lon, lat],
    zoom: "10"
});

$("#submitMe").click(function(){
    let input= $("#findMe").val()
    geocode(input, MAPBOX_CODE).then(function(coordinates){

        let marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map).setPopup(new mapboxgl.Popup().setHTML(input));

        map.setCenter(coordinates)
        map.setZoom(16);
    });
})