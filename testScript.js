const { Builder, By, Key, until } = require("selenium-webdriver");
const chai= require("chai");
const expect = chai.expect;
const assert = chai.assert;
require("chromedriver");

function delay(milliseconds){
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}
describe('STM Assignment', () => {
  it('Mobile Number: Nominal & Password: Nominal -> Test Case: Valid ', async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");
    await driver.getTitle();
    driver.manage().setTimeouts({implicit: 10000});

    let emailOrPhone = await driver.findElement(By.name("emailOrPhone"));
    await emailOrPhone.sendKeys("+918762840329");

    let username = await driver.findElement(By.name("username"));
    await username.sendKeys("qwertymnbv2204");
    await delay(1000);

    let password = await driver.findElement(By.name("password"));
    await password.sendKeys("test@123");

    let fullName = await driver.findElement(By.name("fullName"));
    await fullName.sendKeys("Linus Torvalds");

    await delay(1000);
    tickMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputAccepted')]"));
    let tickMarksArr = Object.entries(tickMarks);
    expect(tickMarksArr.length).to.equal(3);

    await delay(1000);
    let signUp = await driver.findElement(By.xpath("//button[@type='submit']")).isEnabled()
    expect(signUp).to.equal(true);
    await driver.quit();
  });

  it('Sign: Inavlid, Mobile Number: Nominal & Password: Nominal -> Test Case: Invalid ', async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");
    await driver.getTitle();
    driver.manage().setTimeouts({implicit: 10000});

    let emailOrPhone = await driver.findElement(By.name("emailOrPhone"));
    await emailOrPhone.sendKeys("*918762840329");

    let username = await driver.findElement(By.name("username"));
    await username.sendKeys("qwertymnbv2204");
    await delay(1000);

    let password = await driver.findElement(By.name("password"));
    await password.sendKeys("test@123");

    let fullName = await driver.findElement(By.name("fullName"));
    await fullName.sendKeys("Linus Torvalds");

    await delay(1000);
    tickMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputAccepted')]"));
    let tickMarksArr = Object.entries(tickMarks);
    expect(tickMarksArr.length).to.equal(2);

    crossMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputError')]"));
    let crossMarksArr = Object.entries(crossMarks);
    expect(crossMarksArr.length).to.equal(1);

    await delay(1000);
    let signUp = await driver.findElement(By.xpath("//button[@type='submit']")).isEnabled()
    expect(signUp).to.equal(true);
    await driver.quit();
  });

  it('Mobile Number: Nominal & Password: Min- -> Test Case: Invalid ', async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");
    await driver.getTitle();
    driver.manage().setTimeouts({implicit: 10000});

    let emailOrPhone = await driver.findElement(By.name("emailOrPhone"));
    await emailOrPhone.sendKeys("+918762840329");

    let username = await driver.findElement(By.name("username"));
    await username.sendKeys("qwertymnbv2204");
    await delay(1000);

    let password = await driver.findElement(By.name("password"));
    await password.sendKeys("test1");

    let fullName = await driver.findElement(By.name("fullName"));
    await fullName.sendKeys("Linus Torvalds");

    await delay(1000);
    tickMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputAccepted')]"));
    let tickMarksArr = Object.entries(tickMarks);
    expect(tickMarksArr.length).to.equal(3);

    await delay(1000);
    let signUp = await driver.findElement(By.xpath("//button[@type='submit']")).isEnabled()
    expect(signUp).to.equal(false);
    await driver.quit();
  });

  it('Mobile Number: Nominal & Password: Min -> Test Case: Valid ', async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");
    await driver.getTitle();
    driver.manage().setTimeouts({implicit: 10000});

    let emailOrPhone = await driver.findElement(By.name("emailOrPhone"));
    await emailOrPhone.sendKeys("+918762840329");

    let username = await driver.findElement(By.name("username"));
    await username.sendKeys("qwertymnbv2204");
    await delay(1000);

    let password = await driver.findElement(By.name("password"));
    await password.sendKeys("test@1");

    let fullName = await driver.findElement(By.name("fullName"));
    await fullName.sendKeys("Linus Torvalds");

    await delay(1000);
    tickMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputAccepted')]"));
    let tickMarksArr = Object.entries(tickMarks);
    expect(tickMarksArr.length).to.equal(3);

    await delay(1000);
    let signUp = await driver.findElement(By.xpath("//button[@type='submit']")).isEnabled()
    expect(signUp).to.equal(true);
    await driver.quit();
  });

  it('Mobile Number: Min- & Password: Nominal -> Test Case: Invalid ', async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");
    await driver.getTitle();
    driver.manage().setTimeouts({implicit: 10000});

    let emailOrPhone = await driver.findElement(By.name("emailOrPhone"));
    await emailOrPhone.sendKeys("+91876284032");

    let username = await driver.findElement(By.name("username"));
    await username.sendKeys("qwertymnbv2204");
    await delay(1000);

    let password = await driver.findElement(By.name("password"));
    await password.sendKeys("test@123");

    let fullName = await driver.findElement(By.name("fullName"));
    await fullName.sendKeys("Linus Torvalds");

    await delay(1000);
    tickMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputAccepted')]"));
    let tickMarksArr = Object.entries(tickMarks);
    expect(tickMarksArr.length).to.equal(2);

    crossMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputError')]"));
    let crossMarksArr = Object.entries(crossMarks);
    expect(crossMarksArr.length).to.equal(1);

    await delay(1000);
    let signUp = await driver.findElement(By.xpath("//button[@type='submit']")).isEnabled()
    expect(signUp).to.equal(true);
    await driver.quit();
  });

  it('Mobile Number: Max+ & Password: Min -> Test Case: Invalid ', async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");
    await driver.getTitle();
    driver.manage().setTimeouts({implicit: 10000});

    let emailOrPhone = await driver.findElement(By.name("emailOrPhone"));
    await emailOrPhone.sendKeys("+9187628403290");

    let username = await driver.findElement(By.name("username"));
    await username.sendKeys("qwertymnbv2204");
    await delay(1000);

    let password = await driver.findElement(By.name("password"));
    await password.sendKeys("test@123");

    let fullName = await driver.findElement(By.name("fullName"));
    await fullName.sendKeys("Linus Torvalds");

    await delay(1000);
    tickMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputAccepted')]"));
    let tickMarksArr = Object.entries(tickMarks);
    expect(tickMarksArr.length).to.equal(2);

    crossMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputError')]"));
    let crossMarksArr = Object.entries(crossMarks);
    expect(crossMarksArr.length).to.equal(1);

    await delay(1000);
    let signUp = await driver.findElement(By.xpath("//button[@type='submit']")).isEnabled()
    expect(signUp).to.equal(true);
    await driver.quit();
  });

  it('Mobile Number: Nominal & Password: Min- -> Test Case: Invalid ', async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");
    await driver.getTitle();
    driver.manage().setTimeouts({implicit: 10000});

    let emailOrPhone = await driver.findElement(By.name("emailOrPhone"));
    await emailOrPhone.sendKeys("+91876284032");

    let username = await driver.findElement(By.name("username"));
    await username.sendKeys("qwertymnbv2204");
    await delay(1000);

    let password = await driver.findElement(By.name("password"));
    await password.sendKeys("test@1");

    let fullName = await driver.findElement(By.name("fullName"));
    await fullName.sendKeys("Linus Torvalds");

    await delay(1000);
    tickMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputAccepted')]"));
    let tickMarksArr = Object.entries(tickMarks);
    expect(tickMarksArr.length).to.equal(2);

    crossMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputError')]"));
    let crossMarksArr = Object.entries(crossMarks);
    expect(crossMarksArr.length).to.equal(1);

    await delay(1000);
    let signUp = await driver.findElement(By.xpath("//button[@type='submit']")).isEnabled()
    expect(signUp).to.equal(true);
    await driver.quit();
  });

  xit('Mobile Number: Min- & Password: Nominal -> Test Case: Invalid ', async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.instagram.com/accounts/emailsignup/?hl=en");
    await driver.getTitle();
    driver.manage().setTimeouts({implicit: 10000});

    let emailOrPhone = await driver.findElement(By.name("emailOrPhone"));
    await emailOrPhone.sendKeys("+9187628403290");

    let username = await driver.findElement(By.name("username"));
    await username.sendKeys("qwertymnbv2204");
    await delay(1000);

    let password = await driver.findElement(By.name("password"));
    await password.sendKeys("test1");

    let fullName = await driver.findElement(By.name("fullName"));
    await fullName.sendKeys("Linus Torvalds");

    await delay(1000);
    tickMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputAccepted')]"));
    let tickMarksArr = Object.entries(tickMarks);
    expect(tickMarksArr.length).to.equal(2);

    crossMarks = await driver.findElements(By.xpath("//span[contains(@class, 'coreSpriteInputError')]"));
    let crossMarksArr = Object.entries(crossMarks);
    expect(crossMarksArr.length).to.equal(1);

    await delay(1000);
    let signUp = await driver.findElement(By.xpath("//button[@type='submit']")).isEnabled()
    expect(signUp).to.equal(false);
    await driver.quit();
  });
  // it('Should return -1 if value not present', ()=>{
  //   assert.strictEqual([1,2,3].indexOf(5), 'Failed to find')
  // });
});
