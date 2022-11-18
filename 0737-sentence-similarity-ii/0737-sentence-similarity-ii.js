/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) return false;
    let graph = new Map();
    
    for (let [w1, w2] of similarPairs) {
        if (!graph.has(w1)) graph.set(w1, []);
        if (!graph.has(w2)) graph.set(w2, [])
        
        graph.get(w1).push(w2);
        graph.get(w2).push(w1);
    }
    
    const dfs = (w1, w2, seen = {}) => {
        if (w1 === w2) return true;
        
        for (let nbr of (graph.get(w1) || [])) {
            if (seen[nbr]) continue;
            seen[nbr] = true;
            if (dfs(nbr, w2, seen)) return true;
        }
    }

    for (let i = 0; i < sentence1.length; i++) {
        if (!dfs(sentence1[i], sentence2[i])) return false;
    }

    return true;
};