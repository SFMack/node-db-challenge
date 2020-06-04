const APP = require("./api/server.js");

const PORT = 5000;

APP.listen(PORT, () => {
  console.log(`\nServer running on port ${PORT}\n`);
});
