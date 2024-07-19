const { test, expect } = require('@playwright/test');
const ProfilePage = require('../pages/ProfilePage');
const testData = require('../data/users.json', 'utf-8');
const formData = require('../data/datasets.json', 'utf-8');
//const  ProfilePage  = require('../pages/phoneNumberPage');

test.describe('User Profile Creation Tests', () => {
  let profilePage;

  test.beforeEach(async ({ page }) => {
    profilePage = new ProfilePage(page);
    await page.goto('https://qa-assessment.pages.dev/');
    //await page.goto("file:///D:/xampp/htdocs/TestPlaywright/inscript/index.html");
    await page.waitForLoadState('networkidle');


  });

  test.afterEach(async ({ page }) => {
    // Gracefully close up everything
    await page.close();
  });

  test('should display error message for empty mandatory fields', async ({ page }) => {

    await profilePage.handleDialog(testData.errorMessageFirstName);

    await profilePage.submitForm();
    await page.waitForTimeout(2000);

  });

  test('should display error for invalid first name', async ({ page }) => {
    await profilePage.handleDialog(testData.errorMessageFNAlphabetical);
    await profilePage.fillMandatoryFields(formData.InvalidfirstName, formData.LastName, formData.Email, formData.Password, formData.Password);
    await profilePage.submitForm();
    await page.waitForTimeout(2000);
  });

  test('should display error for invalid last name', async ({ page }) => {

    await profilePage.handleDialog(testData.errorMessageLNAlphabetical);
    await profilePage.fillMandatoryFields(formData.FirstName, formData.InvalidfastName, formData.Email, formData.Password, formData.Password);
    await profilePage.submitForm();
    await page.waitForTimeout(2000);

  });

  test('should display error for empty email', async ({ page }) => {
    await profilePage.handleDialog(testData.errorMessageEmail);
    await profilePage.fillMandatoryFields(formData.FirstName, formData.LastName, formData.Empty, formData.Password, formData.Password);
    await profilePage.fillOptionalFields(formData.Empty, formData.Empty, formData.Empty, formData.Empty, formData.LinkedinURL);
    await profilePage.submitForm();
    await page.waitForTimeout(2000);

  });

  test.only('should display error for invalid password', async ({ page }) => {
    await profilePage.handleDialog(testData.errorMessagePassword);
    await profilePage.fillMandatoryFields(formData.FirstName, formData.LastName, formData.Email, formData.Empty, formData.Empty);
    await profilePage.submitForm();
    await profilePage.verifySuccessMessage();
    await page.waitForTimeout(2000);

  });

  test('should display error for the password is weak ', async ({ page }) => {
    await profilePage.handleDialog(testData.errorMessageEmailWeak);
    await profilePage.fillMandatoryFields(formData.FirstName, formData.LastName, formData.Email, formData.PasswordWeak, formData.PasswordWeak);
    await profilePage.submitForm();
    await page.waitForTimeout(2000);

  });

  test('should display error for mismatched passwords', async ({ page }) => {
    await profilePage.handleDialog(testData.errorMessageMatch);
    await profilePage.fillMandatoryFields(formData.FirstName, formData.LastName, formData.Email, formData.Password, formData.PasswordWeak);
    await profilePage.submitForm();
    await page.waitForTimeout(2000);

  });

  test('should not display an error if the LinkedIn URL is empty', async ({ page }) => {

    await profilePage.fillMandatoryFields(formData.FirstName, formData.LastName, formData.Email, formData.Password, formData.Password);
    await profilePage.fillOptionalFields(formData.dob, formData.mobileNumber, formData.address, formData.GithubURL, formData.Empty);
    await profilePage.submitForm();

    await page.waitForTimeout(2000);

  });

  test('should create profile with valid data', async ({ page }) => {
    await profilePage.fillMandatoryFields(formData.FirstName, formData.LastName, formData.Email, formData.Password, formData.Password);
    await profilePage.selectGender(formData.Sexe1);
    await profilePage.fillOptionalFields(formData.dob, formData.mobileNumber, formData.address, formData.GithubURL, formData.LinkedinURL);
    profilePage.submitForm();
    await profilePage.verifySuccessMessage(); 

    

  });

  // Test cases for other optional fields
  test('should display error for invalid phone number', async ({ page }) => {

    await profilePage.fillMandatoryFields(formData.FirstName, formData.LastName, formData.Email, formData.Password, formData.Password);
    await profilePage.fillOptionalFields(formData.Empty, formData.mobileNumber, formData.Empty, formData.Empty, formData.Empty);
    await profilePage.submitForm();
    await profilePage.verifySuccessMessage();
    await page.waitForTimeout(2000);

  });

  test('should display error for invalid LinkedIn URL', async ({ page }) => {

    await page.waitForTimeout(2000);
    await profilePage.fillMandatoryFields(formData.FirstName, formData.LastName, formData.Email, formData.Password, formData.Password);
    await profilePage.fillOptionalFields(formData.Empty, formData.Empty, formData.Empty, formData.Empty, formData.LinkedinURL);
    //await page.pause();
    await profilePage.submitForm();
    await profilePage.verifySuccessMessage();

  });
  
});
