import { Given, When, Then } from '@wdio/cucumber-framework';
import mainActivity from "../activities/main.activity";

// Given I am on the main activity
Given("I am on the main activity", async function () {
    await mainActivity.open();
});

// When I send a message saying <message>
When(/^I send a message saying (.*)$/, async function (message) {
    await mainActivity.sendMessage(message);
});
