# Playwright Test Runner With JavaScript

An example project demonstrating automation of Playwright tests using the Page Object Design Pattern framework.

## Test Scenarios

### Verify Empty Mandatory Fields
- **Scenario**: Test that the application displays an error message when mandatory fields are left empty.
- **Description**: Ensure that the error message for empty mandatory fields is displayed when the form is submitted without filling in the required fields.

### Verify Invalid First Name
- **Scenario**: Test that the application displays an error message for an invalid first name.
- **Description**: Ensure that the error message for an invalid first name is displayed when the form is submitted with a non-alphabetical first name.

### Verify Invalid Last Name
- **Scenario**: Test that the application displays an error message for an invalid last name.
- **Description**: Ensure that the error message for an invalid last name is displayed when the form is submitted with a non-alphabetical last name.

### Verify Empty Email
- **Scenario**: Test that the application displays an error message when the email field is left empty.
- **Description**: Ensure that the error message for an empty email field is displayed when the form is submitted without an email address.

### Verify Invalid Password
- **Scenario**: Test that the application displays an error message for an invalid password.
- **Description**: Ensure that the error message for an invalid password is displayed when the form is submitted with an invalid password.

### Verify Weak Password
- **Scenario**: Test that the application displays an error message for a weak password.
- **Description**: Ensure that the error message for a weak password is displayed when the form is submitted with a weak password.

### Verify Mismatched Passwords
- **Scenario**: Test that the application displays an error message for mismatched passwords.
- **Description**: Ensure that the error message for mismatched passwords is displayed when the form is submitted with non-matching passwords.

### Verify Empty LinkedIn URL
- **Scenario**: Test that no error message is displayed if the LinkedIn URL is left empty.
- **Description**: Ensure that the form can be submitted without an error message if the LinkedIn URL field is empty.

### Verify Profile Creation with Valid Data
- **Scenario**: Test that the application successfully creates a user profile with valid data.
- **Description**: Ensure that the profile is created successfully when all mandatory and optional fields are filled with valid data.

### Verify Invalid Phone Number
- **Scenario**: Test that the application displays an error message for an invalid phone number.
- **Description**: Ensure that the error message for an invalid phone number is displayed when the form is submitted with an invalid phone number.

### Verify Invalid LinkedIn URL
- **Scenario**: Test that the application displays an error message for an invalid LinkedIn URL.
- **Description**: Ensure that the error message for an invalid LinkedIn URL is displayed when the form is submitted with an invalid LinkedIn URL.

## Troubleshooting and Workarounds

### Issue: Locating the 'Success!' Element

**Challenge**: During automation, locating the 'Success!' element within the body of the document has been problematic due to its dynamic timing or behavior. This issue prevents reliable verification of success messages.

#### Potential Solutions:

1. **Use innerText**:
   - **Description**: Utilize the `innerText` property to directly verify the text content of elements. This can help in identifying and asserting the presence of the 'Success!' message.
   - **Example**:
     ```javascript
     const successMessage = await page.locator('selector-for-success-message').innerText();
     expect(successMessage).toContain('Success!');
     ```

2. **Fix the Message in the HTML**:
   - **Description**: Modify the HTML to display a fixed 'Success!' message or add a specific class or ID for the success message. This approach can make the element easier to locate and verify.
   - **Example**:
     ```html
     <div id="success-message">Success!</div>
     ```
   - **Verify code**:
     ```javascript
     const successMessage = await page.locator('#success-message').innerText();
     expect(successMessage).toBe('Success!');
     ```
