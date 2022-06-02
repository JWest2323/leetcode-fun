/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    let res = new Array(temps.length).fill(0);
    let stack = [];
    for (let i = temps.length - 1; i >= 0; i--) {
        let temp = temps[i];
        while (stack.length && stack[stack.length - 1][0] <= temp) {
            stack.pop();
        }
        let numOfDays = stack.length ? (stack[stack.length - 1][1] - i) : 0;
        res[i] = numOfDays;
        stack.push([temp, i]);
    }
    return res;
};
