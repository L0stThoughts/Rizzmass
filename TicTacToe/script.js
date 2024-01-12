const changeSize = document.getElementById("size");
      const winCondition = 5;
      let currentPlayer = "X";
      var number = parseInt(document.getElementById("amount").value);
      var boardSize = number;
      var gameBoard = Array.from({ length: boardSize }, () =>
        Array(boardSize).fill("")
      );

      changeSize.addEventListener("submit", function (e) {
        e.preventDefault();
        number = parseInt(document.getElementById("amount").value);
        boardSize = number;

        var board = document.getElementById("board");
        board.style.gridTemplateColumns = "repeat(" + number + ", 1fr)";

        document.getElementById("size").style.display = "none";
        getSize();
      });

      function getSize() {
        gameBoard = Array.from({ length: boardSize }, () =>
          Array(boardSize).fill("")
        );

        createBoard();
      }

      function createBoard() {
        const board = document.getElementById("board");
        for (let x = 0; x < boardSize; x++) {
          for (let y = 0; y < boardSize; y++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = x;
            cell.dataset.col = y;
            cell.addEventListener("click", clickBlock);
            board.appendChild(cell);
          }
        }
      }

      function clickBlock(event) {
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);

        if (gameBoard[row][col] === "" && !checkWin()) {
          gameBoard[row][col] = currentPlayer;
          event.target.textContent = currentPlayer;
          if (checkWin()) {
            alert(`Player ${currentPlayer} wins!`);
            location.reload();
          } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      }

      function checkWin() {
        for (let x = 0; x < boardSize; x++) {
          for (let y = 0; y < boardSize; y++) {
            if (
              checkDirection(x, y, 1, 0) || // Check horizontally
              checkDirection(x, y, 0, 1) || // Check vertically
              checkDirection(x, y, 1, 1) || // Check diagonally to the left
              checkDirection(x, y, 1, -1) // Check diagonally to the right
            ) {
              return true;
            }
          }
        }
        return false;
      }

      function checkDirection(row, col, rowDir, colDir) {
        const player = gameBoard[row][col];
        if (player === "") return false;

        for (let x = 1; x < winCondition; x++) {
          const newRow = row + x * rowDir;
          const newCol = col + x * colDir;

          if (
            newRow < 0 ||
            newRow >= boardSize ||
            newCol < 0 ||
            newCol >= boardSize ||
            gameBoard[newRow][newCol] !== player
          ) {
            return false;
          }
        }

        return true;
      }