const webdriver = require('selenium-webdriver');

const proxyConfig = {
  proxyType: 'manual',
  httpProxy: 'http://localhost:8081',
  noProxy: 'localhost, 127.0.0.1',
};

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  // .setProxy(proxyConfig)
  .build();
driver.getWindowHandle().then(() => {
  return driver.get('http://google.com')
}).then(() => {
  return driver.getCurrentUrl()
}).then(url => { console.log(url); });
