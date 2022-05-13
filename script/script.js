// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
    // con difficoltà 1 => tra 1 e 100
    // con difficoltà 2 => tra 1 e 81
    // con difficoltà 3 => tra 1 e 49
    // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
    

    const grid = document.getElementById('grid');

// Difficoltà 1: tra 1 e 100

    const columns = 10;
    const rows = 10;

    const totalCells = columns * rows;


    for (let i = 1; i <= totalCells; i++){

        const cell = createCell();
        

        cell.innerText = i;
        cell.id = i;

        cell.addEventListener('click', function(){

                cell.classList.toggle('bg-blue');

            }
        );

        grid.appendChild(cell);

        console.log(cell);
        
    }


    function createCell() {

        const item = document.createElement('div');

        item.classList.add('cell');

        return item;
    }