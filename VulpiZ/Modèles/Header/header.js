document.addEventListener("DOMContentLoaded", function () {
    fetch("../Modèles/Header/header.html")
    .then((response) => {
        if (!response.ok) throw new Error("Erreur lors du chargement du header");
        return response.text();
    })
    .then((html) => {
        document.getElementById("header-container").innerHTML = html;
    })
    .catch((error) => console.error(error));
});
