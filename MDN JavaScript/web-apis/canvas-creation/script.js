const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const heigh = (canvas.height = window.innerHeight);
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, heigh);

ctx.fillStyle = "rgb(255, 0 ,0";
ctx.fillRect(70, 70, 150, 150);

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 100, 200, 200);

ctx.fillStyle = "rgb(255 0 255 / 90%)";
ctx.fillRect(150, 150, 250, 250);

ctx.fillStyle = "rgb(0 150 150 / 80%)";
ctx.fillRect(200, 200, 300, 300);

ctx.fillStyle = "rgb(70 70 70 / 75%)";
ctx.fillRect(250, 250, 350, 350);

ctx.strokeStyle = "rgb(255, 255, 255)";
// ctx.lineWidth = 10;
ctx.strokeRect(300, 300, 400, 400);
