document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");


//declare image variable
var img = document.getElementsByTagName('img');
// declare all png variables
var cat = document.getElementById('cat');
var record = document.getElementById('record');
var ring = document.getElementById('ring');
var tamb = document.getElementById('tamb');
var shirt = document.getElementById('shirt');
//declare all pop up window variables
var info = document.getElementById('info');
var catInfo =document.getElementById('catInfo');
var recordInfo = document.getElementById('recordInfo');
var ringInfo = document.getElementById('ringInfo');
var tambInfo = document.getElementById('tambInfo');
var shirtInfo = document.getElementById('shirtInfo');
// declare variable for audio controls
var audio = document.getElementsByTagName('audio');
var recordGif = document.getElementById('recordGif');
// delcare close variable
var close = document.getElementById('close');

// make all the functions for hovering effects
cat.addEventListener('mouseover', function()
{
  cat.style.transition = "filter .5s";
});

cat.addEventListener('mouseout', function()
{
  cat.style.transition = "filter .5s";
})

record.addEventListener('mouseover', function()
{
  record.style.transition = "filter .5s";
})

record.addEventListener('mouseout', function()
{
  record.style.transition = "filter .5s";
})

ring.addEventListener('mouseover', function()
{
  ring.style.transition = "filter .5s";
})

ring.addEventListener('mouseout', function()
{
  ring.style.transition = "filter .5s";
})

tamb.addEventListener('mouseover', function()
{
  tamb.style.transition = "filter .5s";
})

tamb.addEventListener('mouseout', function()
{
  tamb.style.transition = "filter .5s";
})

shirt.addEventListener('mouseover', function()
{
  shirt.style.transition = "filter .5s";
})

shirt.addEventListener('mouseout', function()
{
  shirt.style.transition = "filter .5s";
})

//make all the functions for the pop up info click functions

cat.addEventListener('click', function()
{
  info.style.display = "block";
  catInfo.style.display = "block";
})

record.addEventListener('click', function()
{
  info.style.display = "block";
  recordInfo.style.display = "block";
})

ring.addEventListener('click', function()
{
  info.style.display = "block";
  ringInfo.style.display = "block";
})

tamb.addEventListener('click', function()
{
  info.style.display = "block";
  tambInfo.style.display = "block";
})

shirt.addEventListener('click', function()
{
  info.style.display = "block";
  shirtInfo.style.display = "block";
})

// // spin the record when audio plays!
//
// audio.addEventListener('playing', function()
// {
//   recordInfo.style.display = "none";
//   recordGif.style.display = "block";
// })
//
// audio.addEventListener('pause', function()
// {
//   recordInfo.style.display = "block";
//   recordGif.style.display = "none";
// })

// close function

close.addEventListener('click', function()
{
  info.style.display="none";
  catInfo.style.display = "none";
  recordInfo.style.display = "none";
  ringInfo.style.display = "none";
  tambInfo.style.display = "none";
  shirtInfo.style.display = "none";
})

});
