class UserBox extends HTMLElement {
  constructor() {
      super(); // Appelle le constructeur de la classe parent

      // Ajoute du contenu directement dans l'élément
      const image = this.getAttribute('image');
      const nom = this.getAttribute('nom');
      const mail = this.getAttribute('mail');
      const age = this.getAttribute('age');

      const imageElement = document.createElement('img');
      const nomElement = document.createElement('p');
      const mailElement = document.createElement('p');
      const ageElement = document.createElement('p');

      imageElement.classList.add('bg-primary-subtle');
      imageElement.textContent = image;
      imageElement.src = image;
      imageElement.alt = nom;
      imageElement.width = "240";
      imageElement.height = "300";
      imageElement.style.marginBottom = "20px";
      
      nomElement.classList.add('bg-primary-subtle');
      nomElement.textContent = nom;
      nomElement.style.fontWeight = "bold";
      mailElement.classList.add('bg-primary-subtle');
      mailElement.textContent = mail;
      ageElement.classList.add('bg-primary-subtle');
      ageElement.textContent = age;

      this.appendChild(imageElement);
      this.appendChild(nomElement);
      this.appendChild(mailElement);
      this.appendChild(ageElement);
  }
}
customElements.define('user-box', UserBox);