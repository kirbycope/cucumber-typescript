import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page';

// Given I am on the login page
Given("I am on the login page", async () => {
    await LoginPage.open()
});

// When I login with <username> and <password>
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
