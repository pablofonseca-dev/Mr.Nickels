const getRandomInt = require("./get-random-int");
/**
 *  It is responsible for mixing the elements of an arrangement. <br/>
 *  The value of a random array position is changed (always being in the array range)
 *  with the current value on the iteration. 
 *  Due to constant exchange, there will never be repeating elements.
 * @param {Array} array Any array with different elements.  
 * @returns The shuffle array. 
 */
 const shuffle = (array = []) => {
    let tempCurrentPosition; 
    let randomNumber = 0;
 
    array.forEach((arrayElement, index) => {
        randomNumber = getRandomInt(0, array.length);
        tempCurrentPosition = array[index];
        array[index] = array[randomNumber];
        array[randomNumber] = tempCurrentPosition;
    });
 
    return array;
}

module.exports = shuffle;
 

