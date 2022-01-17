function htmlpractice() {
    /*let html = '<div class="coffee col-sm-6 row mb-2" id="' + coffee.id + '">';*/
    let html = '<div class="coffee card col-sm-6 row m-auto mb-sm-2" style="height: 10rem;" id="' + coffee.id + '">'
    html += '<img class="card-img-top" src="#" alt="#">'
    html += '<div class="card-body">'
    html += '<div class="card-title row"> <h4 class="col-auto px-1">' + coffee.name + '</h4>';
    html += '<p class="col-auto p-0 m-0" style="color: darkgrey">' + coffee.roast + '</p></div>';
    html += '<p class="card-text">' + '</p></div></div></div>'
    return html;
}
filteredCoffees= [{id:1, recommended: false},{id:2, recommended: false},{id:3, recommended: false},{id:4, recommended: false}]
coffees=[{id:1, recommended: false},{id:2, recommended: false},{id:3, recommended: false},{id:4, recommended: false},{id:5, recommended: false},{id:6, recommended: false},{id:7, recommended: false},{id:8, recommended: false}]
let cofy= Math.floor(Math.random()*7);
let id;
for (let i = 0; i < filteredCoffees.length; i++) {
    id = filteredCoffees[i].id
    if (filteredCoffees[i].id === coffees[cofy].id) {
        coffees[(filteredCoffees[i].id-1)].recommended = true;

    } else {
        coffees[i].recommended = false;
    }
}