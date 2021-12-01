(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
planetsArray = planetsString.split('|');
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *  A: to create spacing on an html doc and ease html& js together. */

    let string=planetsArray.join('<br>');
    console.log(string);
document.write(string,'<br>','<br>'); // I entered two breaks to create more room in the html to see
                                        //      the tables
    /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
// planetsArray.push('</ul>');
planetsArray.unshift('<ul>');
console.log(planetsArray)
let string2 =planetsArray.join('<li>');
let stringDone= string2+'</ul>'
console.log(stringDone)
document.write(stringDone)
})();
