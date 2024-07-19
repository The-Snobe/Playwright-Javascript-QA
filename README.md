Playwright Test Runner With JavaScript
An example project demonstrating automation of playwright tests using page object design pattern framework.

Application Under Test
We are using https://qa-assessment.pages.dev/ as the Application Under Test. This App is a React.js Frontend

URL: https://qa-assessment.pages.dev/
OS : Windows
IDE : Visual Studio Code

Playwright : Javascript 


Installation
Install the dependencies and devDependencies to run the test.

Clone (OR) Download this repo as zip folder on to your local machine
Navigate to project's directory on terminal and run the following commands:
Clone the repository

git clone https://github.com/The-Snobe/Playwright-Javascript-QA.git

Install dependencies

npm install
npm init playwright@latest
npx playwright install 
Run application
Run tests in Parallel chrome

npx playwright test –project=chromium - For tests only on chrome browser

Run tests in Parallel firefox

npx playwright test --project=firefox - For tests only on firefox browser

Run tests in Parallel safari

npx playwright test --project=webkit - For tests only on safari browser
Run tests in Parallel on all browsers (chrome, safari, edge and firefox)

npx playwright test  - For tests only on all browsers
npx playwright test --headed - For tests only on playwright
Playwright Test Report
Html-test-report :
npx playwright show-report


Notes:
Modify test data in users.json and datasets.json as needed.
Use test.only to focus on a specific test during development.

Test Scenarios and Descriptions
1.  Verify Empty Mandatory Fields
Scenario: Test that the application displays an error message when mandatory fields are left empty.
Description: Ensure that the error message for empty mandatory fields is displayed when the form is submitted without filling in the required fields.

2.  VerifyInvalid First Name
Scenario: Test that the application displays an error message for an invalid first name.
Description: Ensure that the error message for an invalid first name is displayed when the form is submitted with a non-alphabetical first name.

3.  VerifyInvalid Last Name
Scenario: Test that the application displays an error message for an invalid last name.
Description: Ensure that the error message for an invalid last name is displayed when the form is submitted with a non-alphabetical last name.

4.  Verify Empty Email
Scenario: Test that the application displays an error message when the email field is left empty.
Description: Ensure that the error message for an empty email field is displayed when the form is submitted without an email address.

5.  Verify Invalid Password
Scenario: Test that the application displays an error message for an invalid password.
Description: Ensure that the error message for an invalid password is displayed when the form is submitted with an invalid password.

6.  Verify Weak Password
Scenario: Test that the application displays an error message for a weak password.
Description: Ensure that the error message for a weak password is displayed when the form is submitted with a weak password.

7.  Verify Mismatched Passwords
Scenario: Test that the application displays an error message for mismatched passwords.
Description: Ensure that the error message for mismatched passwords is displayed when the form is submitted with non-matching passwords.

8.  Verify Empty LinkedIn URL
Scenario: Test that no error message is displayed if the LinkedIn URL is left empty.
Description: Ensure that the form can be submitted without an error message if the LinkedIn URL field is empty.

9.  Verify Profile Creation with Valid Data
Scenario: Test that the application successfully creates a user profile with valid data.
Description: Ensure that the profile is created successfully when all mandatory and optional fields are filled with valid data.

10.  Verify Invalid Phone Number
Scenario: Test that the application displays an error message for an invalid phone number.
Description: Ensure that the error message for an invalid phone number is displayed when the form is submitted with an invalid phone number.

11.  Verify Invalid LinkedIn URL
Scenario: Test that the application displays an error message for an invalid LinkedIn URL.
Description: Ensure that the error message for an invalid LinkedIn URL is displayed when the form is submitted with an invalid LinkedIn URL.


Troubleshooting and Workarounds
Issue: Locating the 'Success!' Element

Challenge:
During automation, locating the 'Success!' element within the body of the document has been problematic due to its dynamic timing or behavior. This issue prevents reliable verification of success messages.

Potential Solutions:

Use innerText:

Description: Utilize the innerText property to directly verify the text content of elements. This can help in identifying and asserting the presence of the 'Success!' message.

Example:

const successMessage = await page.locator('selector-for-success-message').innerText();
expect(successMessage).toContain('Success!');

Fix the Message in the HTML:

Description: Modify the HTML to display a fixed 'Success!' message or add a specific class or ID for the success message. This approach can make the element easier to locate and verify.

Example:
html

<!-- HTML modify-->
<div id="success-message">Success!</div>


// Verify code
const successMessage = await page.locator('#success-message').innerText();
expect(successMessage).toBe('Success!');
