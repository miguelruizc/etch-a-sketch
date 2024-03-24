const DEFAULT_GRID_SIZE = 16; // 16*16 square grid

// Grid size button
let gridSize = DEFAULT_GRID_SIZE;
let gridSizeButton = document.querySelector(".gridSizeButton");

gridSizeButton.addEventListener("click", () => {
    let userInput = window.prompt("Enter number of squares per side (between 1 and 100): ");
    
    userInput = parseInt(userInput);

    if(isNaN(userInput) || userInput < 0){
        gridSize = DEFAULT_GRID_SIZE;
        removeGrid();
        generateGrid(gridSize);
        return;
    }
    else if(userInput > 100) {
        gridSize = 100;
        removeGrid();
        generateGrid(gridSize);
        return;
    }
    else {
        gridSize = userInput;
        removeGrid();
        generateGrid(gridSize);
        return;
    }
});

function generateGrid(size){
    // Container holding the grid 
    let containerDiv = document.querySelector(".container");

    // Iterate grid
    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size; j++)
        {
            // Create new gridDiv
            let newDiv = document.createElement("div");
            newDiv.classList.add("gridDiv");
            
            // Hover event listener
            newDiv.addEventListener("mouseover", function()
            {
                newDiv.style.backgroundColor= generateRandomHexColor();
            });

            // Append
            containerDiv.appendChild(newDiv);
        }
    }

    // Change CSS style for the new grid
    let elements = document.querySelectorAll(".gridDiv");
    elements.forEach(function(element){
        element.style.width = "calc(100% / " + size + " )";
        element.style.height = "calc(100% / " + size + " )";
    });
}

function removeGrid()
{
    // Removes all elements within "container" (if any)
    let containerDiv = document.querySelector(".container");
    
    while(containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

function generateRandomHexColor()
{
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = "#" + randomColor.padStart(6, "0");

    return randomColor;
}

generateGrid(gridSize);