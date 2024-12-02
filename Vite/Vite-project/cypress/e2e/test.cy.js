describe("Tests de l'application Counter", () => {


    it("devrait afficher un compte initial de 0", () => {
      cy.visit("http://localhost:5173/");
      cy.get("#counter").should("have.text", "count is 0");
    });
  
    it("devrait augmenter le compte lors du clic sur le bouton", () => {
      cy.visit("http://localhost:5173/");
      cy.get("#counter").click();
      cy.get("#counter").should("have.text", "count is 1");
    });
  });