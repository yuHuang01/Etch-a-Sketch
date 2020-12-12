let gridNum = 16;
const board = document.getElementById("board");
let choice = "black"
let noPenCounter = 0;
let storedColor = "";

//Board
function createBoard(gridNum){
    let templateArea = gridNum * gridNum;
    board.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    for(i = 1; i <= templateArea; i++){
        let pixel = document.createElement("div");
        pixel.addEventListener("click", noPen);
        pixel.addEventListener("mouseenter", Paint);
        pixel.className = "pixels";
        board.appendChild(pixel);
    }
}

createBoard(gridNum)

function Paint(e){
    let targetedDiv = e.target;
    switch(choice){
        case "black":
            targetedDiv.style.backgroundColor = "black";
            break;
        case "rainbow":
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            break;
        default:
            targetedDiv.style.backgroundColor = "white";
            break;
    }
}



function noPen(){
    let gridPixels = document.getElementsByClassName("pixels");
    noPenCounter += 1;
    if(noPenCounter % 2 === 1){
        storedColor = choice;
        for(i = 0; i < gridPixels.length; i++){
            gridPixels[i].removeEventListener("mouseenter", Paint)
        }
    }
    else {
        choice = storedColor;
        storedColor = "nothing";
        for(i = 0; i < gridPixels.length; i++){
            gridPixels[i].addEventListener("mouseenter", Paint);
    };
}
}



//Black button
const blackBtn = document.getElementById("blackBtn")
blackBtn.addEventListener('click', BlackClicked)

function BlackClicked(){
    storedColor = "black";
    choice = "black";
}


//Rainbow button
const rainbowBtn = document.getElementById("rainbowBtn")
rainbowBtn.addEventListener("click", RainbowClicked)

function RainbowClicked(){
    storedColor = "rainbow";
    choice = "rainbow";
}


//Erase button
const eraseBtn = document.getElementById("eraseBtn")
eraseBtn.addEventListener("click", EraseClicked)

function EraseClicked(){
    storedColor = "erase";
    choice = "erase";
}



//Clear button
const clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener("click", ClearClicked)

function ClearClicked(){
    let gridPixels = document.getElementsByClassName("pixels");
    for(let i = 0; i < gridPixels.length; i++){
        gridPixels[i].style.backgroundColor = "white";
    }
}


//PixelSelection
let select = document.getElementById("select")
for(let i = 16; i <= 100; i++){
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option)
}
select.addEventListener("change", changePixel)
function changePixel(){
    gridNum = select.value;
    createBoard(gridNum)
}
