let body = document.getElementsByTagName('body')[0];
let loadingLabel = body.appendChild(document.createElement("label"));
loadingLabel.textContent = "loading...";
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
                renderDogs(data);
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

function renderDogs(dogList) {
    loadingLabel.textContent = "";

    const container = body.appendChild(document.createElement('ul'));
    container.setAttribute("type", "none");
    dogList.forEach(dog => {
        const list = document.createElement('li');
        const img = list.appendChild(document.createElement('img'));
        img.setAttribute("src", dog.img);
        const name = list.appendChild(document.createElement('label'));
        name.textContent = dog.name;
        name.setAttribute("style", "font-size:30px;")
        container.appendChild(list);
    });

}