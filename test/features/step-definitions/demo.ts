import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
        //    demo feature

Given(/^Google page is opened$/ ,async function() {
    await browser.url("https://www.google.com/")
    await browser.pause(1000)
    // console.log(`>>After openthe browser:`)
    // console.log(`>>Browser object: ${JSON.stringify(browser)}`)
})

When(/^Search with (.*)$/ ,async function(searchItem) {
    let elem = await $("[name=q]")
    let btn = await $("#L2AGLb")
    await btn.click()
    await elem.setValue(searchItem)
    await browser.keys("Enter")
    // console.log(`>>Element object: ${JSON.stringify(browser)}`)
})

Then(/^Click on the first test result$/, async function () {
    let elem = await $('<h3>')
    elem.click()
})

Then(/^URL should match (.*)$/, async function(expectedURL) {
    await browser.waitUntil( async function() {
        return await browser.getTitle()==="WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    }, 
    {timeout: 20000, interval: 500, timeoutMsg: `Failed loading WDIO web page: ${await browser.getTitle()}`})
    console.log(`>>Expected url: ${expectedURL}`)
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)

})
        //   web interactions

Given(/^A web page is opened$/, async function () {
    await browser.url("https://www.amazon.com")
    await browser.setTimeout({implicit: 5000, pageLoad: 3000})
    await browser.maximizeWindow()
    
})
When(/^Perform web interactions$/, async function() {

//1. input number
//     let num = 12345
//     let strNum = num.toString()
//     let elem = $("[type=number]")
//     await elem.click()

//     for (let i = 0; i < strNum.length; i++) {
//         let charStr = strNum.charAt(i);
//         await browser.pause(1000)
//         await browser.keys(charStr)

// 2.  dropdown
//     let elem = $('//select/option[@selected="selected"]')
//     let val = await elem.getText()
//     chai.expect(val).to.equal('Please select an option')

// 3. select a specific option
 //     let dropElem = $("#dropdown")
//     // await dropElem.selectByVisibleText("Option 1")
//     await dropElem.selectByAttribute("value", "2")
//    
// 4. get a list of options 
// let elemArr = await $$("//select/option")
// let arr = []
// for (let i = 0; i < elemArr.length; i++) {
//     let elem = elemArr[i];
//     let val = await elem.getText()
//     arr.push(val)
//     console.log(val)
// }
// console.log(`>> Options Array: ${arr}`) 

// 5.checkboxes
        // let eleArr = await $$('//form[@id="checkboxes"]/input')
        
        // for (let i = 0; i < eleArr.length; i++) {
        //     let eleSelect = eleArr[i];
        //     if (!await eleSelect.isSelected()) {
        //         eleSelect.click()
        //     }
            
        // }
    // 6.Open new windows

    //     await $('=Click Here').click()
    //     await (await $('=Elemental Selenium')).click()
    //     let curentWindTitle = await browser.getTitle()
    //     let handleParentWind = await browser.getWindowHandle()
    //     console.log(`>>Curent window title: ${curentWindTitle}`);
        
    // // 7.Switch to specific window

    //     let handleWinds = await browser.getWindowHandles()

    //     for (let i = 0; i < handleWinds.length; i++) {
    //         console.log(`>>Windows handle: ${handleWinds[i]}`)
    //         await browser.switchToWindow(handleWinds[i]) 
    //         curentWindTitle = await browser.getTitle() 
    //         if (curentWindTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro") {
    //             await browser.switchToWindow(handleWinds[i])
    //             let headerTxtElemSelect = await $(`<h1>`).getText()
    //             console.log(`>>Header Text: ${headerTxtElemSelect}`);
    //             break
                
    //         } 
    // // switch back to parent windows    
    //     await browser.switchToWindow(handleParentWind)
    //     let parentWindTxt = await $(`<h3>`).getText()
    //     console.log(`>>ParentWindowHeaderTitle: ${parentWindTxt}`);

    //     }
    // 8.Heandling Alerts

    // --1.acceptAlert
//     await $("button=Click for JS Alert").click()
//     if (await browser.isAlertOpen()) {
//         await browser.acceptAlert()
//     }

//     // --2.Cancel alert
//     await  $("button=Click for JS Confirm").click()
//     if (await browser.isAlertOpen()) {
//         await browser.dismissAlert()
//     }
// // --3.Alert Text
//     await $("button=Click for JS Prompt").click()
//     if (await browser.isAlertOpen()) {
//         let textAlert = await browser.getAlertText()
//         console.log(`>>textAlert: ${textAlert}`);
//         await browser.sendAlertText("Hello alert ...")
//         await browser.acceptAlert()
//         await browser.pause(2000)
        
//     }
// 9.File upload
    // await $("#file-upload").addValue(`${process.cwd()}/data/fileupload/dummy.txt`)
    // await $("#file-submit").click()
                     // 10.Frame
    // await $(`=iFrame`).click()
    // let elemF = await $(`#mce_0_ifr`)
    // await browser.switchToFrame(elemF)
    // await (await $(`#tinymce`)).click()
    // await browser.keys(["Control", "A"])
    // await browser.pause(1000)
    // await browser.keys("Delete")

    // await $(`#tinymce`).addValue(`Hi ...`)
    // await browser.keys("Enter")
    // await $(`#tinymce`).addValue(`Mihaela`)
    // await browser.switchToParentFrame()

// 10.Sroll introview
    // await $(`span=Best Sellers in Books`).scrollIntoView()
    
// 11.Scroll down
    await browser.execute(() => {
        window.scrollBy(0,window.innerHeight)
     });
    await browser.pause(2000)
// 12.Scroll up
    await browser.execute(() => {
    window.scrollBy(0,-window.innerHeight);
    });
    await browser.pause(2000)
// 13.Invisible portion ...=>> window object(scrollTo)
    await browser.execute(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })
    await browser.pause(2000)

    await browser.execute(() => {
        window.scrollTo(0, document.body.scrollTop)
    })
    // await browser.debug();


})