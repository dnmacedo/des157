document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

// declare variables for all images
var egg = document.getElementById('egg');
// declare variables for headings
var h1 = document.createElement('h1');
var h2 = document.createElement('h2');
// declare variables for 'yes' and 'no' arrays
var choice = document.getElementsByClassName('choice');

for(var i = 0; i < choice.length; i++){

choice[i].addEventListener('mouseover', function(){
  this.className = 'grow';

});

choice[i].addEventListener('mouseout', function(){
  this.className = '';
});
}



});
