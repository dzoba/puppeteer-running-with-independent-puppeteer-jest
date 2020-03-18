console.log(`%%%%% Running file which starts puppeteer independent of jest`);
const http = require(`http`);
const puppeteer = require(`puppeteer`);

// Start puppeteer
(async () => {
  // try {
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/google-chrome',
      args: [
        `--remote-debugging-port=21222`
      ]
    });
    const page = await browser.newPage();
    await page.goto("https://example.com");
    const title = await page.title();
    console.log(`%%%%% Independent puppeteer has retrieved title: ${title}`)
    const isActuallyChrome = await page.evaluate(() => {
      for (var i=0; i<navigator.plugins.length; i++){
        if (navigator.plugins[i].name == 'Chrome PDF Viewer'){
          return true;
        }
      }
      return false;
    });
    console.log(`%%%%% isActuallyChrome: ${isActuallyChrome}`)

    })
  // } catch (e) {
  //   console.log(e.message)
  // }
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
