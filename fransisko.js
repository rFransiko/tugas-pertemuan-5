class Mover { 
   constructor(x,y){ 
     this.location = createVector(x, y); 
     this.velocity = createVector(random(-2,2), random(-2,2)) 
     this.acceleration = createVector(0,0); 
   }
   
   
   display(){ 
     noStroke(); 
     fill(0); 
     let r = random(25,50);
     ellipse(this.location.x, this.location.y, r, r); 
   } 
   
   update(){ 
     var mouse = createVector(mouseX, mouseY); 
     var dir = mouse.sub(this.location); 
     var topSpeed = 10 
     dir.normalize(); 
     dir.mult(0.5); 
     this.velocity.add(this.acceleration); 
     this.velocity.add(dir); 
     this.velocity.limit(topSpeed) 
     this.location.add(this.velocity);
   } 
   
    cekUjung(){ 
     if ( this.location.x > windowWidth ) { 
       this.location.x = 0; 
     } 
     else if (this.location.x < 0){ 
       this.location.x = windowWidth; 
     } 
    
     if ( this.location.y > windowHeight ) { 
       this.location.y = 0; 
     } 
     else if (this.location.y < 0){ 
       this.location.y = windowHeight; 
     } 
   } 
 }
 
 let movers = [];
 let mouse;
 function setup() {
   createCanvas(windowWidth, windowHeight);
   
   for (let i=0; i<5;i++){
     movers[i] = new Mover(random(windowWidth), random(windowHeight));   
   }
  
 }
 
 function draw() {
   background(128);
       background(128);
       noStroke();
       fill(128,0,128);
       ellipse(mouseX, mouseY, 20, 20);
       fill(0, 0, 0);
       ellipse(mouseX - 5, mouseY - 5, 6, 10);
       ellipse(mouseX + 5, mouseY - 5, 6, 10);
       ellipse(mouseX - 5, mouseY + 5, 6, 10);
       ellipse(mouseX + 5, mouseY + 5, 6, 10);
     for (let i = 0; i < 5; i++) {
         movers[i].cekUjung();
         movers[i].display();
         movers[i].update();
     }
   
   
 }