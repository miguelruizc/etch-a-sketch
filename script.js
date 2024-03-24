const DEFAULT_GRID_SIZE = 16; // 16*16 square grid

// Grid size button
let gridSize = DEFAULT_GRID_SIZE;
let gridSizeButton = document.querySelector(".gridSizeButton");

gridSizeButton.addEventListener("click", () => {
    let userInput = window.prompt("Enter number of squares per side: ");
    
    userInput = parseInt(userInput);

    if(isNaN(userInput) || userInput < 0){
        gridSize = DEFAULT_GRID_SIZE;
        console.log(gridSize);
        return;
    }
    else if(userInput > 100) {
        gridSize = 100;
        console.log(gridSize);
        return;
    }
    else {
        gridSize = userInput;
        console.log(gridSize);
        return;
    }
});

// Container holding the grid 
let containerDiv = document.querySelector(".container");

// Iterate grid
for(let i = 0; i < DEFAULT_GRID_SIZE; i++)
{
    for(let j = 0; j < DEFAULT_GRID_SIZE; j++)
    {
        // Create new gridDiv
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridDiv");
        
        // Hover event listener
        newDiv.addEventListener("mouseover", function()
        {
            newDiv.style.backgroundColor="green";
        });

        // Append
        containerDiv.appendChild(newDiv);

    
    }
}
