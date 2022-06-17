import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/ ,async function() {
    await browser.url("https://www.google.com/")
    await browser.pause(1000)
})

When(/^Search with (.*)$/ ,async function(searchItem) {
    let elem = await $("[name=q]")
    let btn = await $("#L2AGLb")
    await btn.click()
    await elem.setValue(searchItem)
    await browser.keys("Enter")
})
Then(/^Click on the first test result$/, async function () {
    let elem = await $('<h3>')
    elem.click()
})
Then(/^URL should match(.*)$/, async function(ExpectedURL) {
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)

    
})