let playerX = [];
let playerO = [];
let winningFormula = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];
let chances = 9;



function writeXorZero(id) {
    if (chances % 2 != 0) {
        playerX.push(Number(id));
        document.getElementById(id).innerHTML += `<p class="card-text">X</p>`;
    } else {
        playerO.push(Number(id));
        document.getElementById(id).innerHTML += `<p class="card-text">0</p>`;
    }
    --chances;
    verifyResult();
}

function verifyResult() {
    if (chances < 5) {
        for (let i = 0; i < 8; ++i) {
            let x = 0;
            let o = 0;
            for (let j = 0; j < 3; ++j) {
                if (playerX.indexOf(winningFormula[i][j]) > -1) {
                    ++x;
                }
                if (playerO.indexOf(winningFormula[i][j]) > -1) {
                    ++o;
                }
            }
            if (x == 3) {
                board.innerHTML = `PlayerX WON! <br> <button type="button" class="btn btn-danger" onclick="history.go(0)">Play again</button>`;
            } else if (o == 3) {
                board.innerHTML = `PlayerO WON! <br> <button type="button" class="btn btn-danger" onclick="history.go(0)">Play again</button>`;
            }
        }
    }
    if (chances == 0) {
        board.innerHTML = `NO WINNER <br><button type="button" class="btn btn-danger" onclick="history.go(0)">Play again</button>`;
    }
}     