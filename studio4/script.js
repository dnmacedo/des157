document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

// declare variables for all images
var egg = document.getElementById("egg");
// declare variables for headings
var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
// declare variables for 'yes' and 'no' arrays
var choice = document.getElementsByClassName("choice");
var no = document.getElementById("no");
var yes = document.getElementById("yes");
// vars for when people press 'no'
var reject = document.getElementById("reject");
var close = document.getElementById("close");
var prompt = document.getElementById("prompt");
var responses = ["Go ahead, try it! You never know what could happen.",
  "Aw comon... that's no fun!", "Don't give up!", "There are few people that truly live. Press 'yes.'"];
// declare variebles for when people say 'yes'
var game = document.getElementById("game");
//declare tip variebles
var crack =document.getElementById('crack');
var crackTip = document.getElementById('crackTip');
var breakEgg = document.getElementById('break');
var breakTip = document.getElementById('breakTip');
var scramble = document.getElementById('scramble');
var scrambleTip = document.getElementById('scrambleTip');
var cook = document.getElementById('cook');
var cookTip = document.getElementById('cookTip');


//loop if yes or no are hovered over
for(var i = 0; i < choice.length; i++){

choice[i].addEventListener("mouseover", function(){
  this.className = "grow";

});

choice[i].addEventListener("mouseout", function(){
  this.className = "choice";
});
}

// function if 'no' is clicked
no.addEventListener("click", function noPressed(){
  var response = responses[Math.floor(Math.random()*responses.length)];
  prompt.innerHTML = response;
  reject.style.display = "block";
});

// close the reject window
close.addEventListener("click", function okayPressed(){
  reject.style.display = "none";

});

yes.addEventListener("click", function yesPressed(){
  game.style.display = "block";
  console.log("yes was pressed");
});


// get the tips to show after 1s

crack.addEventListener('mouseover', function(){
  tipTimer = setTimeout(showCrackTip, 1000);
});

crack.addEventListener('mouseout', function(){
  clearTimeout(tipTimer);
  crackTip.style.opacity = 0;
});

function showCrackTip(){
  crackTip.style.opacity = 1;
  crackTip.style.transition = 'all .5s';
}

// break tip
breakEgg.addEventListener('mouseover', function(){
  tipTimer = setTimeout(showBreakTip, 1000);
});

breakEgg.addEventListener('mouseout', function(){
  clearTimeout(tipTimer);
  breakTip.style.opacity = 0;
});

function showBreakTip(){
  breakTip.style.opacity = 1;
  breakTip.style.transition = 'all .5s';
}

// scramble tip
scramble.addEventListener('mouseover', function(){
  tipTimer = setTimeout(showScrambleTip, 1000);
});

scramble.addEventListener('mouseout', function(){
  clearTimeout(tipTimer);
  scrambleTip.style.opacity = 0;
});

function showScrambleTip(){
  scrambleTip.style.opacity = 1;
  scrambleTip.style.transition = 'all .5s';
}

// cook tip
cook.addEventListener('mouseover', function(){
  tipTimer = setTimeout(showCookTip, 1000);
});

cook.addEventListener('mouseout', function(){
  clearTimeout(tipTimer);
  cookTip.style.opacity = 0;
});

function showCookTip(){
  cookTip.style.opacity = 1;
  cookTip.style.transition = 'all .5s';
}

// for(var i=0; i < elements.length; i++)
// {
//   elements[i].addEventListener("mouseover", function(){
//     tipId = document.getElementById(this.id + "Tip");
//
//     tipTimer = setTimeout(tipMsg, 1000);
//   });
//
//   elements[i].addEventListener("mouseout", function(){
//     clearTimeout(tipTimer);
//     tipId.style.opacity = 0;
//   });
// }
//
// function tipMsg(){
//   tipId.style.opacity = 1;
// }

// click objects to the steps


// end of js code.
});
