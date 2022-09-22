
document.body.style.fontFamily='Arial, sans-serif';
document.getElementById("nickname").innerHTML='Elia';
document.getElementById("favorites").innerHTML='favorites';
document.getElementById("hometown").innerHTML='Durres';
var variable = document.getElementsByTagName('li');
for(let i=0;i<variable.length;i++){
    variable[i].className='list';
}
console.log(variable);
var img = document.createElement('img');
 img.src ='elia.jpg';
 img.width = 200;
 document.body.appendChild(img);
