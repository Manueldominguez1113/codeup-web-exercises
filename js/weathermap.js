//submit functions.moved to top for calling purposes.
let load = $(".loads")
let long = document.getElementById("longFindMe");
let lati = document.getElementById("latFindMe");
let locationName;

load.toggle() //to start at off

// unnecessary. completed with mapbox geocoding
/*function searchName(arr) {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(arr)}&appid=${WEATHER_CODE}`).then((f)=> {
        return f.json()
    }).then(function (geo) {
        let loc = document.getElementById("location");
            loc.innerHTML = "Showing weather for: " + geo[0];
        console.log(geo);
    })
}*/


function nameSearch(boolean,) {

    let input = document.getElementById("findMe").value
    geocode(input, MAPBOX_CODE).then(function (coordinates) {
        long.value = coordinates[0]
        lati.value = coordinates[1]
        let pop = new mapboxgl.Popup().setLngLat(coordinates).setHTML("<div class='popup-input'>" + input + "</div>").addTo(map)
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

function LLSearch() {
    let array = {lng: long.value, lat: lati.value}

    reverseGeocode(array, MAPBOX_CODE).then(function (a) {
        locationName = a
        document.getElementById("findMe").value = locationName
        document.getElementById("location").innerHTML = "<h5 class='locationTitle'>" + locationName + "</h5>"
        new mapboxgl.Popup().setLngLat(array).setHTML("<button id='popupBtn'>" + locationName + "</button>").addTo(map)

    }, () => {
        document.getElementById("findMe").value = "location unknown";
        let popup = new mapboxgl.Popup().setLngLat(array).setHTML("<button id='popupBtn'> Location Unknown </button>").addTo(map)
    })
}

// working weather code below. just need to .map() for each desired input and need to thread into my mapbox functions....

function weatherSetup() {
    load.toggle()
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati.value}&lon=${long.value}&units=imperial&appid=${WEATHER_CODE}`
    console.log(url);
    fetch(url)
        .then((f) => {
            load.toggle()
            if (!(f.ok)) {
                throw new Error(f.statusText)
            }
            return f.json()
        })

        .then((weather) => {
            weatherApp(weather)
        })
        .catch(console.error)


}

function weatherApp(weather) {

    let forecast = document.getElementById("forecast");
    forecast.innerHTML = weather.daily
        .map((day, ind) => {
            if (ind <= 4) {
                let dt = new Date(day.dt * 1000); //js timestamp is *1000
                let sr = new Date(day.sunrise * 1000).toTimeString();
                let ss = new Date(day.sunset * 1000).toTimeString();

                return `<div class="col-3 m-2">
            <div class="card">
            <h5 class="card-title pt2 text-center my-2">${dt.toDateString()}</h5>
            <div class="card-body row justify-content-center text-center">
                <div class="justify-content-center"><h3 class="card-title">${day.weather[0].main}</h3>
                <div class="w-100"></div>
                <img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png" alt=${day.weather[0].description}>
                </div>
                <div class="w-100"></div>
                <div class="col row p-0 m-0">
                <p class="card-text col-6 p-0">High <br>${day.temp.max}\xB0F </p>
                <p class="card-text col-6 p-0"> Low <br>${day.temp.min}\xB0F</p></div>
                <div class="w-100"></div>
                <p class="card-text col-5 m-0">Feels like:<br> ${day.feels_like.day}\xB0F</p>
                <p class="card-text col-5 m-0">Humidity: <br>${day.humidity}%</p>
                <div class="w-100 my-2"></div>
                <p class="card-text col-5 m-0">Pressure:<br> ${(day.pressure * 0.02953).toFixed(2)}inHg</p>
                <p class="card-text col-5 m-0 text-nowrap">Precipitation: <br>${(day.pop * 100).toFixed(0)}%</p>
                <div class="w-100 my-2"></div>
                <div class="col row m-0 text-center justify-content-between">
                <p class="card-text col-6 m-0">Wind: <br>${day.wind_speed}Mph </p>
                <p class="card-text col-6 m-0">Heading: <br>${day.wind_deg}\xB0</p></div>
                <div class="w-100 my-2"></div>
                <p class="card-text col-5 m-0">Sunrise:<br> ${sr}</p>
                <p class="card-text col-5 m-0">Sunset:<br> ${ss}</p>
            </div>
        </div>
    </div>`
            }

        })
        .join(" ")
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400
    });
}

mapboxgl.accessToken = MAPBOX_CODE;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-98.50, 29.42],
    zoom: "1"
});


// mouse moving and click functions
map.on('mousemove', (e) => {
    let array = e.lngLat.toArray();
    document.getElementById("info").innerHTML =
        "longitude: " + array[0].toFixed(2) + "<br> latitude: " + array[1].toFixed(2);
});
map.on('click', (e) => {
    let array = e.lngLat.toArray();
    long.value = array[0].toFixed(2);
    lati.value = array[1].toFixed(2);
    LLSearch(true);
    /*    document.getElementById("snapshot").innerHTML = "<b>KA-CLICK! you're full coordinates:</b><br>" +
            " longitude: " + array[0] + "<br> latitude: " + array[1];*/
});
map.on("dblclick", function (e) {
    e.preventDefault()
    weatherSetup()

})
$(document).one("dblclick", ()=>{
    $("weather").addClass("move-over");
})

$("#submitMe").click(() => {
    if (!($("#findMe").val())) {
        alert("enter an address!")
    } else {
        nameSearch(true);
        weatherSetup()
    }
})
// deprecated, map.onclick now does this.
/*$("#llSubmitMe").click(() => {
    LLSearch(true)
})*/


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



