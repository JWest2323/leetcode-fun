/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adjList = new Map(), indegree = new Array(numCourses).fill(0);
    let res = [];

    for (let [course, prereq] of prerequisites) {
        indegree[course]++;
        adjList.set(prereq, [...(adjList.get(prereq) || []), course]);
    }

    let q = indegree.filter((deg) => !deg);

    while (q.length) {
        let curCourse = q.shift();
        res.push(curCourse);
        numCourses--;

        for (let nextCourse of adjList.get(curCourse) || []) {
            indegree[nextCourse]--;
            if (!indegree[nextCourse])
                q.push(nextCourse);
        }
    }

    return !numCourses ? res : [];
};