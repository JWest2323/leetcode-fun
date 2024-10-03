/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length, n = board[0].length;

    const dfs = (i, r, c) => {
        if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] != word[i])
            return;
        if (i == word.length - 1)
            return true;
        board[r][c] = '*'

        return (
            dfs(i + 1, r + 1 , c) || dfs(i + 1, r - 1, c) || dfs(i + 1, r, c + 1) || dfs(i + 1, r, c - 1)
        )
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] == word[0] && dfs(0, r, c)) {
                return true;
            }
        }
    }

    return false;
};