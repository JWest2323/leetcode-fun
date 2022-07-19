/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (n === 0) return tasks.length; // if cool time == 0 ret tasks.length
    const freq = new Map(); // create freq map to store call and num of times called
    for (const task of tasks) freq.set(task, (freq.get(task) || 0) + 1); // 
    
    const counts = Array.from(freq.values()); // create a counts arr from the freq map
    counts.sort((a, b) => b - a); // sort based on most freq
    const most = counts[0]; // store the most freq
    let idleTime = (most - 1) * n; // calc init idleTime based on most count
    
    for (let i = 1; i < counts.length; i++) {
        idleTime -= Math.min(counts[i], most - 1, idleTime); // repeatedly check for smallest valid idleTime
        if (idleTime === 0) break;
    }
    return tasks.length + idleTime; // return tasks.length + idleTime
};