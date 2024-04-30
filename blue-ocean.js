
 let isLit = false;

function setup() {
 createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0, 102, 204);
  
   orbitControl();
  lights();
  if (isLit === true) {
     spotLight(255, 0, 0, 0, 0, 100, 0, 0, -1, PI / 32);
  }
  
  fill(102, 178, 255)
  ellipse(100, 300, 100);
  ellipse(300, 100, 200)
  ellipse(140, 120, 90)
  ellipse(275, 310, 60)
  
  fill(0, 128, 255)
  ellipse(350, 140, 120)
  ellipse(50, 210, 120)
  square(20, 20, 80)
  square(290, 290, 80)
  
  fill(0, 51, 102)
  square(250, 210, 60)
  ellipse(20, 380, 80)
  ellipse(200, 60,70)
  square(10, 10, 40)
  
  fill(0, 0, 102)
  square(130, 200, 100)
  text('habesha', 200, 390)
  text('eskender', 20, 130)

}
