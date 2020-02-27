console.log(`%%%%% Running file which starts puppeteer independent of jest`)
const http = require(`http`);
const puppeteer = require(`puppeteer`);

// Start puppeteer
(async () => {
  const browser = await puppeteer.launch({
    args: [
      `--remote-debugging-port=21222`
    ]
  });
  const page = await browser.newPage();
  await page.goto(`https://dzoba.com`);
  const title = await page.title();
  console.log(`%%%%% Independent puppeteer has retrieved title: ${title}`)
  await page.evaluate(_ => {
    console.log(`%%%%% This console log goes into the puppeteer-controlled page`)
  });
})();


// Open port which will allow tests to signal when they are finished
const hostname = `127.0.0.1`;
const port = 8765;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader(`Content-Type`, `text/plain`);
  res.end(`Hello World`);
  console.log(`%%%%% Ending process`)
  process.exit()
});

server.listen(port, hostname, () => {
  console.log(`%%%%% Exit server running at http://${hostname}:${port}/`);
});