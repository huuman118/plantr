const db = require("./models");

const dbSync = db
  .sync({ force: true })
  .then(() => console.log("works!"))
  .catch((error) => console.log(`doesn't work!`+ error));

// db.close();
