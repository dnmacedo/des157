var w=700;
var h=300;
var frameCnt=0;
var timeAccel=1.0;
var increment=1.0;


function setup() {

  var myCanvas = createCanvas(800, 250);

  myCanvas.parent('mySketch');

  background(0);
}


function draw() {
  frameCnt=frameCnt + 1;

  fill(255);
  ellipseMode(CENTER);
  strokeWeight(3);
  stroke(abs(mouseX-2*pmouseX),abs(mouseY-2*pmouseY),0);
  ellipse(mouseX,mouseY,50,50);
  //line(pmouseX,pmouseY,mouseX,mouseY);
   if(abs(mouseX-pmouseX)>10)
   {
   stroke(abs(mouseX-2*pmouseX),abs(mouseY-2*pmouseY),0);
   increment=increment*1.01;
   timeAccel=timeAccel+increment;
   ellipse(mouseX,mouseY,50,50);
}
  else
{
   stroke(abs(mouseX-2*pmouseX),0,abs(mouseY-2*pmouseY));
  increment=increment*1.01;
   timeAccel=timeAccel+increment;
   ellipse(mouseX,mouseY,50,50);
}
}