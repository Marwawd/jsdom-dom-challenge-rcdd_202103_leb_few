let c=0,i=0;
var intervalID = setInterval(count , 1000);


let p=document.getElementById('plus');
let n=document.getElementById('minus');
let h=document.getElementById('heart');
let po=document.getElementById('pause');
let times=0;


function count(){

  p.addEventListener("click", function(){
  document.getElementById("counter").innerHTML = c++;})

  n.addEventListener("click", function(){
  document.getElementById("counter").innerHTML = c--;})
  c++;
  document.getElementById('counter').innerHTML=c;}
let likes=document.getElementsByClassName("likes");
likes=document.getElementById('lik');
  likes.addEventListener("click", function(){
  document.getElementsByTagName('ul').innerText = "HI";})



/*
document.getElementsByClassName('likes').addEventListener()("click" , function (){let cc=parseInt(document.getElementById('counter').innerText);
let dis=parseInt(document.getElementsByClassName('likes').innerText)
document.getElementsByTagName("ul").innerHTML+=`${cc} likes ${dis} times`;});
/*function likes(){
  if(h.clicked==true) {
    times++;
    let msg=`${c} was liked ${times} times`;
  document.getElementsByClassName('likes').innerHTML+=msg;

  }}


/*
function pause(){
  if(document. getElementById('pause'). clicked == true)
{
alert("button was clicked");
}
}
*/
