describe('Test de navigation vers une page', () => {
    it('devrait se rendre sur la page d\'accueil', () => {
      // Remplacez l'URL par celle que vous souhaitez tester
      const url = 'https://votre-site-exemple.com';
  
      // Accéder à la page
      cy.visit(url);
  
      // Vérifier que l'URL est correcte après le chargement
      cy.url().should('eq', url);
  
      // Vérifier que l'élément spécifique est présent (par exemple, un titre ou un texte)
      cy.contains('Titre de la page ou texte spécifique').should('be.visible');
  
      // Optionnel : Vérifier le titre de la page
      cy.title().should('include', 'Titre de la page');
    });
  });
  