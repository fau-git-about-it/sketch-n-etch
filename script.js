let mainHeader = document.querySelector('#main-header');
   mainHeader.style.color = "blue";
   mainHeader.style.position = "center";
   mainHeader.style.textAlign = "center";
   mainHeader.style.margin = "5px 2px 0px auto"
   mainHeader.style.fontSize = "25px"


let body = document.querySelector('body');
let setSizeButton = document.querySelector('#setSizeButton');
   setSizeButton.textContent = "Choose your grid-size";
   setSizeButton.setAttribute = ('style', 'color:blue');
   setSizeButton.style.color = "blue";
   setSizeButton.style.position = "relative";
   setSizeButton.style.display = "inline";
   setSizeButton.style.top = "0px"

function generateRandomIntFromInterval(min, max)
{
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomElementName(grid) 
{
   let num = generateRandomIntFromInterval(1,100);
   grid += num.toString();
   return grid;
}

let gridContainer = document.querySelector('#grid-container'); 
function createGrids(numberOfGrids) 
{
   for (let boxes = 0; boxes < numberOfGrids; boxes++)
   {
      //let boxName = generateRandomElementName("grid");
      let anotherBox = document.createElement('div');
      //anotherBox.id = boxName;
      anotherBox.classList = "grid-container"
      anotherBox.style.borderStyle = "solid";
      //anotherBox.textContent = boxName;
      anotherBox.style.fontSize = "10px"
      gridContainer.appendChild(anotherBox);
   }
}
//createGrids(10)

function selectNumberOfGrids(e) 
{
   let gridContainer = document.getElementById('grid-container');
   let numberOfGrids = document.getElementById('setSize').value;
   let rowGridPixelSize = 940/numberOfGrids;
   let totalNumberOfBoxes = Math.pow(numberOfGrids,2);
   gridContainer.style.setProperty('grid-template-columns', `repeat(${numberOfGrids}, 1fr)`);
   gridContainer.style.setProperty('grid-template-rows', `repeat(${numberOfGrids}, ${rowGridPixelSize}px)`);
   createGrids(totalNumberOfBoxes);
}

/* function clearGrid() 
{
   let gridContainer = document.querySelectorAll('#grid-container');
   gridContainer.
} */

document.querySelector('#setSizeButton').addEventListener('click', selectNumberOfGrids);




   


   






