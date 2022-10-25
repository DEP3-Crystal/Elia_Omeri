const root = document.getElementById('root');
let updateId = -1;

function addArticleButton() {
  const div = document.createElement('div');
  div.className = 'add__container';
  const btn = document.createElement('button');
  btn.id = 'buttonAdd';
  btn.className = 'button';
  btn.innerHTML = '+ Add Article';
  btn.addEventListener('click', () => showForm());
  div.appendChild(btn);
  root.appendChild(div);
}
function renderNav() {
  const list = ['Travel updates', 'Reviews', 'About', 'Contact']

  const nav = document.createElement('nav');
  nav.className = 'nav';
  const ul = document.createElement('ul');
  ul.className = 'nav__container';

  list.forEach((link) => {
    const li = document.createElement('li');
    li.className = 'nav__item';

    const a = document.createElement('a');
    a.className = 'nav__link';
    a.href = '/';
    a.textContent = link;

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  root.appendChild(nav);
}

function renderMain() {
  const main = document.createElement('main');
  main.id = 'main';
  root.appendChild(main);
}

function getArticles() {
  fetch('http://localhost:3000/articles')

    .then(function (response) {
      if (response.status !== 200) {
        console.log('Error. Response Status: ' + response.status);
        return;
      }

      response.json().then(function (data) {
        renderArticles(data);
        console.log(data)
      });
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}


function renderArticles(articlesList) {
  const main = document.getElementById('main');
  articlesList.forEach((item) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    h2.className = 'title';
    h2.textContent = item.title;
    article.appendChild(h2);
    const ul = document.createElement('ul');
    ul.className = 'info__container';
    const liTag = document.createElement('li');
    liTag.className = 'info__item';
    liTag.textContent = item.tag;
    ul.appendChild(liTag);
    const liAuthor = document.createElement('li');
    liAuthor.className = 'info__item';
    liAuthor.textContent = ('Added by ');
    const span = document.createElement('span');
    span.className = 'info__mark';
    span.textContent = item.author;
    liAuthor.appendChild(span);
    ul.appendChild(liAuthor);
    const liDate = document.createElement('li');
    liDate.className = 'info__item';
    liDate.textContent = item.date;
    ul.appendChild(liDate);
    article.appendChild(ul);
    const divAfterUl = document.createElement('div');
    divAfterUl.className = 'actions__container';
    const button1 = document.createElement('button');
    button1.className = 'actions__btn';
    button1.textContent = 'Edit';
    button1.addEventListener('click', () => updateForm(item));
    divAfterUl.appendChild(button1);
    const button2 = document.createElement('button');
    button2.className = 'actions__btn';
    button2.textContent = 'Delete';
    button2.addEventListener('click', () => deleteArticle(item.id));
    divAfterUl.appendChild(button2);
    article.appendChild(divAfterUl);
    const image = document.createElement('img');
    image.src = item.imgUrl;
    article.appendChild(image);
    const divAfterImage = document.createElement('div');
    divAfterImage.className = 'content__container';
    const p1 = document.createElement('p');
    p1.textContent = item.saying;
    divAfterImage.appendChild(p1);
    const p2 = document.createElement('p');
    p2.textContent = item.content;
    p2.style.display = "none";
    divAfterImage.appendChild(p2);
    article.appendChild(divAfterImage);
    const divAfterDiv = document.createElement('div');
    divAfterDiv.className = 'readmore__container';
    const button3 = document.createElement('button');
    button3.className = 'button';
    button3.textContent = 'Read More';
    button3.addEventListener('click', function readMore() {

      if (p2.style.display !== "none") {
        p2.style.display = "none";
        button3.innerHTML = "Read more";

      } else {
        p2.style.display = "inline";
        button3.innerHTML = "Read less";
      }
    });
    divAfterDiv.appendChild(button3);
    article.appendChild(divAfterDiv);

    main.appendChild(article)

  })
}

function addFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  const button4 = document.createElement('button');
  button4.className = 'footer__link';
  button4.textContent = 'previous';
  const button5 = document.createElement('button');
  button5.classList.add('footer__link', 'footer__link--next');
  button5.textContent = 'next';
  // button5.addEventListener('click',function(articlesList){
  //   getArticles(articlesList[3]);
  // })
  footer.appendChild(button4);
  footer.appendChild(button5);
  root.appendChild(footer);
}


const divModalOverlay = document.createElement('div');
divModalOverlay.className = 'modal__overlay';
const divModal = document.createElement('div');
divModal.className = 'modal';
const divModalContent = document.createElement('div');
divModalContent.className = 'modal__content';
const h2 = document.createElement('h2');
h2.className = 'title';
h2.textContent = 'Add/Edit article';
const divContainer = document.createElement('div');
divContainer.className = 'inputs__container';


const inputList = ['Please enter title', 'Please enter tag', 'Please enter author',
  'Please enter date', 'Please enter image url', 'Please enter saying'];

const ids = ['title', 'tag', 'author', 'date', 'imgUrl', 'saying'];
var i = 0;
inputList.forEach((input) => {
  const input1 = document.createElement('input');
  input1.className = 'input';
  input1.type = 'text';
  input1.placeholder = input;
  input1.id = ids[i];
  i++;
  divContainer.appendChild(input1);
});


function addArticle() {
  var title = document.getElementById('title').value;
  var tag = document.getElementById('tag').value;
  var author = document.getElementById('author').value;
  var date = document.getElementById('date').value;
  var imgUrl = document.getElementById('imgUrl').value;
  var saying = document.getElementById('saying').value;
  var content = document.getElementById('content').value;


  const dataForServer = {
    title,
    tag,
    author,
    date,
    imgUrl,
    saying,
    content
  }

  const response = fetch('http://localhost:3000/articles', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(dataForServer)
  });
  getArticles();
}

function updateForm(article) {
  showForm();
  const title = document.getElementById('title');
  const tag = document.getElementById('tag');
  const author = document.getElementById('author');
  const date = document.getElementById('date');
  const imgUrl = document.getElementById('imgUrl');
  const saying = document.getElementById('saying');
  const content = document.getElementById('content');
  title.value = article.title;
  tag.value = article.tag;
  author.value = article.author;
  date.value = article.date;
  imgUrl.value = article.imgUrl;
  saying.value = article.saying;
  content.value = article.content;
  updateId = article.id;
}

async function deleteArticle(id) {
  const response = await fetch('http://localhost:3000/articles/' + id, {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json"
    },
  });
  getArticles();
}

