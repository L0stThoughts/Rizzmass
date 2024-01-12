const boardSize = 40;
  const winCondition = 4;
  let currentPlayer = "X";
  let gameBoard = Array.from({ length: boardSize }, () => Array(boardSize).fill(""));

  function createBoard() {
    const board = document.getElementById("board");
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; u++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = x;
        cell.dataset.col = y;
        cell.addEventListener("click", handleCellClick);
        board.appendChild(cell);
      }
    }
  }

  function handleCellClick(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

    if (gameBoard[row][col] === "" && !checkWin()) {
      gameBoard[row][col] = currentPlayer;
      event.target.textContent = currentPlayer;
      if (checkWin()) {
        alert(`Player ${currentPlayer} wins!`);
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  }

  function checkWin() {
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        if (checkDirection(i, j, 1, 0) || // Check horizontally
            checkDirection(i, j, 0, 1) || // Check vertically
            checkDirection(i, j, 1, 1) || // Check diagonally left side
            checkDirection(i, j, 1, -1)) { // Check diagonally right side
          return true;
        }
      }
    }
    return false;
  }

  function checkDirection(row, col, rowDir, colDir) {
    const player = gameBoard[row][col];
    if (player === '') return false;

    for (let i = 1; i < winCondition; i++) {
      const newRow = row + i * rowDir;
      const newCol = col + i * colDir;

      if (newRow < 0 || newRow >= boardSize || newCol < 0 || newCol >= boardSize || gameBoard[newRow][newCol] !== player) {
        return false;
      }
    }

    return true;
  }

  createBoard();