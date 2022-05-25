const createBoard = function () {
    let Board = document.createElement('div');
    Board.setAttribute('id', 'Board');
    document.body.appendChild(Board);
};

const createRow = function () {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row')
    document.body.appendChild(rowDiv);
    return rowDiv;
};

const createBox = function (row) {
    let boxDiv = document.createElement('div');
    boxDiv.style.width = '50px';
    boxDiv.style.height = '50px';
    boxDiv.classList.add('box');
    boxDiv.addEventListener("mouseover", function () {
        boxDiv.style.backgroundColor = 'black';
    })
    row.appendChild(boxDiv);
};


createBoard();

for (let i = 0; i < 8; i++) {
    let rowDiv = createRow();
    for (let j = 0; j < 8; j++) {
        createBox(rowDiv);
    };
};
