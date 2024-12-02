document.addEventListener("DOMContentLoaded", function () {
    fetch("../Modèles/Footer/footer.html") 
      .then((response) => {
        if (!response.ok) throw new Error("Erreur lors du chargement du footer");
        return response.text();
      })
      .then((html) => {
        document.getElementById("footer-container").innerHTML = html;
      })
      .catch((error) => console.error(error));
});