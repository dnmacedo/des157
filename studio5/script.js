// velocity.js

document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

var q = document.getElementById("question");
var rightA = document.getElementById("rightA");
var wrongA = document.getElementById("wrongA");



rightA.addEventListener("click", function(){

  for(var i = 0; i < 2; i++){
    Velocity(rightA,
      { y: "+=200" }
    );

    Velocity(rightA,
      "reverse"
    );

    console.log("rightA bounced");
  }

});

wrongA.addEventListener("click", function(){

    Velocity(wrongA,
    { x: "+=100" });
    Velocity(wrongA,
    { x: "-=200" });
    Velocity(wrongA,
    "reverse");
    console.log("wrongA bounced");


});

});
