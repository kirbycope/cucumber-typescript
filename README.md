# cucumber-typescript
[Cucumber](https://cucumber.io/) is a software tool that supports behavior-driven development (BDD). </br>
[TypeScript](https://www.typescriptlang.org/) is a programming language developed and maintained by Microsoft.

## Core Concepts
* [Behaviour Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development) is an agile software development process that encourages collaboration among developers, quality assurance testers, and customer representatives in a software project.
  * Stakeholders might be used to the User Story template; ["As a … I want … So that …"](https://martinfowler.com/bliki/UserStory.html)
  * Developers might be used to a unit test design pattern; ["Arrange, Act, Assert"](http://wiki.c2.com/?ArrangeActAssert)
  * Cucumber expresess functionality using keywords; ["Given, When, Then"](https://en.wikipedia.org/wiki/Given-When-Then)
* [Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface) is an object-oriented API whose design relies extensively on method chaining.
  * PageObect.someFunction()
  * PageOject.someElement().click()
* [Page Object Model](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/page_object_models/) is a Design Pattern that has become popular in test automation for enhancing test maintenance and reducing code duplication. </br>
  * The "login" screen will have a "Login page object" that contains the selectors for elements on the page and functions that can be performed on that page.

## Getting Started
1. Install [NodeJS](https://nodejs.org/en/) LTS
1. [Android] Install [Android Studio](https://developer.android.com/studio) and [create an AVD](https://developer.android.com/studio/run/managing-avds)
1. Clone this repo
1. Open the root folder using [VS Code](https://code.visualstudio.com/)
   * If you use [GitHub Desktop](https://desktop.github.com/), select the "Open in Visual Studio" button
1. Open the [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
1. Run `npm install` to install dependencies noted in [package.json](/package.json)
1. In the root folder create a new file called `.env`
1. Copy+Paste the following
   ```
   TEST_BASE_URL="https://the-internet.herokuapp.com"
   TEST_USER="tomsmith"
   TEST_PASS="SuperSecretPassword!"
   ```
1. Save

## Run Tests

### Appium (Mobile Apps)
[Appium](https://appium.io) is an open-source automation tool for running scripts and testing native applications, mobile-web applications, and hybrid applications on Android or iOS using a webdriver. </br>
Example tests use https://developer.android.com/training/basics/firstapp </br>
The [apk](/app-debug.apk) is included as part of _this_ sample repo.

With the [AVD](https://developer.android.com/studio/run/emulator-commandline) running:
   * In the integrated terminal run `npm run appium`

### Selenium (Web Apps)
[Selenium](https://selenium.dev) is an open-source automated testing framework for web applications. </br>
[WDIO](https://webdriver.io/) is a Next-gen browser and mobile automation test framework for Node.js. </br>
Example tests use https://the-internet.herokuapp.com/login

With the [AVD](https://developer.android.com/studio/run/emulator-commandline) running:
   * In the integrated terminal run `npm run selenium`

## JavaScript Tips and Tricks

### Clear Dev Dependencies
In the integrated terminal run `npm prune --production`

### Hide node modules from VS Code's Explorer
1. Open the [Command Pallete](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
1. Search for and then select "Preferences: Open User Settings"
1. Seach for `files.exclude`
1. Select the "Add Pattern" button
1. Enter `**/node_modules`
