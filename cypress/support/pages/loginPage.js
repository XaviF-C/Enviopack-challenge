import { loginPageSelectors } from "../selectors/loginPageSelectors"

class LoginPage {

    // Method to visit the login page
    visit() {
        cy.visit('https://www.saucedemo.com/')
    }

    // Method to perform login action
    login(username, password) {
        cy.get(loginPageSelectors.usernameInput).type(username)
        cy.get(loginPageSelectors.passwordInput).type(password)
        cy.get(loginPageSelectors.loginButton).click()
    }
}

export default LoginPage