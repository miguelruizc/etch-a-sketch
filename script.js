const GRID_SIZE = 16; // 16*16 square grid

let containerDiv = document.querySelector(".container");

for(let i = 0; i < GRID_SIZE; i++)
{
    for(let j = 0; j < GRID_SIZE; j++)
    {
        let newDiv = document.createElement("div");
    
        newDiv.classList.add("gridDiv");

        containerDiv.appendChild(newDiv);
    }
}
