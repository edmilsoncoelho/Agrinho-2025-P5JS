let cor;
let circX;
let circY;

function setup() {
  createCanvas(800, 600);
  background(210, 220, 205);
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(20, 100))
  
  circX = [0, 0, 0, 0, 0];
  circY = [random(height), random(height), random(height), random(height), random(height)];
}

function draw() {
  
  stroke("black");
  fill(cor);
  
  for(let cont in circX){
    circle(circX[cont], circY[cont], 40);
    circX[cont] += random(0, 3);
    circY[cont] += random(-4,4);
    
    if(circX[cont] >= width){
      circX[cont] = 0;
      circY[cont] = random(height);
      cor = color(random(0, 255), random(0, 255), random(0, 255), random(20, 100));
    }
  }
  
}


 