/// <reference types="cypress" />
export {}

Cypress.Commands.add("NetflixIcon", ()=>{
    cy.get('svg[viewBox="0 0 1024 276.742"]').should("be.visible")
})


Cypress.Commands.add("assertHeaders", (elements) => {
  elements.forEach((value:any) => {
    cy.get('p[class="MuiTypography-root MuiTypography-body1 css-yqgf2h-MuiTypography-root"]')
      .should('contain.text', value);
  });
});

Cypress.Commands.add("asserProfileName", ()=>{
  cy.get('.MuiBox-root.css-1svqmvn')
  .children()
  .should('have.length', 4)
  .eq(1) // Select the middle child (index 1, assuming 0-based indexing)...!
  .should('have.text', 'Children');
})


Cypress.Commands.add("movieButtons", (text) => {
  cy.get("#secondary-image-container")
    .children()
    .should('have.length', 3)
    .each(($el, index) => {
      cy.wrap($el).should('contain.text', text[index]);
      cy.log("text with index ",text[index])
      if (index < 2) {
        cy.wrap($el).next().should('have.length', 1);
      }
    });
});


Cypress.Commands.add("movieList", ()=>{
  cy.get('div[style="width: 100%;"]').should('be.visible')
})

Cypress.Commands.add("CheckMoviesClickrough", ()=>{
  cy.get(".MuiBox-root.css-gfzndq").eq(1).click();
  cy.get("#detail-container").should('have.text', "2012U/A 16+9 seasonsHDSeasons Coming on MondayMost LikedS14:E301 ParadoxTemari’s Wind Style unit doesn’t manage to do any damage to the Third Raikage which, according to Dodai, probably has the last armor and attack.").invoke('text').then((details)=>{
    console.log(details)   
  })
})



// cypress/support/commands.js




Cypress.Commands.add('checkMoviesClickOnAll2', () => {
  cy.get(".MuiBox-root.css-gfzndq")
    .should("have.length", 48)
    .each(($ts) => {
      cy.wrap($ts)
        .click()
        .get("#detail-container")
        .click()
        .fixture('assertion.json') // Load content from the JSON fixture file
        .then((data) => {
          cy.get('#detail-container').should('have.text', data.window.textMovies1)
          .get("ul.MuiList-root.MuiList-padding.css-h4y409-MuiList-root")
          .should('have.text', data.window.textMovies2)
          .get("#suggestions").should('have.text', data.window.textMovies3)
          .get("#about-container").should('have.text', data.window.textMovies4)
        })
        .get('svg[data-testid="CloseIcon"]')
        .click();
    });
});





// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }



