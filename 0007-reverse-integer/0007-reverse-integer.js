/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNeg = x < 0 ? true : false;
    let xArr = x.toString().split("");

    if (isNeg) xArr.shift();

    xArr = xArr.reverse();
    
    let res = Number(xArr.join(""));

    if (res < -Math.pow(2, 31) - 1 || res > Math.pow(2, 31))
        return 0;
    else 
        return isNeg ? -1 * res : res;
};