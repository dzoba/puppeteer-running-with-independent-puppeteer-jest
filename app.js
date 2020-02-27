console.log("$$$$$$$$$$$$ Node")
const http = require('http');
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
})();


const hostname = '127.0.0.1';
const port = 8765;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  console.log('Ending process')
  process.exit()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});