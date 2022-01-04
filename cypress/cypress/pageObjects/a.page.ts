export default class APage {
    baseString= {
        title: "Google"
    };
    private sharedSelector= {

    };
    checkTitle() {
        cy.title().should("include", this.baseString.title)
    };

    checkAPage() {
        this.checkTitle();
    };
};