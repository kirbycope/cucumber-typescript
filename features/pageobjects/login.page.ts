/** URL looks like: {baseURL}}/login */
class LoginPage {

    get inputUsername () { return $('#username') }

    get inputPassword () { return $('#password') }

    get btnSubmit () { return $('button[type="submit"]') }

    async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /** Opens `this` page. */
    async open () {
        await browser.url("https://the-internet.herokuapp.com" + "/login")
    }
}

/** URL looks like: {baseURL}}/login */
export default new LoginPage();
