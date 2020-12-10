let gridNum = 16;
const board = document.getElementById("board");
let paintColor = "white";
let choice = "black"
let randomColor = "blue"
let randomNum = "1";

//Board
function createBoard(gridNum){
    let templateArea = gridNum * gridNum;
    board.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    for(i = 1; i <= templateArea; i++){
        let pixel = document.createElement("div");
        pixel.addEventListener("mouseenter", Paint)
        pixel.style.backgroundColor = "white";
        pixel.className = "pixels";
        board.appendChild(pixel);
    }
}

createBoard(gridNum)

function eventTest(e){
    console.log(e)
}

function ranNum(){
     randomNum = Math.floor(Math.random * 255);
}
console.log(ranNum())
function Paint(e){
    let targetedDiv = e.target;
    switch(choice){
        case "black":
            targetedDiv.style.backgroundColor = "black";
            break;
        case "rainbow":
            ranNum()
            console.log(randomNum);
            e.target.style.backgroundColor = `rgb(${20}, ${30}, ${40})`;
            break;
        default:
            targetedDiv.style.backgroundColor = "white";
            break;
    }
}

//Black button
const blackBtn = document.getElementById("blackBtn")
blackBtn.addEventListener('click', BlackClicked)

function BlackClicked(){
    choice = "black"
}


//Rainbow button
const rainbowBtn = document.getElementById("rainbowBtn")
rainbowBtn.addEventListener("click", RainbowClicked)

function RainbowClicked(){
    choice = "rainbow"
}


//Erase button
const eraseBtn = document.getElementById("eraseBtn")
eraseBtn.addEventListener("click", EraseClicked)

function EraseClicked(){
    choice = "erase"
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
