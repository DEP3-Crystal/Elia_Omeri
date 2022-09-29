
// document.getElementById("half-button").addEventListener("click", halfFunction);
// document.getElementById("percent-button").addEventListener("click", percentFunction);
// document.getElementById("area-button").addEventListener("click", areaFunction);
function squareNumber(num) {
    var square = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squareNumber);
    return square;
}

var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function() {
  var num = document.getElementById("square-input").value;
  document.getElementById("solution").textContent = squareNumber(num);
});

 function halfFunction(a){
 let half = a/2;
 return half;
 }
 let  halfButton = document.getElementById("half-button");
 halfButton.addEventListener("keypress",function(){ 
 var num1 = document.getElementById("half-input").value;
 document.getElementById("solution").textContent=halfFunction(num1)});



 function percentFunction(a,b){
   return (a/b*100);
 }
 let percentButton =document.getElementById("percent-button");
 percentButton.addEventListener("click",function(){
    var num1 = document.getElementById("percent1-input").value;
    var num2 = document.getElementById("percent2-input").value;
    document.getElementById("solution").textContent=percentFunction(num1,num2)});
 
 

 function areaFunction(a){

 return Math.PI*a*a;
 }
 let areaButton = document.getElementById("area-button");
 areaButton.addEventListener("click",function(){
    var num = document.getElementById("area-input").value;
    document.getElementById("solution").textContent = areaFunction(num)
 });