/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let indegree = new Array(numCourses).fill(0);

    for (let [course, prereq] of prerequisites) {
        indegree[course] += 1;
    }

    let q = [];
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            q.push(i);
        }
    }
    let count = 0;

    while (q.length) {
        const curCourse = q.pop();
        count++;

        for (let [course, prereq] of prerequisites) {
            if (prereq === curCourse) {
                indegree[course] -= 1;
                if (indegree[course] === 0) {
                    q.push(course);
                }
            }
        }
    }
    return count === numCourses;
};
