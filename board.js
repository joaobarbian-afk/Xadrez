export function createBoard(container){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var tsw = (w > h) ? h : w;
    var sw = (tsw - 16)/8;

    for(let n=0;n<64;n++){
        let square = document.createElement("div");
        square.classList.add("square","s"+n);
        square.style.height = sw+'px';
        square.style.width = sw+'px';
        square.style.top = 7+(h-tsw)/2+sw*(Math.floor(n/8))+'px';
        square.style.left = 7+(w-tsw)/2+sw*(n%8)+'px';
        container.appendChild(square);
    }
}