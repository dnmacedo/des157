document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

var myMsg = document.getElementById("myMsg");
var story1 = document.getElementById("story1");
var story2 = document.getElementById("story2");
var story3 = document.getElementById("story3");
var story4 = document.getElementById("story4");
var story5 = document.getElementById("story5");
var story6 = document.getElementById("story6");

var storytitle = document.getElementById("storytitle");
var storyblurb = document.getElementById("storyblurb");

if (window.width >= 450) {
  alert("Please change the screen size to 'iPhone6' in the toggle device button to view this interface. (right click, inspect, phone/tablet symbol).");
}

// start read.html interactions

story1.addEventListener("click", function(){

  storytitle.innerHTML = "John starts the day...";

  storyblurb.innerHTML = "John is an aspiring actor. On his way to his audition for a big movie, he missed his bus! He thought, “No big deal, I’ve got plenty of time.” He decided to walk instead. Walking down the street he noticed a woman bent over picking up her belongings from the ground. John said hello and offered to help, but the woman said, “NO!” This was unexpected, but nonetheless, John happily continued walking. He saw a cat down an alley that soon followed him all the way to his destination.";

});

story2.addEventListener("click", function(){

  storytitle.innerHTML = "Adam sits in the library...";

  storyblurb.innerHTML = "Adam, a college student, was writing a paper quietly in his school library on a cloudy Tuesday afternoon. He sipped on his cup of coffee when something to the right caught his eye. He set his coffee down and slowly turned his head and saw something he didn't expect. A frizzy orange cat stared up at him with big green eyes, wafting its tail from left to right. Adam just stared back wondering if others noticed. The cat suddenly leaped onto the chair next to him and he decided to enjoy the unexpected company.";

});

story3.addEventListener("click", function(){

  storytitle.innerHTML = "John starts the day...";

  storyblurb.innerHTML = "John is an aspiring actor. On his way to his audition for a big movie, he missed his bus! He thought, “No big deal, I’ve got plenty of time.” He decided to walk instead. Walking down the street he noticed a woman bent over picking up her belongings from the ground. John said hello and offered to help, but the woman said, “NO!” This was unexpected, but nonetheless, John happily continued walking. He saw a cat down an alley that soon followed him all the way to his destination.";

});

story4.addEventListener("click", function(){

  storytitle.innerHTML = "John starts the day...";

  storyblurb.innerHTML = "John is an aspiring actor. On his way to his audition for a big movie, he missed his bus! He thought, “No big deal, I’ve got plenty of time.” He decided to walk instead. Walking down the street he noticed a woman bent over picking up her belongings from the ground. John said hello and offered to help, but the woman said, “NO!” This was unexpected, but nonetheless, John happily continued walking. He saw a cat down an alley that soon followed him all the way to his destination.";

});

story5.addEventListener("click", function(){

  storytitle.innerHTML = "John starts the day...";

  storyblurb.innerHTML = "John is an aspiring actor. On his way to his audition for a big movie, he missed his bus! He thought, “No big deal, I’ve got plenty of time.” He decided to walk instead. Walking down the street he noticed a woman bent over picking up her belongings from the ground. John said hello and offered to help, but the woman said, “NO!” This was unexpected, but nonetheless, John happily continued walking. He saw a cat down an alley that soon followed him all the way to his destination.";

});

story6.addEventListener("click", function(){

  storytitle.innerHTML = "John starts the day...";

  storyblurb.innerHTML = "John is an aspiring actor. On his way to his audition for a big movie, he missed his bus! He thought, “No big deal, I’ve got plenty of time.” He decided to walk instead. Walking down the street he noticed a woman bent over picking up her belongings from the ground. John said hello and offered to help, but the woman said, “NO!” This was unexpected, but nonetheless, John happily continued walking. He saw a cat down an alley that soon followed him all the way to his destination.";


});




});
