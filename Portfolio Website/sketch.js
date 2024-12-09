var eyeMovement = 0;  
var eyeSpeed = 1;  

var nosePosition = { x: 190, y: 200 };  
var noseSpeed = { x: 0.7, y: 0.3 };  

var mouthMovement = 0;  
var mouthSpeed = 0.5;  

var textSizeValue = 22;  
var textSizeIncreasing = true;  

function setup() {  
    createCanvas(400, 400);  
}  

function draw() {  
    background(0, 255, 0);  

    // Text size  
    animateTextSize();  
    textSize(textSizeValue);  
    text("ME", 190, 30);  

    // Head  
    fill(255, 224, 189);  
    ellipse(200, 200, 250, 300);  

    // Eyes  
    animateEyes();  
    fill(255);  
    ellipse(165 + eyeMovement, 180, 40, 20);  
    ellipse(235 - eyeMovement, 180, 40, 20);  

    fill(0, 0, 255);  
    rect(155 + eyeMovement, 175, 10, 10);  
    rect(225 - eyeMovement, 175, 10, 10);  

    stroke(0);  
    strokeWeight(5);  
    point(160 + eyeMovement, 180);  
    point(230 - eyeMovement, 180);  

    // Mouth  
    animateMouth();  
    strokeWeight(2);  
    line(175, 250 + mouthMovement, 225, 250 + mouthMovement);  

    // Nose  
    animateNose();  
    fill(255, 224, 189);  
    stroke(0);  
    triangle(nosePosition.x, nosePosition.y, nosePosition.x + 20, nosePosition.y, nosePosition.x + 10, nosePosition.y + 20);  

    // Brows (Static)  
    fill(165, 42, 42);  
    stroke(165, 42, 42);  
    triangle(100, 120, 150, 50, 200, 120);  
    triangle(200, 120, 250, 50, 300, 120);  

    fill(0);  
    strokeWeight(1);  
    textSize(16);  
    text("Miles Hughes", 10, 390);  
}  

// Animations  

function animateEyes() {  
    eyeMovement += eyeSpeed;  
    if (eyeMovement > 20 || eyeMovement < -20) {  
        eyeSpeed *= -1;  
    }  
}  

function animateNose() {  
    nosePosition.x += noseSpeed.x;  
    nosePosition.y += noseSpeed.y;  
    if (nosePosition.x > 210 || nosePosition.x < 190) {  
        noseSpeed.x *= -1;  
    }  
    if (nosePosition.y > 220 || nosePosition.y < 200) {  
        noseSpeed.y *= -1;  
    }  
}  

function animateMouth() {  
    mouthMovement += mouthSpeed;  
    if (mouthMovement > 5 || mouthMovement < -5) {  
        mouthSpeed *= -1;  
    }  
}  

function animateTextSize() {  
    if (textSizeIncreasing) {  
        textSizeValue += 0.2;  
        if (textSizeValue > 32) {  
            textSizeIncreasing = false;  
        }  
    } else {  
        textSizeValue -= 0.2;  
        if (textSizeValue < 22) {  
            textSizeIncreasing = true;  
        }  
    }  
}  