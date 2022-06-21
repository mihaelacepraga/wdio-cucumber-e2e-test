import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (noOfProducts) {
    if(!noOfProducts) throw Error(`Invalid number provided: ${noOfProducts}`);
    let elemArr = await $$(".inventory_item_name")
    chai.expect(elemArr.length).to.be.equal(parseInt(noOfProducts))
   

})
Then(/^Validate all products have valid price$/, async function () {
    // 1.get price list
    let elemArr = await $$(".inventory_item_price")
    let priceStrArr = []
    for (let i = 0; i < elemArr.length; i++) {
         let priceStr  = await elemArr[i].getText();

         priceStrArr.push(priceStr)
         console.log(`>>price list with $: ${priceStrArr}`);
        
   }
//    2.convert string in number
    let priceNumArr = await priceStrArr.map(ele => +(ele.replace("$", "")))
    console.log(` >>Convert string in number: ${priceNumArr}`);
    // 3.Assert if any value is >0
    let invalidPricearray = await priceNumArr.filter((ele) => ele <=0)
    chai.expect(invalidPricearray.length).to.be.equal(0)


    
})