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