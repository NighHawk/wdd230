const requestInfo = "json/temples7.json";
const cards = document.querySelector('.cards');

fetch(requestInfo)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        console.log(jsonObject);
        const temple = jsonObject['temple'];
        company.forEach(displayCompany);
    })

function displayCompany (company){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let logo = document.createElement('img');

    h2.textContent = `${temple.name}`;
    p1.textContent = `${temple.address}`;
    p2.textContent = `${temple.phone}`;
    p3.textContent = `${temple.website}`;

    logo.setAttribute('src', temple.image);
    logo.setAttribute('alt', `Logo for ${temple.name}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p2);
    card.appendChild(logo);

    document.querySelector('div.cards').appendChild(card);
}

//to get buttons working//
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div.cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
})

//References//
// used past assignment as pieces of js code, as well as information given through this assingment//
