document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

// declare variables for all images
var egg = document.getElementById('egg');
// declare variables for headings
var h1 = document.createElement('h1');
var h2 = document.createElement('h2');
// declare variables for 'yes' and 'no' arrays
var choice = document.getElementsByClassName('choice');
var no = document.getElementById('no');
var yes = document.getElementById('yes');
// vars for when people press 'no'
var reject = document.getElementById('reject');
var close = document.getElementById('close');
var prompt = document.getElementById('prompt');
var responses = ["Go ahead, try it! You never know what could happen.",
  "Aw comon... that's no fun!", "Don't give up!", "There are few people that truly live. Press 'yes.'"]



for(var i = 0; i < choice.length; i++){

choice[i].addEventListener('mouseover', function(){
  this.className = 'grow';

});

choice[i].addEventListener('mouseout', function(){
  this.className = 'choice';
});
}

no.addEventListener('click', function noPressed(){
  var response = responses[Math.floor(Math.random()*responses.length)];
  prompt.innerHTML = response;
  reject.style.display = 'block';
});

close.addEventListener('click', function okayPressed(){
  reject.style.display = 'none';

})

});
