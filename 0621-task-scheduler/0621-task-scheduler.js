/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // init hashmap to track task frequency
    let taskFreq = new Map();
    
    // loop tasks arr to incre freq by key/task
    for (let task of tasks) {
        taskFreq.set(task, (taskFreq.get(task) ?? 0) + 1);
    }
    
    // init sorted desc. array of frequency count of all tasks
    let countList = Array.from(taskFreq.values()).sort((a,b) => b - a);
    
    // use first count in countList as our maxCount
    let maxCount = countList[0];
    // use to compute max idle time
    let idleTime = (maxCount - 1) * n;
    
    // loop countList arr to deduct max of (maxCount - 1 || countList[i]) from idleTime
    for (let i = 1; i < countList.length; i++) {
        idleTime -= Math.min(maxCount - 1, countList[i]);
    }
    
    // return tasks.length + idleTime if positive
    return tasks.length + Math.max(0, idleTime) ;
};