import LandingPage from '../pageObjects/landing.page'

describe('Example Test', function() {
    const landingPage = new LandingPage();

    beforeEach(function() {
        cy.clearCookies();
    });

    it('Should have a Landing Page', function() {
        cy.visit(landingPage.landingString.url);
        landingPage.checkLandingPage();
    });

    it('Should have Working Search Functionality', function() {
        cy.visit(landingPage.landingString.url);
        landingPage.checkLandingPage();
        landingPage.getSearchField().type("Cypress");
        landingPage.getSearchButton().first().click();
        cy.get("cite").first().should("have.text", "https://www.cypress.io");
    });

    it('Should have Working Feeling Lucky Functionality', function() {
        cy.visit(landingPage.landingString.url);
        landingPage.checkLandingPage();
        landingPage.getSearchField().type("Cypress");
        landingPage.getFeelingLuckyButton().first().click();
        cy.url().should('eq', "https://www.cypress.io/")
    });
})