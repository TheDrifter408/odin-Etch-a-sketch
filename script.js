const container = document.querySelector('#container');

const button = document.createElement("button");
button.textContent = "New Grid";
container.appendChild(button);
button.addEventListener('click',(e) => {
    let input = prompt("Number of Squares for each side: ");
    while(isNaN(Number(input)) || Number(input) > 100 ){
        input = prompt("Number cannot be greater than 100: ")
    }
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    container.appendChild(button);
    createGrid(input);
})

//function to create a container of row of 16 cells
function Rows(columns){
    const row = document.createElement('div');
    row.setAttribute('id','row');
    for(let i=0;i<columns;i++){
        const cell = document.createElement('div');
        cell.addEventListener('mouseenter',(e) => {
            e.target.style.backgroundColor = 'lightblue';
        })
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    return row;
}

function createGrid(rows = 16){
    for(let i=0;i<rows;i++){
       container.appendChild(Rows(rows)); 
    }
}

createGrid();