function gridMaker(num) {
    const grid = document.getElementById("container")
    let count = document.getElementById("container").children.length;
    const gap=2;
    const containerWidth = 624;
    const boxSize= (containerWidth - gap*num) / num;
    

    grid.style.width = containerWidth + "px";
    grid.innerHTML = "";
    
    while (count < num*num) {
        const newBox = document.createElement("div");
        
        newBox.style.border = "1px solid black"
        newBox.style.width = boxSize + "px";
        newBox.style.height = boxSize + "px";
        newBox.style.margin = "0 0px";
        newBox.style.borderRadius = "20px";
        grid.appendChild(newBox)
        count++;
        newBox.classList.add("pixel")
       

    }

}
function getRandomColor() {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`;


}


document.getElementById("container").addEventListener("mouseover", function(event){
    if (event.target.classList.contains("pixel")) {
        event.target.style.backgroundColor = getRandomColor();

}});

gridMaker(16)

const button = document.querySelector("button").addEventListener("click", function () {
   const input = prompt("Enter a number between 1 and 100", 16);
   if (!input) return;

    const size = Number(input);
    const grid = document.getElementById("container")
    let count = document.getElementById("container").children.length;

  while (count > 0) {
    grid.removeChild(grid.lastChild)
    --count;
  }
  
  gridMaker(size)
        
    });
