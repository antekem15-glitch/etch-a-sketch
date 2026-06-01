function gridMaker(num) {
    const grid = document.getElementById("container")
    let count = document.getElementById("container").children.length;
    const gap=0;
    const containerWidth = 624;
    const boxSize= (containerWidth - gap*num) / num;
    

    grid.style.width = containerWidth + "px";
    
    
    while (count < num*num) {
        const newBox = document.createElement("div");
        
        newBox.style.border = "0px solid black"
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

let currentColorMode="random";

document.getElementById("container").addEventListener("mouseover", function(event){
    if (event.target.classList.contains("pixel")) {
        if (currentColorMode === "random") {
        event.target.style.backgroundColor = getRandomColor();
        } else if (currentColorMode === "black") {
            event.target.style.backgroundColor = "black";
        } else if (currentColorMode === "red") {
            event.target.style.backgroundColor = "red";
        }

}});

gridMaker(16)

    const button = document.querySelector("#btn").addEventListener("click", function () {
    let input = prompt("Enter a number between 1 and 100", 16);
     if (!input) return;

    let size = Number(input);
    const grid = document.getElementById("container")
    let count = document.getElementById("container").children.length;
    while (size > 100) { 
        input = prompt ("Keep it below 100!")
        if(!input) return;
        size = Number(input)
        
        }

  
  
while (count > 0) {
    grid.removeChild(grid.lastChild)
    --count;
  }
  
  gridMaker(size)
        
    });

    document.getElementById("reset").addEventListener("click", function(){
        const allPixel = document.querySelectorAll(".pixel");
        allPixel.forEach (pixel => {
            pixel.style.backgroundColor = "White";
        })
    })

    document.getElementById("black").addEventListener("click", function() {
        currentColorMode = "black";})

    document.getElementById("red").addEventListener("click", function() {
        currentColorMode = "red";})

    document.getElementById("random").addEventListener("click", function() {
        currentColorMode = "random";})
