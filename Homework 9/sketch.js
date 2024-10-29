function setup() {  
    createCanvas(400, 400);  
    background(220);  
}  

function draw() {
    
    background(0, 255, 0);
    textSize(22)
    text("ME", 190,30);
    
    fill(255, 224, 189);  
    ellipse(200, 200, 250, 300);  

     
    fill(255, 255, 255);  
    ellipse(165, 180, 40, 20);  
    ellipse(235, 180, 40, 20);
    
    fill(0, 0, 255);  
    rect(155, 175, 10, 10);   
    rect(225, 175, 10, 10);  

    stroke(0);   
    strokeWeight(5);  
    point(155 + 5, 175 + 5); 
    point(225 + 5, 175 + 5); 
    
    stroke(0);  
    strokeWeight(2);  
    line(175, 250, 225, 250);
      

    fill(165, 42, 42);
    stroke(165, 42, 42);  
    triangle(100, 120, 150, 50, 200, 120);   
    triangle(150, 120, 200, 50, 250, 120); 
    triangle(200, 120, 250, 50, 300, 120);
    
    fill(255, 224, 189); 
    stroke(0); 
    triangle(190, 200, 210, 200, 200, 220);

    fill(0);
    strokeWeight(1);  
    textSize(16); 
    text("Miles Hughes", 10, 390);

    stroke(0);  
}  