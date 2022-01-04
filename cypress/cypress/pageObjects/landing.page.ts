import APage from "./a.page";

export default class LandingPage extends APage {
    landingString = {
        url: "/",
        searchButton: "Google Search",
        feelinLucky: "I'm Feeling Lucky"
    };
    private landingSelector = {
        searchButton: 'input[name="btnK"]',
        feelinLuckyButton: 'input[name="btnI"]',
        mainLogo: ".lnXdpd",
        searchField: 'input[name="q"]'
    };
    getLogo() {
        return cy.get(this.landingSelector.mainLogo).should("be.visible").and("have.attr", "src", "/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
    };
    getSearchField() {
        return cy.get(this.landingSelector.searchField).should("be.visible").and("have.attr", "aria-label", "Search");
    };
    getSearchButton() {
        return cy.get(this.landingSelector.searchButton).should("be.visible").and("have.value", this.landingString.searchButton);
    };
    getFeelingLuckyButton() {
        return cy.get(this.landingSelector.feelinLuckyButton).should("be.visible").and("have.value", this.landingString.feelinLucky);
    };

    checkLandingPage() {
        this.checkAPage();
        this.getLogo();
        this.getSearchField();
        this.getSearchButton();
        this.getFeelingLuckyButton();
    };
};