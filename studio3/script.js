document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

// declare all variables
var cat = document.getElementById('cat');
var record = document.getElementById('record');
var info = document.getElementById('info');
var catInfo =document.getElementById('catInfo');
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

// make all the functions for the pop up info

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

// close function

close.addEventListener('click', function()
{
  info.style.display="none";
  catInfo.style.display = "none";
  recordInfo.style.display = "none";
})

});
