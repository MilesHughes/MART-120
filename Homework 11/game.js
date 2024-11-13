var boatX = 100;  
var boatY = 100;  

var w = 87;   
var s = 83;  
var a = 65;  
var d = 68;  

var enemyX = 30;  
var enemyY = 50;  
var enemyXspeed;  
var enemyYspeed;  

var enemy2X = 200;  
var enemy2Y = 150;  
var enemy2XSpeed;  
var enemy2YSpeed;  

var mouseshapeX;  
var mouseshapeY;  

function setup() {  
    createCanvas(800, 600);  
    // get a random speed when it first starts  
    enemyXspeed = Math.floor(Math.random() * 5) + 1;  
    enemyYspeed = Math.floor(Math.random() * 5) + 1;  
    enemy2XSpeed = Math.floor(Math.random() * 5) + 1;  
    enemy2YSpeed = Math.floor(Math.random() * 5) + 1;  
}  

function draw() {  
    background(0, 119, 190);  
    stroke(0);  
    fill(0);  
    // top border  
    rect(0, 0, width, 10);  
    // left border  
    rect(0, 0, 10, height);  
    // bottom border  
    rect(0, height - 10, width, 10);  
    // right upper border  
    rect(width - 10, 0, 10, height - 50);  

    // exit message  
    textSize(16);  
    text("LAND", width - 60, height - 50);  

    // boat  
    fill(139, 69, 19);  
    rect(boatX, boatY, 30, 15);  

    // keys  
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

    // enemy  
    fill(50);   
    circle(enemyX, enemyY, 15);  

    // random speed 
    if (Math.random() < 0.01) {  
        if (Math.random() < 0.5) {  
            enemyXspeed = Math.floor(Math.random() * 5) + 1;  
            enemyYspeed = Math.floor(Math.random() * 5) + 1;  
        } else {  
            enemyXspeed = -(Math.floor(Math.random() * 5) + 1);  
            enemyYspeed = -(Math.floor(Math.random() * 5) + 1);  
        }  
    }  

    // move the enemy  
    enemyX += enemyXspeed;  
    enemyY += enemyYspeed;  

    // enemy 2  
    fill(50);   
    circle(enemy2X, enemy2Y, 30);   

   //random speed 
    if (Math.random() < 0.01) {  
        if (Math.random() < 0.5) {  
            enemy2XSpeed = Math.floor(Math.random() * 5) + 1;  
            enemy2YSpeed = Math.floor(Math.random() * 5) + 1;  
        } else {  
            enemy2XSpeed = -(Math.floor(Math.random() * 5) + 1);  
            enemy2YSpeed = -(Math.floor(Math.random() * 5) + 1);  
        }  
    }  

    enemy2X += enemy2XSpeed;  
    enemy2Y += enemy2YSpeed;  

    // check if enemy is out of bounds  
    if (enemyX > width) {  
        enemyX = 0;  
    }  
    if (enemyX < 0) {  
        enemyX = width;  
    }  
    if (enemyY > height) {  
        enemyY = 0;  
    }  
    if (enemyY < 0) {  
        enemyY = height;  
    }  

    if (enemy2X > width) {  
        enemy2X = 0;  
    }  
    if (enemy2X < 0) {  
        enemy2X = width;  
    }  
    if (enemy2Y > height) {  
        enemy2Y = 0;  
    }  
    if (enemy2Y < 0) {  
        enemy2Y = height;  
    }  

    // see if boat has exited  
    if (boatX > width - 10 && boatY > height - 50) {  
        fill(0);  
        stroke(5);  
        textSize(26);  
        text("LAND HO!", width / 2 - 50, height / 2 - 50);  
    }  

    fill(0);  
    rect(mouseshapeX, mouseshapeY, 30);  
}  