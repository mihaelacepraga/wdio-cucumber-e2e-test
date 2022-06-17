import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
        //    demo feature

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

        //   web interactions
Given(/^A web page is opened$/, async function () {
    await browser.url("/inputs")
    await browser.setTimeout({implicit: 5000, pageLoad: 1000})
    await browser.maximizeWindow()
    
})
When( /^Perform web interactions$/, async function () {
    let num = 12345
    let strNum = num.toString()
    let elem = $("[type=number]")
    await elem.click()

    for (let i = 0; i < strNum.length; i++) {
        let charStr = strNum.charAt(i);
        await browser.pause(1000)
        await browser.keys(charStr)
    
    }
    await browser.debug()

    
})