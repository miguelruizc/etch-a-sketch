const GRID_SIZE = 16; // 16*16 square grid

// Container holding the grid 
let containerDiv = document.querySelector(".container");

// Iterate all grid size
for(let i = 0; i < GRID_SIZE; i++)
{
    for(let j = 0; j < GRID_SIZE; j++)
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
