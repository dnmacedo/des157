var timeAccel=1.0;
var increment=1.0;


function setup() {

  var myCanvas = createCanvas(800, 250);

  myCanvas.parent("mySketch");

  background(0);
}


function draw() {

  fill(0);
  ellipseMode(CENTER);
  strokeWeight(3);

    //line(pmouseX,pmouseY,mouseX,mouseY);
     if(abs(mouseX-pmouseX)>10)
     {
     stroke(abs(mouseX-2*pmouseX),abs(mouseY-2*pmouseY),0);
     ellipse(mouseX,mouseY,50,50);
  }
    else
  {
     stroke(abs(mouseX-2*pmouseX),0,abs(mouseY-2*pmouseY));
     ellipse(mouseX,mouseY,50,50);
  }
}
