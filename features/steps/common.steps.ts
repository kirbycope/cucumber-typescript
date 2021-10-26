import { Given, When, Then } from '@wdio/cucumber-framework';

// Then I should see a message saying <message>
Then(/^I should see a message saying (.*)$/, async (message: string) => {
    let element = await $('//*[contains(text(),"' + message + '")]');
    expect(element).toBeDisplayed();
});
