console.log('reading');

  //make an array for entries
  var entry = [];

  //capture the submit event

  document.s2.onsubmit = submitForm;

  //capture the reset event

  document.s2.onreset = clearForm;

//define submitForm function

function submitForm() {

  //store userName in a variable

  entry[0]= document.s2.userName.value;

  //store food in a variable

  entry[1]= document.s2.food.value;

  //store liquid in a variable

  entry[2]= document.s2.liquid.value;

  //store noun1 in a variable

  entry[3]= document.s2.noun1.value;

  //store noun2 in a variable

  entry[4]= document.s2.noun2.value;

  //store adj1 in a variable

  entry[5]= document.s2.adj1.value;

  //store noun3 in a variable

  entry[6]= document.s2.noun3.value;

  //store noun4 in a variable

  entry[7]= document.s2.noun4.value;

  //store noun5 in a variable

  entry[8]= document.s2.noun5.value;

  //store adj2 in a variable

  entry[9]= document.s2.noun6.value;

  //store myMsg in a variable called myMsg

  var myMsg = document.getElementById("myMsg");

  //error detection

for(var i=0; i<10; i++) {
  if(entry[i]=="") {
    alert("Oh no! You forgot to fill in some entries!");
    break;
   }
}

   //use innerHTML to concantenate a message and put it on the screen
   if(entry[i]!="") {
    myMsg.innerHTML=entry[0] + 's famous ' + entry[1] +
    ' dip! <br> <br> 1. Take your ' + entry[1] +
    ' and rinse it with ' + entry[2] +
    '. Youll want it to be nice and clean! <br> <br>2. Cut the ' +
    entry[1] + ' in half and remove the ' + entry[3] +
    '. Some people keep it in their dip to preserve freshness!<br> <br>3. Scoop out the insides of the ' +
    entry[1] + ' with a spoon. Place them into a large ' + entry[4] +
    '.<br> <br>4. Go ahead and smash your ' + entry[1] +
    ' until its nice and ' + entry[5] + '.<br> <br>5. Recipes vary, but ' +
    entry[0] + 's favorite ingredients to add are ' + entry[6] +
    ', ' + entry[7] + ', and ' + entry[8] + '.<br> <br>6. Top it off with some delicious ' +
    entry[9] + ' juice. Now it is ready to serve. Enjoy!';
  }
   //prevent page from reloading

  return false;
}

//define clearForm function

function clearForm () {

  myMsg.innerHTML="";
  myMsg.hide;
}
