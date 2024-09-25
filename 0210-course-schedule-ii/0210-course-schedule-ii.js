/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adjList = new Map(), indegree = new Array(numCourses).fill(0);
    let res = [];

    for (let [course, prereq] of prerequisites) {
        if (!adjList.has(prereq)) 
            adjList.set(prereq, []);
        adjList.get(prereq).push(course);
        indegree[course]++;
    }   

    let q = indegree.map((idx) => idx).filter((idx) => indegree[idx] == 0);
    let i = 0;
    while (q.length) {
        let course = q.shift();
        res.push(course);
        i++;

        if (adjList.has(course)) {
            for (let nbr of adjList.get(course)) {
                indegree[nbr]--;
                if (indegree[nbr] == 0) q.push(nbr);
            }
        }
    }
    if (i == numCourses) 
        return res;
    else 
        return [];
};