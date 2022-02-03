//submit functions.moved to top for calling purposes.
let long = document.getElementById("longFindMe");
let lati = document.getElementById("latFindMe");
let locationName;
function nameSearch(boolean) {
    let input = $("#findMe").val()
    geocode(input, MAPBOX_CODE).then(function (coordinates) {
        long.value = coordinates[0]
        lati.value = coordinates[1]
        let popup = new mapboxgl.Popup().setLngLat(coordinates).setHTML(input).addTo(map)
        if (boolean === true) {
            map.flyTo({
                center: coordinates,
                zoom: 14,
                bearing: 0,
                curve: 1,
                speed: 2,
                easing: (t) => t,
                essential: true
            });
        }
    })
}

function LLSearch(boolean, after) {
    let array = {lng: long.value, lat: lati.value}

    reverseGeocode(array, MAPBOX_CODE).then(function (coordinates) {
        document.getElementById("findMe").value = coordinates
        locationName = coordinates
        let popup = new mapboxgl.Popup().setLngLat(array).setHTML("<button id='popupBtn'>" + locationName + "</button>").addTo(map)
    }, () => {
        document.getElementById("findMe").value = "location unknown";
        let popup = new mapboxgl.Popup().setLngLat(array).setHTML("<button id='popupBtn'> Location Unknown </button>").addTo(map)
    })
/*    map.flyTo({
        center: array,
        bearing: 0,
        curve: 1,
        speed: 2,
        easing: (t) => t,
        essential: true
    });
    if (boolean === true) map.flyTo = +{zoom: 14}
*/
}

// direct geocode to find weather api's coordinates and everything else needed. but with mapbox geocoding.. all this does is get the city name..
// is it still relevant?

/*$.ajax(`https://api.openweathermap.org/geo/1.0/direct?q=San_antonio&limit=5&appid=`+WEATHER_CODE).done(function(geo){
    $("#location").append(geo[0].name);
    console.log(geo);
 })*/

// working weather code below. just need to .map() for each desired input and need to thread into my mapbox functions....

function weatherSetup() {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati.value}&lon=${long.value}&units=imperial&appid=${WEATHER_CODE}`
    console.log(url);
    fetch(url)
        .then((f) => {
            if(!(f.ok)){ throw new Error(f.statusText) }
        return f.json()
        })

        .then((weather) => {
        weatherApp(weather)
}).catch(console.error)
}

function weatherApp (weather){

    const date = new Date(weather.daily[0].dt * 1000)
    let today = date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()
    // works but want 7 days of content. commented out and will strip apart for the important info.

    $("#forecast").innerHTML = weather.daily
        .map((day,index)=>{
            if(index<= 7) {
                return day
            }
        })
    /*  "<h3>" +
      today
      + " <br>now: " + weather.current.temp + " F <br>" +
      " feels like " + weather.current.feels_like + " F <br>" +
      " high " + weather.daily[0].temp.max + " mph <br>" +
      "low " + weather.daily[0].temp.min + " mph <br>" +
      "Winds at " + weather.current.wind_speed + " mph, heading " + weather.current.wind_deg + " Deg<br>" +
      "Gust " + weather.current.wind_gust + "<br>" +
      "humidity " + weather.current.humidity + "<br>" +
      "pressure " + weather.current.pressure + "<br>" +
      weather.current.dew_point

      + "</h3> "*/
let html= `<div class="col">
        <div class="card" style="width:30vw">
            <h5 class="card-title pt2">Date</h5>
            <img src="http://openweathermap.org/img/w/10d@4x.png" alt="weather_icon">
            <div class="card-body">
                <h3 class="card-title">weather label</h3>
                <p class="card-text">high temp low temp</p>
                <p class="card-text">feels like</p>
                <p class="card-text">pressure</p>
                <p class="card-text">humidity</p>
                <p class="card-text">uv index</p>
                <p class="card-text">precipitation</p>
                <p class="card-text">dew point</p>
                <p class="card-text">wind speed and direction</p>
                <p class="card-text">sunrise</p>
                <p class="card-text">sunset</p>
            </div>
        </div>
    </div>`


    console.log("done")
}

mapboxgl.accessToken = MAPBOX_CODE;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-98.50, 29.42],
    zoom: "7"
});


// mouse moving and click functions
map.on('mousemove', (e) => {
    let array = e.lngLat.toArray();
    document.getElementById("info").innerHTML = "<br>" +
        " longitude: " + array[0].toFixed(2) + "<br> latitude: " + array[1].toFixed(2);
});
map.on('click', (e) => {
    let array = e.lngLat.toArray();
    long.value = array[0].toFixed(2);
    lati.value = array[1].toFixed(2);

    LLSearch(false)
    document.getElementById("snapshot").innerHTML = "<b>KA-CLICK! you're full coordinates:</b><br>" +
        " longitude: " + array[0] + "<br> latitude: " + array[1];
});
map.on("dblclick", function (e) {
    e.preventDefault()
    weatherSetup()
    // nameSearch()   irrelevant. will make this run the weather api.
})


$("#submitMe").click(() => {
    nameSearch(true)
})
$("#llSubmitMe").click(() => {
    LLSearch(true)
})


// pixels the map pans when the up or down arrow is clicked
const deltaDistance = 100;

function easing(t) {
    return t * (2 - t);
}

map.on('load', () => {
    document.addEventListener('keydown', (e) => {

            if (e.which === 38) {
                /* up*/
                e.preventDefault();
                map.zoomIn({duration: 500});
            } else if (e.which === 40) {
                /*down*/
                e.preventDefault();
                map.zoomOut({duration: 500});
            } else if (e.which === 37) {
                /*left*/
                e.preventDefault();
                map.panBy([-deltaDistance, 0], {easing: easing});
            } else if (e.which === 39) {
                /*right*/
                e.preventDefault();
                map.panBy([deltaDistance, 0], {easing: easing});
            }
        },
        true
    );
});