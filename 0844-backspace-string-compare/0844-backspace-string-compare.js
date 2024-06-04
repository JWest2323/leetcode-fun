/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let stackS = [], stackT = [];

  for (let char of s) {
    if (char === '#')
        stackS.pop();
    else 
        stackS.push(char);
  }

  for (let char of t) {
    if (char === '#')
        stackT.pop();
    else 
        stackT.push(char);
  }   

  let strS = stackS.join(''), strT = stackT.join('');

  return strS === strT;
};