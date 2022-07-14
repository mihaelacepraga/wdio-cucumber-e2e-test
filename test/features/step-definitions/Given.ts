import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to a invertory web app$/, async function () {
    // 1.Login to inventory app
    await browser.url("https://www.saucedemo.com/")
    await browser.setTimeout({implicit: 5000, pageLoad: 3000})
    await browser.maximizeWindow()
    /**2.Login to inventory */
    await $("#user-name").setValue(process.env.TEST_STD_USERNAME)
    await browser.pause(1000)
    await $("#password").setValue(process.env.TEST_STD_PASSWORD)
    await $("#login-button").click()
    // await browser.pause(1000)
    // // 3.Reload session
    // await browser.reloadSession()
    // await browser.url("https://www.saucedemo.com/")
    // await $("#user-name").setValue("problem_user")
    // await $("#password").setValue("secret_sauce")
    // await $("#login-button").click()
    // // 4,Go back and forward_<- & ->
    // await browser.pause(2000)
    // await browser.back()
    // await browser.pause(1000)
    // await browser.forward()
    // await browser.debug();


    
} )