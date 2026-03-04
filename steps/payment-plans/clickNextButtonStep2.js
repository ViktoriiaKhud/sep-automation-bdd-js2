import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

// const { Given, When, Then } = require('@cucumber/cucumber');

Given('user has completed step one with valid information', async function () {
});

Given('user is on step two of the enrollment process', async function () {
});

Then('the next button is disabled by default', async function () {
});

When('user clicks upfront payment option', async function () {
});

Then('the next button will be enabled', async function () {
});

When('user clicks installments payment option', async function () {
});
