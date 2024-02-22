/// <reference types="cypress" />
export {}


describe("Checks on webpage", ()=>{
  beforeEach (function(){
    cy.visit('/')
  })

  it("Check the NetFlix", ()=>{
    cy.NetflixIcon();
  })

  it("Movie Headers", ()=>{
    cy.assertHeaders(['Home', 'TV Shows', 'Movies', 'New & Popular', 'My Lost', 'Browse by Languages']);
  })

  it("Check Profile section", ()=>{
    cy.asserProfileName();
  })

  it("Movie Buttons", ()=>{
    cy.movieButtons(['', 'Season 2 coming on 14 OctoberAfter a disastrous set-up by their families, two teens strike up a tentative friendship at their summer program — but deeper feelings aren’t far behind.', 'PlayMore Info'])
    cy.movieList();
  })

  it("Clickable", ()=>{
    cy.checkMoviesClickOnAll2()
  })

})