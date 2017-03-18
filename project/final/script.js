document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

// declare pages

var intro = document.getElementById("intro");
var introGo = document.getElementById("introGo");
var login = document.getElementById("login");
var chooseLevel = document.getElementById("chooseLevel");
var levelGo = document.getElementById("levelGo");
var homepage = document.getElementById("homepage");
var info = document.getElementById("info");
var information = document.getElementById("information");

intro.style.display="block";
// homepage.style.display="block";

var myMsg = document.getElementById("myMsg");
var story1 = document.getElementById("story1");
var story2 = document.getElementById("story2");
var story3 = document.getElementById("story3");
var story4 = document.getElementById("story4");
var story5 = document.getElementById("story5");
var story6 = document.getElementById("story6");

var storytitle = document.getElementById("storytitle");
var storyblurb = document.getElementById("storyblurb");
var question = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var next = document.getElementById("next");

var ba = new Audio("audio/ba.mp3");
var cha = new Audio("audio/cha.mp3");
var da = new Audio("audio/da.mp3");
var fa = new Audio("audio/fa.mp3");
var ga = new Audio("audio/ga.mp3");
var ha = new Audio("audio/ha.mp3");
var ja = new Audio("audio/ja.mp3");
var ka = new Audio("audio/ka.mp3");
var la = new Audio("audio/la.mp3");
var ma = new Audio("audio/ma.mp3");
var na = new Audio("audio/na.mp3");
var pa = new Audio("audio/pa.mp3");
var qua = new Audio("audio/qua.mp3");
var ra = new Audio("audio/ra.mp3");
var sa = new Audio("audio/sa.mp3");
var sha = new Audio("audio/sha.mp3");
var ta = new Audio("audio/ta.mp3");
var tha = new Audio("audio/tha.mp3");
var va = new Audio("audio/va.mp3");
var wa = new Audio("audio/wa.mp3");
var ya = new Audio("audio/ya.mp3");
var za = new Audio("audio/za.mp3");

var library = ["ba, cha, da, fa, ga, ha, ja, ka, la, ma, na, pa, qua, ra, sa, sha, ta, tha, va, wa, ya, za"];



if(window.width >=450){
  alert("Please change the screen size to 'iPhone6' in the toggle device button to view this interface. (right click, inspect, phone/tablet symbol).");
}

// introduction

introGo.addEventListener("click", function(){
  intro.style.display= "none";
  login.style.display= "block";

});

// login function

console.log('reading');

//capture the submit event
  document.login.onsubmit = processLogin;

function processLogin() {

    //store user name in a variable
    var userName = document.login.userName.value;
    var greeting = document.getElementById("greeting");

    //error detection
    if(userName==""){

      document.getElementById("msg").innerHTML = "Give a name, any name!";
      return false;
    }

    greeting.innerHTML='Hello, ' + userName + ', what would you like to work on today?';

    console.log("Your name is " + userName);

    login.style.display= "none";
    chooseLevel.style.display= "block";

     //prevent page from reloading
     return false;

  }


  // pick level function
var dropbutton = document.getElementById("dropbutton");
var levelDropdown = document.getElementById("levelDropdown");

dropbutton.addEventListener("click", function(){
    levelDropdown.classList.toggle("show");
  });

var level = document.querySelectorAll("a");

for(var i=0; i< level.length; i++){
  level[i].addEventListener("click", function(){
    dropbutton.innerHTML = this.innerHTML;

    levelDropdown.className = "dropdownSelect";

  });
}

      // var levelStatus = document.getElementById("levelStatus");
levelGo.addEventListener("click", function(){

      console.log("You are on " + level + "!");

      chooseLevel.style.display= "none";
      homepage.style.display= "block";
      // return false;

    });

info.addEventListener("click", function(){
  homepage.style.display = "none";
  information.style.display = "block";
});


// start read interactions

story1.addEventListener("click", function(){

  storytitle.innerHTML = "Kabel starts the day...";

  storyblurb.innerHTML = "Kabel is an aspiring actor. On his way to his audition for a big movie, he missed his bus! He thought, “No big deal, I’ve got plenty of time.” He decided to walk instead. Walking down the street he noticed a woman bent over picking up her belongings from the ground. Kabel said hello and offered to help, but the woman said, “NO!” This was unexpected, but nonetheless, Kabel happily continued walking. He saw a cat down an alley that soon followed him all the way to his destination.";

  question.innerHTML = "Where was Kabel going?";

  opt1.innerHTML = "to lunch";
  opt2.innerHTML = "to grab a cup of coffee";
  opt3.innerHTML = "to his audition";
  opt4.innerHTML = "to the library";

});

story2.addEventListener("click", function(){

  storytitle.innerHTML = "Adam sits in the library...";

  storyblurb.innerHTML = "Adam, a college student, was writing a paper quietly in his school library on a cloudy Tuesday afternoon. He sipped on his cup of coffee when something to the right caught his eye. He set his coffee down and slowly turned his head and saw something he didn't expect. A frizzy orange cat stared up at him with big green eyes, wafting its tail from left to right. Adam just stared back wondering if others noticed. The cat suddenly leaped onto the chair next to him and he decided to enjoy the unexpected company.";

  question.innerHTML = "Where was Adam sitting?";

  opt1.innerHTML = "a coffee shop";
  opt2.innerHTML = "his friend's house";
  opt3.innerHTML = "in a library";
  opt4.innerHTML = "at a bar";

});

story3.addEventListener("click", function(){

  storytitle.innerHTML = "Vivian walks down the street...";

  storyblurb.innerHTML = "Vivian walks to her friend's house 3 blocks down from hers at 6pm. She gets to the door and knocks, waiting for her friend to answer. The door is opened by nobody in particular and she enters the dark house. It looks totally empty and abandoned, and Vivian just closes the door, feeling slightly odd. As soon as the door clicks shut, all lights come on at once and people jump out behind couches and chairs all yelling 'Suprise!' Vivian lets out a sigh of relief and smiles from ear to ear.";

  question.innerHTML = "What did Vivian find in the house?";

  opt1.innerHTML = "a robber";
  opt2.innerHTML = "a crime scene";
  opt3.innerHTML = "a suprise party";
  opt4.innerHTML = "a big mess";

});

story4.addEventListener("click", function(){

  storytitle.innerHTML = " ";

  storyblurb.innerHTML = "More stories coming soon!";

  next.style.display = "none";

});

story5.addEventListener("click", function(){

  storytitle.innerHTML = " ";

  storyblurb.innerHTML = "More stories coming soon!";

  next.style.display = "none";

});

story6.addEventListener("click", function(){

  storytitle.innerHTML = " ";

  storyblurb.innerHTML = "More stories coming soon!";

  next.style.display = "none";


});

// end read.html commands

// start listen.html commands






});
