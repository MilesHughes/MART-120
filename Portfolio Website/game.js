var boatX = 100;  
var boatY = 100;  

var w = 87;  
var s = 83;  
var a = 65;  
var d = 68;  

var shapeX = 30;  
var shapeY = 50;  

var shapeXs = [];  
var shapeYs = [];  
var diameters = [];  

var shapeXSpeeds = [];  
var shapeYSpeeds = [];  

var mouseshapeX = 0;  
var mouseshapeY = 0; 


var obstacleXs = [100, 200, 300, 400, 500];  
var obstacleYs = [100, 150, 200, 250, 300]; 
var obstacleXSpeeds = [2, -3, 4, -2, 3];   
var obstacleYSpeeds = [3, 2, -4, 3, -2];  
var obstacleSizes = [30, 40, 50, 60, 70]; 
var obstacleColors = [  
    [0, 0, 0],  
    [128, 128, 128],  
    [211, 211, 211], 
    [169, 169, 169],   
    [96, 130, 182], 
];  

function setup() {  
    createCanvas(800, 600);  
    // Get a random speed when it first starts  
    for (var i = 0; i < 50; i++) {  
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);  
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);  
        shapeXs[i] = getRandomNumber(800);  
        shapeYs[i] = getRandomNumber(600);  
        diameters[i] = getRandomNumber(30);  
    }  
}  

function draw() {  
    background(0, 119, 190);  
    stroke(0);  
    fill(0);  

    createBorders();  

    // Exit message  
    exit();  

    // Boat  
    drawPlayer();  

    // Keys  
    movePlayer();  

    // Obstacles  
    createObstacles();  

    // Move obstacles  
    moveObstacles();  

    // Check if obstacles are out of bounds  
    obstaclesComeback();  

    // See if boat has exited  
    victoryMessage();  

    // Mouse makes object  
    drawObject();  
}  

function createObstacles() {  
    for (var i = 0; i < obstacleXs.length; i++) {  
        fill(obstacleColors[i][0], obstacleColors[i][1], obstacleColors[i][2]); //color for ech obstacle 
        circle(obstacleXs[i], obstacleYs[i], obstacleSizes[i]); // size for each obstcle 
    }  
}  

function moveObstacles() {  
    for (var i = 0; i < obstacleXs.length; i++) {  
        if (Math.random() < 0.01) {  
            if (Math.random() < 0.5) {  
                obstacleXSpeeds[i] = Math.floor(Math.random() * 5) + 1;  
                obstacleYSpeeds[i] = Math.floor(Math.random() * 5) + 1;  
            } else {  
                obstacleXSpeeds[i] = -(Math.floor(Math.random() * 5) + 1);  
                obstacleYSpeeds[i] = -(Math.floor(Math.random() * 5) + 1);  
            }  
        }  

          
        obstacleXs[i] += obstacleXSpeeds[i];  
        obstacleYs[i] += obstacleYSpeeds[i];  
    }  
}  

function obstaclesComeback() {  
    for (var i = 0; i < obstacleXs.length; i++) {  
        if (obstacleXs[i] > width) {  
            obstacleXs[i] = 0;  
        }  
        if (obstacleXs[i] < 0) {  
            obstacleXs[i] = width;  
        }  
        if (obstacleYs[i] > height) {  
            obstacleYs[i] = 0;  
        }  
        if (obstacleYs[i] < 0) {  
            obstacleYs[i] = height;  
        }  
    }  
}  

function victoryMessage() {  
    if (boatX > width - 10 && boatY > height - 50) {  
        fill(0);  
        stroke(5);  
        textSize(26);  
        text("LAND HO!", width / 2 - 50, height / 2 - 50);  
    }  
}  

function exit() {  
    textSize(16);  
    text("LAND", width - 60, height - 50);  
}  

function drawObject() {  
    fill(0);  
    rect(mouseshapeX, mouseshapeY, 30, 30);  
}  

function mousePressed() {  
    mouseshapeX = mouseX;  
    mouseshapeY = mouseY;  
}  

function movePlayer() {  
    if (keyIsDown(w)) {  
        boatY -= 7;  
    }  
    if (keyIsDown(s)) {  
        boatY += 7;  
    }  
    if (keyIsDown(a)) {  
        boatX -= 7;  
    }  
    if (keyIsDown(d)) {  
        boatX += 7;  
    }  
}  

function drawPlayer() {  
    fill(139, 69, 19);  
    rect(boatX, boatY, 30, 15);  
}  

function createBorders() {  
    rect(0, 0, width, 10);  
    // left border  
    rect(0, 0, 10, height);  
    // bottom border  
    rect(0, height - 10, width, 10);  
    // right upper border  
    rect(width - 10, 0, 10, height - 50);  
}  


function getRandomNumber(max) {  
    return Math.floor(Math.random() * max);  
}  