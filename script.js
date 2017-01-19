function setup() {

   var myCanvas = createCanvas(800, 250);

    myCanvas.parent('mySketch');
}

function draw() {

       fill(0);
       stroke(200);

       textSize(30);
       fill(200, 200, 200);
       text("press for a party", 300, 125);

       if(mouseIsPressed) {

       fill(random(130, 255), random(130, 255), random(130,255));
       ellipse(random(0, 800), random(0, 250), 20, 20);


       }
}
