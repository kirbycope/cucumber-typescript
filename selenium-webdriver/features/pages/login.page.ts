import testData = require('../../../test-data')

/** URL looks like: {baseURL}/login */
class LoginPage {

    /** The `input` for "Username". */
    get inputUsername() { return $('#username') }
    /** The `input` for "Password". */
    get inputPassword() { return $('#password') }
    /** The `button` to submit a form. */
    get btnSubmit() { return $('button[type="submit"]') }

    /** Opens `this` page. */
    async open() {
        await browser.url(testData.baseUrl + "/login")
    }

    /** Log in using the given username and password.
     * @param username The username to submit
     * @param password The password to submit
     */
    async login(username, password) {
        if (username === "valid") {
            username = testData.testUser
        }
        if (password === "valid") {
            password = testData.testPass
        }
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }
}

/** URL looks like: {baseURL}/login */
export default new LoginPage();
