import { Given, Then, When } from "@cucumber/cucumber";
import { startApplicationPage, paymentPlanPage } from "../../globalPagesSetup.js";
import { expect } from "@playwright/test";
// const { Given, When, Then } = require('@cucumber/cucumber');



Then('the next button on payment plan page should be disabled by default', async function () {
     await expect(paymentPlanPage.inactiveNextButton).toBeVisible();
    await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();

});

When('the user selects a payment plan', async function () {
   await paymentPlanPage.selectPaymentPlan('upfront');
});

Then('the next button on payment plan page should become active', async function () {
    await expect(paymentPlanPage.activeNextButton).toBeVisible();
    await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});
