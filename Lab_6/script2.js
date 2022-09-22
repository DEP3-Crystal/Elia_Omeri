let movie = [{
    "title": 'Miracle in Cell No. 7',
    "duration": 127,
    "actors": ['Aras Bulut İynemli', 'Nisa Sofiya Aksongur'],
    "viewed": true
},
{
    "title": 'Dear John',
    "duration": 108,
    "actors": ['Channing Tatum', 'Amanda Seyfried'],
    "viewed": false
}
]
//Ex 6.3
// for (let index = 0; index < movie.length; index++) {
// var paragraph = document.createElement('p');
// paragraph.append(title);
// document.body.append(paragraph);
// var title = document.createTextNode(movie[i].title);
var mainList = document.createElement('ul');

for (let i = 0; i < movie.length; i++) {

    var titles = document.createElement('li');
    var innerList = document.createElement('ul');
    var duration1 = document.createElement('li');
    var actors1 = document.createElement('li');
    var viewed1 = document.createElement('li');

    titles.innerHTML = movie[i].title;
    duration1.innerHTML = movie[i].duration;
    actors1.innerHTML = movie[i].actors;
    viewed1.innerHTML = movie[i].viewed;

    var img = document.createElement("img");
    if(movie[i].viewed){
        viewed1.style.color="red";
    }
    if (movie[i].title === 'Miracle in Cell No. 7') {
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/7._Ko%C4%9Fu%C5%9Ftaki_Mucize.jpg/220px-7._Ko%C4%9Fu%C5%9Ftaki_Mucize.jpg");
    } else if(movie[i].title ==='Dear John') {
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/3/35/Dear_John_film_poster.jpg");
    }

    innerList.append(duration1, actors1, viewed1);
    titles.append(innerList);
    mainList.append(img,titles);
}

document.body.append(mainList);


