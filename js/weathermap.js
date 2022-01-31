let sanAntonio = {
    latitude: "29.4241219",
    longitude: "-98.4936282"
}
// wrong, tommorow i will get the weather apps version of the geocode and get their coordinates for SA
$.ajax("api.openweathermap.org/data/2.5/weather?lat=-98.4936282&lon=29.424349&appid=79e38d2b09681159bdcd85a2b3532033").done(function(weather){
    console.log(weather);
})