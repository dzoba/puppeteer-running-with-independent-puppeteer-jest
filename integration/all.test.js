describe(`run recipes`, () => {
  describe(`placeholder`, () => {
    test(`test-1`, () => {
      console.log("Test in integration folder")
      page.goto(`http://dzoba.com`, { waitUntil: `load` })
      expect(true).toBe(true)
    })
  })
})
