const http = require(`http`);

module.exports = async function testTeardown() {
  console.log(`%%%%% Calling exit server from tests`)
  http.get(`http://127.0.0.1:8765`)
};