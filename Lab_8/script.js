// let body = document.getElementsByTagName('body')[0];
// let loadingLabel = body.appendChild(document.createElement("label"));
// loadingLabel.textContent = "loading...";
// fetch('http://localhost:3000/dogs')
//     .then(
//         function (response) {
//             if (response.status !== 200) {
//                 console.log('Looks like there was a problem. Status Code: ' +
//                     response.status);
//                 return;
//             }

//             // Examine the text in the response
//             response.json().then(function (data) {
//                 renderDogs(data);
//             });
//         }
//     )
//     .catch(function (err) {
//         console.log('Fetch Error :-S', err);
//     });

// function renderDogs(dogList) {
//     loadingLabel.textContent = "";

//     const container = body.appendChild(document.createElement('ul'));
//     container.setAttribute("type", "none");
//     dogList.forEach(dog => {
//         const list = document.createElement('li');
//         const img = list.appendChild(document.createElement('img'));
//         img.setAttribute("src", dog.img);
//         const name = list.appendChild(document.createElement('label'));
//         name.textContent = dog.name;
//         name.setAttribute("style", "font-size:30px;")
//         container.appendChild(list);
//     });

// }
let root = document.getElementById('root');
let formContainer = document.getElementById('form');
let isLoading = false;


function showLoading() {
  if (isLoading) { return }

  // Create loading Node
  let loading = document.createElement('p')
  loading.textContent = 'Loading!!!'
  isLoading = true;

  // Add loading to root
  root.appendChild(loading);
}

function removeRootChildren() {
  // Remove all node from root
  while (root.firstChild) {
    root.removeChild(root.lastChild);
  }

  isLoading = false;
}


function getDogs() {
  showLoading();
  fetch('http://localhost:3000/dogs')
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          removeRootChildren();
          renderDogs(data);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function renderForm() {
  const form = document.createElement('form')
  const name = document.createElement('input')
  name.placeholder = 'name';
  name.type = 'text';
  name.id = 'name';
  const img = document.createElement('input');
  img.placeholder = 'img';
  img.type = 'text';
  img.id = 'img';
  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.type = 'button';
  addButton.addEventListener('click', addDog);
  form.appendChild(name);
  form.appendChild(img);
  form.appendChild(addButton);
  formContainer.appendChild(form)
}


async function addDog() {
  const name = document.getElementById('name').value;
  const img = document.getElementById('img').value;

  const dataForServer = {
    name,
    img
  }

  removeRootChildren();
  showLoading();


  const response = await fetch('http://localhost:3000/dogs', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(dataForServer)
  });
  const movies = await response.json();
  clearForm();
  getDogs();

}

function updateForm(name, img) {
  const nameInput = document.getElementById('name');
  const imgInput = document.getElementById('img');
  nameInput.value = name;
  imgInput.value = img;
}


function clearForm() {
  updateForm('', '');
}

function renderDogs(dogList) {
  const container = document.createElement('ul');
  dogList.forEach(dog => {
    const list = document.createElement('li');
    list.textContent = dog.name;
    const img = document.createElement('img');
    img.src = dog.img;
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.textContent = 'Edit Dog';
    editButton.addEventListener('click', () => updateForm(dog.name, dog.img));
    container.appendChild(list);
    container.appendChild(img);
    container.appendChild(editButton);
  });

  root.appendChild(container);
}


function init() {
  renderForm();
  getDogs();
}

init();