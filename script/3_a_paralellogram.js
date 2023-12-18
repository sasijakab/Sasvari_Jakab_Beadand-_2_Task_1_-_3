function calculateAreaWithHeightAndSide(height, side) {
    var result;
    result = height * side;
    return result;
}
function calculateAreaWithAngleAndSides(angle, side1, side2) {
    var radians = (angle * Math.PI) / 180; // Convert angle to radians
    var result2;
    result2 = side1 * side2 * Math.sin(radians);
    return result2;
}

/*With these two functions you can calculates the area of ​​a parallelogram in 
two ways: with height and side and angle and two sides. */

/*Example for usuage
Please write this into you web browser developer tools to call the function
calculateAreaWithHeightAndSide(10,30)
or
calculateAreaWithAngleAndSides(10,30,30)*/
