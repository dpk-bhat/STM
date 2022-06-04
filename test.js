const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

 
async function example(){
 
       var searchString = "Automation testing with Selenium";
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("https://www.instagram.com/accounts/login/");
            
        //To send a search query by passing the value in searchString.
        let username = await driver.findElement(By.name("username"))
        username.sendKeys("test12345",Key.RETURN);
        
        let password = await driver.findElement(By.name("password"))
        password.sendKeys("Stm@123",Key.RETURN);

        //Verify the page title and print it
        await driver.findElement(By.xpath("//button[@type='submit']")).click();
 
        //It is always a safe practice to quit the browser after execution
        await driver.quit();
 
}
 
example()

