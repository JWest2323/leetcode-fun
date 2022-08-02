/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 
 HL: - Use topological sort to determine if we have a cycle and thus impossible to complete
 LL: - create a order & indegree arr, graph, and a queue
     - for loop thru prereqs and store the v dependency on the graph incrementing indegree[e]
     - for loop to store any reqs that have 0 indegrees to the queue
     - while the q 
        - create req const = q.shift()
        - check if graph.has(req)
            - if so for loop creating const pre of graph.get(req) reducing the indegree--
            - if indegree === 0, q.push
        -order.push(req) every while loop
    - return (order.length = numCourses) as this must equal signifying we have enough courses to meet reqs
 */
var canFinish = function(numCourses, prerequisites) {
    let order = [];
    let graph = new Map();
    let indegree = new Array(numCourses).fill(0);
    let q = [];
    
    for (const [e,v] of prerequisites) {
        if(graph.has(v)) {
            graph.get(v).push(e); // add dependency if not done so already
        } else {
            graph.set(v, [e]);
        }
        indegree[e]++; // increment indegree as we go
    }
    for (let i = 0; i < indegree.length; i++) { // store indegree's w 0 in the q first
        if (indegree[i] === 0) q.push(i);
    }
    while (q.length) {
        const req = q.shift(); // pop off each req 
        if (graph.has(req)) { 
            for(const pre of graph.get(req)) { // for loop the dependencies and decrement its indegree
                indegree[pre]--;
                if(indegree[pre] === 0) q.push(pre); // if zero push back to q
            }
        }
        order.push(req) // store the order of classes needed to be taken 
    }
    return order.length === numCourses; // order of classes taken must === numCourses
};