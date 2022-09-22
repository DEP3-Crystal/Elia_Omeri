
document.body.style.fontFamily='Arial, sans-serif';
document.getElementById("nickname").textContent='Elia';
document.getElementById("favorites").textContent='favorites';
document.getElementById("hometown").textContent='Durres';
var variable = document.getElementsByTagName('li');
for(let i=0;i<variable.length;i++){
    variable[i].className='list';
}
console.log(variable);
var img = document.createElement('img');
 img.src ='elia.jpg';
 img.width = 200;
 document.body.appendChild(img);
