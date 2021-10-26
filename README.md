# cucumber-typescript
[Cucumber](https://cucumber.io/) is a software tool that supports behavior-driven development (BDD). </br>
[TypeScript](https://www.typescriptlang.org/) is a programming language developed and maintained by Microsoft. </br>
[WDIO](https://webdriver.io/) is a Next-gen browser and mobile automation test framework for Node.js.

## Core Concepts
* [Behaviour Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development) is an agile software development process that encourages collaboration among developers, quality assurance testers, and customer representatives in a software project.
  * Stakeholders might be used to the User Story template; ["As a … I want … So that …"](https://martinfowler.com/bliki/UserStory.html)
  * Developers might be used to a unit test design pattern; ["Arrange, Act, Assert"](http://wiki.c2.com/?ArrangeActAssert)
  * Cucumber expresess functionality using keywords; ["Given, When, Then"](https://en.wikipedia.org/wiki/Given-When-Then)
* [Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface) is an object-oriented API whose design relies extensively on method chaining.
  * PageObect.someFunction()
  * PageOject.someElement().click()
* [Page Object Model](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/page_object_models/) is a Design Pattern which has become popular in test automation for enhancing test maintenance and reducing code duplication. </br>
  * "/login" will have a "Login page object" that contains the selectors for elements on that page and functions that can be performed on that page.

## Getting Started
1. Install [NodeJS](https://nodejs.org/en/) LTS
1. Clone this repo
1. Open the root folder using [VS Code](https://code.visualstudio.com/)
   * If you use [GitHub Desktop](https://desktop.github.com/), select the "Open in Visual Studio" button
1. Select "Terminal" > "New Terminal"
1. Run `npm install`

## How This Example Was Made
1. Installed [NodeJS](https://nodejs.org/en/) LTS
1. Ran the commands under "Get Started With WebdriverIO within Minutes" on [Webdriver.io](https://webdriver.io/)
   ```
   $ npm install --save-dev @wdio/cli
   $ npx wdio config --yes
   $ npx wdio run
   ```
