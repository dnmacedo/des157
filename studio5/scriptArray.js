// velocity.js

document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

var q = document.getElementsByClassName("question");
var rightA = document.getElementsByClassName("rightA");
var wrongA = document.getElementsByClassName("wrongA");
var x = 0;

function game(x){
  rightA[x].addEventListener("click", function(){

    for(var i = 0; i < 2; i++){
      Velocity(rightA[x],
        { top: "-=50",
      }, {
        duration: 150,
      });

      Velocity(rightA[x],
        "reverse"
      );

      console.log("rightA bounced");
    }

    nextQ();

  });

  wrongA[x].addEventListener("click", function(){

      Velocity(wrongA[x],
        { left: "+=50",
      }, {
        duration: 100}
      );

      Velocity(wrongA[x],
        { left: "-=100",
      }, {
        duration: 100}
      );

      Velocity(wrongA[x],
      "reverse");

      Velocity(wrongA[x],
        { left: "-=50",
      }, {
        duration: 100}
      );

        console.log("wrongA bounced");

  });

}

function nextQ(){
  Velocity(rightA[x],
    ("fadeOut"
  ), {delay: 350,
    duration: 350
  });

  Velocity(wrongA[x],
    ("fadeOut"
  ), {delay: 1000,
    duration: 350
  });

  Velocity(q[x],
    ("fadeOut"
  ), {delay: 1000,
    duration: 350
  });

  x = x +1;

  game(x);
}

});
