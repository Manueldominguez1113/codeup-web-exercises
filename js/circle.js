(function () {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function getArea() {
            // ✅TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI * this.radius * this.radius
            return area; // ✅TODO: return the proper value
        },

        logInfo: function doRounding(round) {
            // TODO: complete this method.
            let areaDone = 0
            if (round === true) {
                areaDone = Math.round(this.getArea())
            } else {
                areaDone = this.getArea();
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            //--    ----------------------------------------------------
            console.log("Area of a circle with radius: " + this.radius + ", is: " + areaDone);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: ✅Change the radius of the circle to 5.
circle.radius=5
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
