const http = require(`http`);

afterAll(() => {
  // Calling this url will end the other process.
  console.log(`%%%%% Calling exit server from tests`)
  http.get(`http://127.0.0.1:8765`)
});