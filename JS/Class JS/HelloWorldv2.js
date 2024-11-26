class HelloWorld extends HTMLElement {
  constructor() {
      super(); // Appelle le constructeur de la classe parent

      // Ajoute du contenu directement dans l'élément
      this.textContent = "Hello, World!";
      const mot = this.getAttribute('mot') || 'World';
      const element = document.createElement('p');
      element.textContent = `Bonjour, ${mot}!`;
      this.appendChild(element);
  }
}

customElements.define('hello-world', HelloWorld);