async function updateArticle(id) {
  showForm();
  if (updateId != -1) {
    const title = document.getElementById('title').value;
    const tag = document.getElementById('tag').value;
    const author = document.getElementById('author').value;
    const date = document.getElementById('date').value;
    const imgUrl = document.getElementById('imgUrl').value;
    const saying = document.getElementById('saying').value;
    const content = document.getElementById('content').value;


    const dataForServer = {
      title,
      tag,
      author,
      date,
      imgUrl,
      saying,
      content
    }
    const response = await fetch('http://localhost:3000/articles/' + id, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(dataForServer)
    });
    clearForm();
    getArticles();
  }
}

function clearForm() {
  updateForm('');
}





const textArea = document.createElement('textarea');
textArea.className = 'textarea';
textArea.name = 'content';
textArea.id = 'content';
textArea.setAttribute('cols', 28);
textArea.setAttribute('rows', 7);
textArea.placeholder = 'Please enter content';
const divv = document.createElement('div');
divv.className = 'modal__buttons';
const button6 = document.createElement('button');
button6.className = 'button';
button6.textContent = 'Cancel';
button6.addEventListener('click', function () {
  divModalOverlay.style.display = "none";
});
const button7 = document.createElement('button');
button7.classList.add('button', 'button--pink');
button7.textContent = 'Save';
button7.addEventListener('click', () => {
  if (updateId != -1) {
    updateArticle(updateId);
  }
  else {
    addArticle();
  }
});
divv.appendChild(button6);
divv.appendChild(button7);

divModalContent.appendChild(h2);
divModalContent.appendChild(divContainer);
divModalContent.appendChild(textArea);
divModalContent.appendChild(divv);
divModal.appendChild(divModalContent);
divModalOverlay.appendChild(divModal);
//divModalOverlay.setAttribute('style','display:flex');
document.body.appendChild(root);
document.body.appendChild(divModalOverlay);

function showForm() {
  if (divModalOverlay.style.display !== "none") {
    divModalOverlay.style.display = "none";
  } else {
    divModalOverlay.style.display = "flex";
  }
}

function initFunction() {
  renderNav();
  addArticleButton();
  renderMain();
  getArticles();
  addFooter();
  showForm();
}

initFunction();

