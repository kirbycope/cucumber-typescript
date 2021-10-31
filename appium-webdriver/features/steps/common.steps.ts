import { Given, When, Then } from '@wdio/cucumber-framework';

// Then I should see a message saying <message>
Then(/^I should see a message saying (.*)$/, async function (message) {
    let element = await driver.$('//*[contains(text(),"' + message + '")]');
    expect(element).toBeDisplayed();
});
