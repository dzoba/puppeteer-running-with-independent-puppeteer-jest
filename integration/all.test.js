describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://dzoba.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Chris Dzoba');
  });
});