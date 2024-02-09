document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.board__cell');
    const restartButton = document.querySelector('.restart');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (board[index] || checkWin()) return;
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (checkWin()) alert(`${board[index]} wins!`);
            else if (board.every(cell => cell !== '')) alert("It's a draw!");
        });
    });

    restartButton.addEventListener('click', resetGame);

    function checkWin() {
        const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        return winConditions.some(condition => {
            const [a, b, c] = condition;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    function resetGame() {
        board.fill('');
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = 'X';
    }
});
