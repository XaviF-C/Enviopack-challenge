import { loginPageSelectors } from '../support/selectors/loginPageSelectors'
import { homePageSelectors } from '../support/selectors/homePageSelectors'
import LoginPage from '../support/pages/loginPage'
import HomePage from '../support/pages/homePage'

describe('SauceDemo - Successfull Login', () => {

  // Instantiate the LoginPage class
  const loginPage = new LoginPage()
  const homePage = new HomePage()

  it('Logs in successfully and Logs out', () => {


    //Visit the login page
    loginPage.visit()
    //Assertions to verify that we are on the login page
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get(loginPageSelectors.swagLabsLogo).should('be.visible')
    cy.get(loginPageSelectors.loginButton).should('be.enabled')
    
    //Login with valid credentials from fixture
    cy.fixture('test-data').then((data) => {
      loginPage.login(data.validUser.username, data.validUser.password)
    })

    //Assertions to verify that we are on the home page
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.get(homePageSelectors.shoppingIcon).should('be.visible')

    //Open burger menu
    cy.get(homePageSelectors.burgerMenuButton).should('be.visible')
    homePage.openBurgerMenu()

    //Logout
    cy.get(homePageSelectors.logoutLink).should('be.visible')
    homePage.logout()

    //Verify that we are logged out and back on the login page
    cy.get(loginPageSelectors.loginButton).should('be.enabled')

  })
})