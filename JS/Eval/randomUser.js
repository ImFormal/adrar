const url = "https://randomuser.me/api/";
async function generateUser(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let photo = document.querySelector(".card-img-top");
        photo.src = `${data.results[0].picture.large}`;
        photo.alt = `Photo de : ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
        let titre = document.querySelector(".card-title");
        titre.textContent = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
        let description = document.querySelector(".card-text");
        description.innerHTML = `${data.results[0].email}<br><br>Adress : ${data.results[0].location.street.number} - ${data.results[0].location.street.name} (${data.results[0].location.city} - ${data.results[0].location.country})<br><br>Phone : ${data.results[0].phone}`;
        let button = document.querySelector(".btn");
        button.textContent = "Random User";
        button.onclick = generateUser;
    });
}

generateUser();