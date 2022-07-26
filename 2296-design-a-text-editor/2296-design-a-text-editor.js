
var TextEditor = function() {
    this.forward = []; // track chars ahead of cursor
    this.backward = []; // track chars behind cursor
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    for (let letter of text) {
        this.forward.push(letter); // store chars of text in forward arr
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    let deleted = 0; // counter var
    while (this.forward.length && deleted < k) { 
        this.forward.pop(); // pop up to k times
        deleted++;
    }
    return deleted;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
    let moved = 0;
    while (this.forward.length && moved < k) {
        this.backward.push(this.forward.pop()); // pop & push at most k chars from forward to backward
        moved++
    }
    return toTheLeft(this.forward); // call helper func on this.forward
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    let moved = 0;
    while (moved < k && this.backward.length) {
        this.forward.push(this.backward.pop()); // pop & push at most k chars from forward to backward
        moved++
    } 
    return toTheLeft(this.forward); // call helper func on this.forward
};

function toTheLeft(arr) {
    let letters = [];
    for (let i = Math.max(0, arr.length - 10); i < arr.length; i++) {
        letters.push(arr[i]); // push last 10 chars
    }
    let res = letters.join(""); 
    return res; // return as a string
}
/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */