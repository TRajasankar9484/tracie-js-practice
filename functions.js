const createBoard = function () {
  let board = document.createElement('div');
  board.setAttribute('id', 'Board');
  return board;
};

const createRow = function () {
  let rowDiv = document.createElement('div');
  rowDiv.classList.add('row');
  return rowDiv;
};

const createBox = function () {
  let boxDiv = document.createElement('div');
  boxDiv.style.width = '50px';
  boxDiv.style.height = '50px';
  boxDiv.classList.add('box');
  boxDiv.addEventListener("mouseover", function () {
      boxDiv.style.backgroundColor = 'black';
  });
  return boxDiv;
};