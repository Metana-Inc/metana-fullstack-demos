# Module 10 - Testing

## Summary

In Module 10, we explored various testing techniques to ensure the reliability, functionality, and performance of web applications. The focus was on different aspects of testing, including manual API testing, frontend unit testing, and automated API and browser testing. This module is designed to help students develop a comprehensive testing strategy for their applications.

## Phases

1. Manual API Testing with Postman
2. Frontend Unit Testing with Jest
3. Implementing Automated API Testing with Supertest
4. Setting Up and Running Automated Browser Tests with Selenium and Jest

# Steps

- 10.1 Manual API Testing | Postman

  - **Setup Postman Environment**
    - Install Postman on your machine.
    - Create a new collection for organizing API requests.
  - **Creating API Requests**
    - Define the endpoint URL for each API request.
    - Specify the HTTP method (GET, POST, PUT, DELETE).
    - Set up request headers, parameters, and body as needed.
  - **Running API Tests**
    - Send requests to the server and observe responses.
    - Validate the response status codes and data.
    - Save responses for later comparison.
  - **Automating with Postman**
    - Create test scripts in Postman to automate the validation of responses.
    - Use Postman's built-in scripting environment to write tests.

- 10.2 Frontend Unit Testing | Jest

  - **Setup Testing Environment**
    - Install Jest and @testing-library/react as development dependencies.
    - Configure Jest with a `jest.config.js` file to specify testing settings.
    - Create a `.babelrc` file if needed for Babel configuration.
  - **Writing Unit Tests**
    - Identify components to test and write test files in the `__tests__` directory.
    - Use Jest and Testing Library methods to render components and assert their behavior.
    - Mock dependencies, props, and state as necessary for testing.
  - **Running and Reviewing Tests**
    - Execute tests using the `npm test` command.
    - Review test results and ensure that components render and behave as expected.
    - Debug and fix any issues identified in the tests.

- 10.3 Automated API Testing | Supertest

  - **Setup Supertest**
    - Install Supertest and Jest as development dependencies in your project.
    - Configure Jest for running Supertest-based tests.
  - **Writing Tests with Supertest**
    - Create test files for different API endpoints.
    - Write tests to send HTTP requests and validate responses using Supertest.
    - Use Jest's assertions to verify the correctness of API responses.
  - **Running and Reviewing Tests**
    - Execute tests using the `npm test` command.
    - Review test results and coverage reports.
    - Debug and fix any failing tests.

- 10.4 Automated Browser Testing | Selenium and Jest
  - **Setup Selenium**
    - Install Selenium WebDriver and browser drivers (e.g., ChromeDriver).
    - Configure Selenium WebDriver in your project.
  - **Writing Selenium Tests**
    - Create test files for different browser interactions.
    - Write tests to automate browser actions such as navigation, clicking, and form filling.
    - Use Selenium WebDriver's methods to interact with web elements.
  - **Integrating Selenium with Jest**
    - Configure Jest to run Selenium tests.
    - Create a Jest setup file to initialize and tear down the Selenium WebDriver.
    - Update npm scripts to include commands for running Selenium tests.
  - **Running and Validating Selenium Tests**
    - Execute Selenium tests using the `npm test:selenium` command.
    - Validate that browser interactions are performed correctly and expected outcomes are met.
    - Review and debug any issues in the test execution.
