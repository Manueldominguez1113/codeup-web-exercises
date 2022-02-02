let lat = 29.4246002;
let lon = -98.4951405

// direct geocode to find coordinates and everything else needed.
/*$.ajax(`https://api.openweathermap.org/geo/1.0/direct?q=San_antonio&limit=5&appid=`+WEATHER_CODE).done(function(geo){
    $("#location").append(geo[0].name);
    console.log(geo);
 })*/

// working weather code below. just need to .map() for each desired input and figure out how to set long&lat from the geocoder above....
//        commented out to stop calling everytime as i work on the map.
/*
$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_CODE}`).done(function (weather) {
    console.log(weather)
    const date = new Date(weather.daily[0].dt * 1000)
    let today = date.getMonth()+"/"+ date.getDay() +"/"+date.getFullYear()
    $("#today").append(
        "<h3>"+
        today
       +" <br>now: "+ weather.current.temp +" F <br>"+
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

// this helps me by showing the long lat coordinates under the mouse on the map. now to make a global variable to store the coordinate so I may use it elsewhere
map.on('mousemove', (e) => {
    let array;
    array = e.lngLat.toArray();
    document.getElementById("info").innerHTML = "<br>" +
        " longitude: " + array[0].toFixed(2) + "<br> latitude: " + array[1].toFixed(2);
});
map.on('click', (e) => {
    let long, lati, array;
    long = document.getElementById("longFindMe");
    lati = document.getElementById("latFindMe");
    array = e.lngLat.toArray();
    long.value = array[0].toFixed(2);
    lati.value = array[1].toFixed(2);
    let popup = new mapboxgl.Popup().setLngLat(e.lngLat).setHTML("<button id='popupBtn'>click on this bubble to know the weather here!</button>").addTo(map);
    console.log(e.lngLat.toArray())
    document.getElementById("snapshot").innerHTML = "<b>KA-CLICK! you're full coordinates:</b><br>" +
        " longitude: " + array[0] + "<br> latitude: " + array[1];
    console.log(popup)
});

//submit functions. should make latlng a basic function so i can call it either on submit or on gps.
$("#submitMe").click(function () {
    let input = $("#findMe").val()
    geocode(input, MAPBOX_CODE).then(function (coordinates) {

        new mapboxgl.Popup().setLngLat(coordinates).setHTML("<div class='popup-input'>"+input+"</div>").addTo(map);
        map.setCenter(coordinates)
        map.setZoom(16);
    });
})
$("#llSubmitMe").click(function () {
    let input = $("#findMe").val()
    reverseGeocode(input, MAPBOX_CODE).then(function (coordinates) {

        let marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map).setPopup(new mapboxgl.Popup().setHTML(input));

        map.setCenter(coordinates)
        map.setZoom(16);
    });
})

// pixels the map pans when the up or down arrow is clicked
const deltaDistance = 100;

function easing(t) {
    return t * (2 - t);
}

map.on('load', () => {
    map.getCanvas().focus();

    document.addEventListener('keydown', (e) => {

            if (e.which === 38) {
/* up*/           e.preventDefault();
                map.panBy([0, -deltaDistance], {easing: easing});
            } else if (e.which === 40) {
/*down*/          e.preventDefault();
                map.panBy([0, deltaDistance], {easing: easing});
            } else if (e.which === 37) {
/*left*/         e.preventDefault();
                map.panBy([-deltaDistance, 0], {easing: easing});
            } else if (e.which === 39) {
/*right*/       e.preventDefault();
                map.panBy([deltaDistance, 0], {easing: easing});
            }
        },
        true
    );
});