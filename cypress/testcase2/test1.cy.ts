/// <reference types="cypress" />
export {}


describe("Checks on webpage", ()=>{
  beforeEach (function(){
    cy.visit('http://localhost:3000/')
  })

  it("Check the NetFlix", ()=>{
    cy.NetflixIcon();
  })
})