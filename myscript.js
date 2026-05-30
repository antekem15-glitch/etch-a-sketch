


function gridMaker(num) {
    const grid = document.getElementById("container")
    
    let count = document.getElementById("container").children.length;
    
    while (count < 256) {
        const newBox = document.createElement("div");
        newBox.style.border = "2px solid black"
        newBox.style.width = "35px";
        newBox.style.height = "35px";
        newBox.style.margin = "0 0px";
        grid.appendChild(newBox)
        count = document.getElementById("container").children.length;
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

gridMaker()



