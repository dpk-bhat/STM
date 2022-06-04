const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

 
async function example(){
 
       var searchString = "Automation testing with Selenium";
 
       //To wait for browser to build and launch properly
    var options = new chrome.Options();
    options.addArguments("--incognito");
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");
    await driver.getTitle();
    driver.manage().setTimeouts({implicit: 10000});
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("https://www.instagram.com/accounts/login/");
            
        //To send a search query by passing the value in searchString.
        let username = await driver.findElement(By.xpath("//input[@type='text']"))
        username.sendKeys("testingaccount5436");
        
        let password = await driver.findElement(By.xpath("//input[@type='password']"))
        password.sendKeys("Test@123");

        //Verify the page title and print it
        await delay(3000);
        await driver.findElement(By.xpath("//button[@type='submit']")).click();

        await delay(3000);
        await driver.findElement(By.xpath("//button[contains(text(),'Not Now')]")).click();

        await delay(2000);
        await driver.findElement(By.xpath("//button[contains(text(),'Not Now')]")).click();

        await delay(3000);
        // element = driver.findElement(By.xpath("//textarea"));
        // driver.executeScript("arguments[0].scrollIntoView()", element);
        // // driver.sleep(300);
        // element.click();
        // element.sendKeys("Good One",Key.ENTER);

        //It is always a safe practice to quit the browser after execution

        await driver.quit();
 
}
 
example()

