module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
  "setupFilesAfterEnv": ["./end.js"]
}