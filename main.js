var mouseEvent="empty"
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = document.getElementById("color");
lineWidth = document.getElementById("lineWidth");
currentX = "";
currentY = "";
lastX = "";
lastY = "";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("touchStart", my_touchStart);
function my_touchStart(e){
    lastX = e.touches[0].clientX - canvas.offsetLeft;
    lastY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    currentX=e.clientX - canvas.offsetLeft;
    currentY=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color.value;
        ctx.lineWidth=lineWidth.value;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }

    lastX = currentX;
    lastY = currentY;

}

canvas.addEventListener("touchMove", my_touchmove);
function my_touchmove(e){

    currentX= e.touches[0].clientX - canvas.offsetLeft;
    currentY= e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color.value;
    ctx.lineWidth=lineWidth.value;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    lastX = currentX;
    lastY = currentY;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}