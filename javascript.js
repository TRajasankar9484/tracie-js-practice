// creates new div element and names it 'Board'
let Board = document.createElement('div');
Board.setAttribute('id', 'Board');
document.body.appendChild(Board);

// Inserts 8 x 8 rows of divs inside of 'Board'
for (let i = 0; i < 8; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row')
    document.body.appendChild(rowDiv);
    for (let j = 0; j < 8; j++) {
        let boxDiv = document.createElement('div');
        boxDiv.style.width = '50px';
        boxDiv.style.height = '50px';
        boxDiv.classList.add('box');
        boxDiv.addEventListener("mouseover", function () {
            boxDiv.style.backgroundColor = 'black';
        })
        rowDiv.appendChild(boxDiv);

    }
}
