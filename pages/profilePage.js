// Page Object Model for Profile Page
class ProfilePage {

    constructor(page) {

        this.page = page;
        this.firstNameInput = page.getByLabel('First Name (mandatory):');
        this.lastNameInput = page.getByLabel('Last Name (mandatory):');
        this.emailInput = page.getByLabel('Email (mandatory):');
        this.passwordInput = page.getByLabel('Password (mandatory):', { exact: true });
        this.confirmPasswordInput = page.getByLabel('Confirm Password (mandatory):');
        this.dobInput = page.getByLabel('Date ofBirth (optional):');
        this.phoneNumber = page.getByLabel('Phone Number (optional):');
        this.adressInput = page.getByLabel('Address (optioal):');
        this.linkedInInput = page.locator('#linkedIn');
        this.githubInput = page.locator('#github');
        this.submitButton = page.locator('input[type="submit"]');
    }

    // Fill in the form's mandatory fields
    async fillMandatoryFields(firstName, lastName, email, password, confirmPassword) {

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    // Fill in the form's optional fields
    async fillOptionalFields(dob, phone, address, github, linkedIn) {

        if (dob) await this.dobInput.fill(dob);
        if (phone) await this.phoneNumber.fill(phone);
        if (address) await this.adressInput.fill(address);
        if (github) await this.githubInput.fill(github);
        if (linkedIn) await this.linkedInInput.fill(linkedIn);
    }

    //Select gender from radio button options
    async selectGender(gender) {

        await this.page.locator(`input[name="gender"][value="${gender}"]`).check();

    }

    //Submit form
    async submitForm() {

        await this.submitButton.click();
    }

    async handleDialog(expectedMessage) {

        this.page.on('dialog', async dialog => {

            // Check that the dialog type is 'alert'.
            const isAlert = dialog.type() === 'alert';

            // Check that the dialog message contains the specified text
            const containsExpectedMessage = dialog.message().includes(expectedMessage);
            if (isAlert && containsExpectedMessage) {
                console.log(`The expected alert message is displayed: ${expectedMessage}`);
            } else {
                console.error("The alert message was not found.");
            }

            // Accept the dialog (click on the “OK” button)
            await dialog.accept();
        });
    }
    //Check message success
    async verifySuccessMessage() {

        try {
         //Check whether the element with the text “Success!” is present on the page
            const successElement = await expect(page.getByText('Success!'));

            if (successElement.isVisible()) {
                console.log('Success! is visible');
            } else {
                console.error('Success! is not visible');
            }
        } catch (error) {
            console.error("error not found");
        }

    }

}

module.exports = ProfilePage;