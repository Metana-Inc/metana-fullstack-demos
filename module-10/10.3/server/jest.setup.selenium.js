import { Builder } from 'selenium-webdriver';
import 'chromedriver';

global.driver = new Builder().forBrowser('chrome').build();

afterAll(async () => {
  await global.driver.quit();
});
