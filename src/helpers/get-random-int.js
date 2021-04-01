/**
 * Selects a random integer between min (included) and max (excluded)
 * !Using Math.round () will give you a non-uniform distribution!
 * @param {int} min The minimun number, included.
 * @param {int} max The maximun number, excluded.
 * @returns returns the random integer selected. 
 */
 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = getRandomInt;