document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

var cat = document.getElementById('cat');
var info = document.getElementById('info');
var catInfo =document.getElementById('catInfo');
var close = document.getElementById('close');

cat.addEventListener('click', function()
{
  info.style.display="block";
  catInfo.style.display="block";
})

cat.addEventListener('mouseover', function()
{
  cat.style.transition = "filter .5s";
});

cat.addEventListener('mouseout', function()
{
  cat.style.transition = "filter 2s";
})

close.addEventListener('click', function()
{
  info.style.display="none";
})

});
