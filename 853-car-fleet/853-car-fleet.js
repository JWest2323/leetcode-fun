/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let len = position.length; // store length of positions arr
    let map = new Map(), fleets = 0, lastTime = -1; // create map, fleets, & a lastTime var
    // store positions & speeds in map based on idx
    for (let i = 0; i < len; i++) {
        map.set(position[i], speed[i]);
    }
    // sort the positions from closest to furthest from target
    const sortedPos = [...map.keys()].sort((a,b) => b - a);
    // calc time needed to reach target
    for (let i = 0; i < len; i++) {
        let time = (target - sortedPos[i]) / map.get(sortedPos[i]); // distance from target / speed
        
        // scenario 1: curr car is fast and takes less time: will merge w slower car  
        // scenario 2: curr car takes more time to reach target: wont merge & will form new fleet
        if (time > lastTime) {
            fleets++;
            lastTime = time;
        }
    }
    return fleets;
};