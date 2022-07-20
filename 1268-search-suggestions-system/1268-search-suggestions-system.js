/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort(); // sort products arr
    let res = [], l = 0, r = products.length - 1; // create res arr, l & r ptrs
    for (let i = 0; i < searchWord.length; i++) {
        let char = searchWord.charAt(i), topLex = [];
        while (products[l]?.charAt(i) < char) l++; // incr. l ptr while charAt(i) of l ptr is lexicographically < char
        while (products[r]?.charAt(i) > char) r--; // decr. r ptr while charAt(i) of r ptr is lexicographically > char
        for (let j = 0; j < 3 && l + j <= r; j++) 
            topLex.push(products[l + j]); // push top 3 that fall in range to topLex arr
        res.push(topLex); // push to res arr
    }
    return res;
};