console.log(`%%%%% Running file which starts puppeteer independent of jest`);
const http = require(`http`);
const puppeteer = require(`puppeteer`);

// Start puppeteer
(async () => {

    const browser = await puppeteer.launch({
      executablePath: 'google-chrome-unstable',
      headless: false,
      args: [
        `--remote-debugging-port=21222`,
        `--no-sandbox`,
        `--disable-gpu`,
        `--disable-setuid-sandbox`,
        `--disable-software-rasterizer`,
        `--disable-dev-shm-usage`,
      ]
    });

    const page = await browser.newPage();
    await page.goto("https://example.com");
    const title = await page.title();
    console.log(`%%%%% Independent puppeteer has retrieved title: ${title}`)
    const browserVersion = await page.browser().version();
    console.log(`%%%%% browserVersion: ${browserVersion}`)
})();

// Open port which will allow tests to signal when they are finished
const hostname = `127.0.0.1`;
const port = 8765;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader(`Content-Type`, `text/plain`);
  res.end(`Hello World`);
  console.log(`%%%%% Ending process`);
  process.exit();
});

server.listen(port, hostname, () => {
  console.log(`%%%%% Exit server running at http://${hostname}:${port}/`);
});
