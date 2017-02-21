// velocity.js

document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

var q = document.getElementById("question");
var rightA = document.getElementById("rightA");
var wrongA = document.getElementById("wrongA");

// function game(){
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

    nextQ();

  });

  wrongA.addEventListener("click", function(){

      Velocity(wrongA,
        { left: "+=50",
      }, {
        duration: 75}
      );

      Velocity(wrongA,
        { left: "-=100",
      }, {
        duration: 75}
      );

      Velocity(wrongA,
      "reverse");

      Velocity(wrongA,
        { left: "-=50",
      }, {
        duration: 75}
      );

        console.log("wrongA bounced");

  });



function nextQ(){
  Velocity(rightA,
    ("fadeOut"
  ), {delay: 350,
    duration: 350
  });

  Velocity(wrongA,
    ("fadeOut"
  ), {delay: 1000,
    duration: 350
  });

  Velocity(q,
    ("fadeOut"
  ), {delay: 1000,
    duration: 350
  });

  // x = x +1;
  //
  // game(x);
}

});
