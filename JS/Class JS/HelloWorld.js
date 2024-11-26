// Définir une classe pour le custom element
class HelloWorld extends HTMLElement {
  constructor() {
      super(); // Appelle le constructeur de la classe parent

      // Ajoute du contenu directement dans l'élément
      this.textContent = "Hello, World!";
  }
}

// Enregistrer le custom element
customElements.define('hello-world', HelloWorld);