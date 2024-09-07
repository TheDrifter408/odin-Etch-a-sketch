# Odin Project: Etch A Sketch
For this project, since the grid has to be produced using Javascript I made two functions `Rows()` and `createGrid()`.

### Rows() function:
```javascript
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
```
This function returns an `HTMLDivElement` containing 16 divs, each being a cell.

```javascript
function createGrid(rows = 16){
    for(let i=0;i<rows;i++){
       container.appendChild(Rows(rows)); 
    }
}
```
This function is to add the however many squares the user inputs.  
