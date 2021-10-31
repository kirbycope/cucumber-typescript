/** MainActivity.kt */
class MainActivity {

    /** The `editText` with the placeholder 'Enter a messsage'. */
    async editTextEnterAMessage() {
        //return await driver.findElement(By.id('editTextTextPersonName'));
        return await driver.$('android.widget.EditText');
    }

    /** The The 'SEND' `button`. */
    async buttonSend() {
        //return await driver.findElement(By.id('button'));
        return await driver.$('android.widget.Button');
    }

    /** Opens `this` page. */
    async open() {
        console.log(); // being the default activity there is nothing to do here
    }

    /** Sends the given message. */
    async sendMessage(message) {
        await (await this.editTextEnterAMessage()).setValue(message);
        await (await this.buttonSend()).click();
        browser.pause(250);
    }
}

/** MainActivity.kt */
export default new MainActivity();
