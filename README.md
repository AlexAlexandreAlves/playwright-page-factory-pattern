# Page Factory Pattern with Playwright

This project is an automated test suite using [Playwright](https://playwright.dev/) to validate authentication and registration flows in a web application. The project adopts the **Page Factory Pattern** to organize and simplify the creation and management of page objects, making tests more readable, reusable, and easy to maintain.

## Context

The goal of this repository is to demonstrate how to structure end-to-end (E2E) automated tests using the **Page Factory Pattern** design pattern. This pattern centralizes the creation of page objects in a single "factory" class or function, making it easier to inject dependencies and reuse page objects in tests.

## About the Page Factory Pattern

The **Page Factory Pattern** is an evolution of the Page Object Model, where the creation of page objects is done through a centralized factory. This allows you to easily instantiate and manage multiple page objects, as well as facilitate the maintenance and scalability of tests.

**Example:**
```typescript
const factory = new PageFactory(page);
const loginPage = factory.getLoginPage();
await loginPage.login("email@test.com", "password");
```

## Project Structure

- `ui/pages/`: Page Objects with the elements and actions of each page.
- `ui/factories/`: Factories responsible for creating and providing instances of the Page Objects.
- `tests/`: Automated test files.
- `playwright.config.ts`: Playwright configuration (including baseURL).

## Essential Commands

- **Run all tests:**
  ```
  npx playwright test
  ```

- **Run tests in interactive UI mode:**
  ```
  npx playwright test --ui
  ```

- **Run tests in a specific browser:**
  ```
  npx playwright test --project=chromium
  ```

- **Run a specific test file:**
  ```
  npx playwright test tests/login.test.ts
  ```

- **Run in debug mode:**
  ```
  npx playwright test --debug
  ```

- **Generate tests automatically with Codegen:**
  ```
  npx playwright codegen
  ```

## Requirements

- Make sure you have Node.js version 18 or higher installed.
- Dependencies installed with:
  ```
  npm run setup
  ```

## Notes

- The project uses `baseURL` configured in `playwright.config.ts`, allowing the use of relative paths in tests.
- As the sample application does not have a persistent database, the data created exists only during the session.