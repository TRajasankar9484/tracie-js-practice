alert("hey!");

// creates new div element and names it 'Board'
let Board = document.createElement('div');
Board.setAttribute('id', 'Board');
document.body.appendChild(Board);

for (let i = 0; i < 10; i++) {
    let innerDiv = document.createElement('div');
    innerDiv.style.width = '50px';
    innerDiv.style.height = '50px';
    Board.appendChild(innerDiv);
}
