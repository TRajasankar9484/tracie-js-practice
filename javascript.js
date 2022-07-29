document.body.appendChild(createBoard());

for (let i = 0; i < 8; i++) {
    let rowDiv = createRow();
    document.body.appendChild(rowDiv);

    for (let j = 0; j < 8; j++) {
        rowDiv.appendChild(createBox());
    };
};
