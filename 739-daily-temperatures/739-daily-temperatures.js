/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    let n = temps.length; // store temps length
    let res = new Array(n).fill(0); // use temps.length to create res arr
    let stack = []; // create monotonic stack to track temps
    // loop through each daily temp
    for (let currDay = 0; currDay < n; currDay++) {
        let currTemp = temps[currDay]; // store current temperature
        while (stack.length > 0 && temps[stack[stack.length - 1]] < currTemp) { // if something already on stack & current temp > stack.peek()
            let prevDay = stack.pop(); // store previous day idx
            res[prevDay] = currDay - prevDay; // use difference in idx to calc number of days until hotter day
        }
        stack.push(currDay); // either once stack empty or colder day found, push currDay
    }
    return res; // return res arr
};