describe(`run recipes`, () => {
  describe(`placeholder`, () => {
    test(`test-1`, () => {
      console.log("Test in integration folder")
      await page.goto(`http://dzoba.com`, { waitUntil: `load` })
      console.log('%%%%%% Page', page)
      console.log('%%%%%% Browser', browser)
      expect(true).toBe(true)
    })
  })
})
