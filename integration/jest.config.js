module.exports = {
  preset: `jest-puppeteer`,
  testRegex: `./*\\.test\\.js$`,
  globalTeardown: `./end.js`
}