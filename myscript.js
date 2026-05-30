


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
        

    }

}
gridMaker()



