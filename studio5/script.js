// velocity.js

document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

var q = document.getElementById("question");
var rightA = document.getElementById("rightA");
var wrongA = document.getElementById("wrongA");



rightA.addEventListener("click", function(){

  for(var i = 0; i < 2; i++){
    Velocity(rightA,
      { top: "-=50",
    }, {
      duration: 150,
    });

    Velocity(rightA,
      "reverse"
    );

    console.log("rightA bounced");
  }

});

wrongA.addEventListener("click", function(){

    Velocity(wrongA,
      { left: "+=50",
    }, {
      duration: 100}
    );

    Velocity(wrongA,
      { left: "-=100",
    }, {
      duration: 100}
    );

    Velocity(wrongA,
    "reverse");

    Velocity(wrongA,
      { left: "-=50",
    }, {
      duration: 100}
    );

      console.log("wrongA bounced");


});

});
