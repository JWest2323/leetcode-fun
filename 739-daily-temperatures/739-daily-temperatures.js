/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    let res = new Array(temps.length).fill(0); // prefill array of length of temps w 0
    let stack = []; // create stack var
    for (let i = temps.length - 1; i >= 0; i--) { 
        let temp = temps[i]; // store curr temp going r -> l
        while (stack.length && stack[stack.length - 1][0] <= temp) { // if stack !empty & current temp >= stack.top()
            stack.pop(); // pop until we come across larger temp or until empty
        }
        let numOfDays = stack.length ? (stack[stack.length - 1][1] - i) : 0; // if stack has el, cur idx numOfDays = last hot day - idx
        res[i] = numOfDays; // store val in res
        stack.push([temp, i]); // push curr temp and curr idx
    }
    return res; // return res
};
