const divGrid = document.querySelector("#containerGrid");
let divRow;
for (i=1;i<=16;i++) {
    divRow = document.createElement("div");
    divRow.classList.add("row");
    divRow.style.display = "flex";
    divGrid.appendChild(divRow);
}

const rows = document.querySelectorAll(".row");
let square;
rows.forEach((row) => {
    for (i=1;i<=16;i++) {
        square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = "1";
        square.style.border = "solid 1px black";
        row.appendChild(square);
    }   
    const computedWidth = getComputedStyle(square).width;
    row.style.height = computedWidth;
})