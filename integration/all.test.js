describe('Dzoba.com', () => {
  beforeAll(async () => {
    await page.goto('https://dzoba.com');
  });

  it('should be titled "Chris Dzoba"', async () => {
    await expect(page.title()).resolves.toMatch('Chris Dzoba');
  });
});