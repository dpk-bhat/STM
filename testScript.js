const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");

(async function firstScript() {
  try {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");

    await driver.getTitle();

    driver.manage().setTimeouts({ implicit: 1000 });

    let emailOrPhone = await driver.findElement(By.name("emailOrPhone"));
    await emailOrPhone.sendKeys("+918762840329789546");

    let password = await driver.findElement(By.name("password"));
    await password.sendKeys("test");

    let fullName = await driver.findElement(By.name("fullName"));
    await fullName.sendKeys("Linus Torvalds");

    let username = await driver.findElement(By.name("username"));
    await username.sendKeys("linustorvalds3");

    tickMarks = await driver.findElements(
      By.xpath("//span[contains(@class, 'coreSpriteInputError')]")
    );
    // tickMarksArr = tickMarks.keys();
    let tickMarksArr = Object.entries(tickMarks);

    console.log(tickMarksArr);


    // let signUp = await.driver.findElement(By.linkText("Sign up"))
    // console.log(signUp)
    await driver.quit();
  } catch (error) {
    console.log(error);
  }
})();
