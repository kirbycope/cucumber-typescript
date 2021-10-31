// javascript

const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        "appium:app": "C:\\Users\\kirby\\OneDrive\\Documents\\GitHub\\cucumber-typescript\\app-debug.apk",
        "appium:udid": "emulator-5554",
        platformName: "Android"
    }
};

async function main() {
    const client = await wdio.remote(opts);

    const field = await client.$("android.widget.EditText");
    await field.setValue("Hello World!");
    const value = await field.getText();
    assert.strictEqual(value, "Hello World!");

    await client.deleteSession();
}

main();
