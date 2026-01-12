import { homePageSelectors } from "../selectors/homePageSelectors"

class HomePage {

    //Method to open the burger menu
    openBurgerMenu() {
        cy.get(homePageSelectors.burgerMenuButton).click()
    }

    //logout method
    logout() {
        cy.get(homePageSelectors.logoutLink).click()
    }
}

export default HomePage