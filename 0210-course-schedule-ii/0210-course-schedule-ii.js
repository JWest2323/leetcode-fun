/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let indegree = new Array(numCourses).fill(0);
    let reqs = new Map(), res = [];

    for (let [course, need] of prerequisites) {
        indegree[course]++;
        if (!reqs.has(need)) reqs.set(need, []);
        reqs.get(need).push(course);
    }

    let q = [];
    for (let i = 0; i < indegree.length; i++) 
        if (!indegree[i]) 
            q.push(i);

    while (q.length) {
        let curr = q.shift();
        res.push(curr);
        let nbrs = reqs.get(curr) || [];
        console.log(nbrs)
        for (let nbr of nbrs) {
            indegree[nbr]--;
            if (!indegree[nbr]) q.push(nbr);
        }
    }
    return res;
};