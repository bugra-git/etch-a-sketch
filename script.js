function makeGrid(num) { 
    const divGrid = document.querySelector("#containerGrid"); 
    divGrid.innerHTML = ""; 

    const btn = document.createElement("button"); 
    btn.textContent = "Enter a number for square per row/column"; 
    btn.style.fontSize = "1em"; 
    btn.style.fontWeight = "bold"; 
    btn.style.padding = "1vh"; 
    divGrid.appendChild(btn); 

    function btnclick() { 
        entry = +prompt("maximum:100",""); 
        if (Number.isInteger(entry)&&entry>0&&entry<=100) { 
            makeGrid(entry) 
        } else makeGrid(16); 
    } 
    btn.addEventListener("click",btnclick);

    let divRow; 
    for (i=1;i<=num;i++) { divRow = document.createElement("div"); 
        divRow.classList.add("row"); 
        divRow.style.display = "flex"; 
        divGrid.appendChild(divRow); 
    } 
    
    const rows = document.querySelectorAll(".row"); 
    let square; 
    rows.forEach((row) => { 
        for (i=1;i<=num;i++) { 
            square = document.createElement("div"); 
            square.classList.add("square"); 
            square.style.flex = "1"; 
            square.style.border = "solid 1px black"; 
            row.appendChild(square); 
        } 
    }) 

    function randomColor() {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const color = `rgb(${r},${g},${b})`;
        return color;
    }
    
    const squares = document.querySelectorAll(".square"); 
    squares.forEach((square) => { 
        square.addEventListener("mouseenter",(e)=>{ 
            e.target.style.backgroundColor = randomColor(); 
        }) 
    }) 

    const btnHeight = getComputedStyle(btn).height;
    document.documentElement.style.setProperty("--btn-height", btnHeight);
} 

makeGrid(16);