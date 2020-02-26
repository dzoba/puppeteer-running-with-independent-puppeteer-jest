const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      `--remote-debugging-port=21222`
    ]
  });
  const page = await browser.newPage();
  await page.goto('https://dzoba.com');
  await page.screenshot({path: 'example.png'});

  await page.evaluate(_ => {
    console.log('I am really in the page', document.body)
  });

  setTimeout(async () => {
    console.log('Ending app one')
    await browser.close();
  }, 30000)
})();