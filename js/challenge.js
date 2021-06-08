let c=0,i=0;
var intervalID = setInterval(count , 1000);


let p=document.getElementById('plus');
let n=document.getElementById('minus');
let h=document.getElementById('heart');
let po=document.getElementById('pause');
let likes=document.getElementById('lik');
let submit=document.getElementById("submit");
let comments=document.getElementById("comment-input");
const form = document.getElementById('form');
let times=0;


function count(){

  p.addEventListener("click", function(){
  document.getElementById("counter").innerHTML = c++;})

  n.addEventListener("click", function(){
  document.getElementById("counter").innerHTML = c--;})
  c++;
  document.getElementById('counter').innerHTML=c;
}
// let likes=document.getElementsByClassName("likes");
// likes=document.getElementById('lik');
//   likes.addEventListener("click", function(){
//   document.getElementsByTagName('ul').innerText = "HI";})

po.addEventListener("click", function(){
clearInterval(intervalID);
po.innerHTML="resume";
})
h.addEventListener("click", function(){
times++;
let li=document.createElement("li");
li.innerHTML=`${c} get ${times} likes`
likes.appendChild(li);
})
form.addEventListener("submit",function(){
  console.log("woga")
})
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
