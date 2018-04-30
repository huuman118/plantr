const db = require("./models");

const dbSync = db
  .sync({ force: true })
  .then(() => console.log("works!"))
  .catch(() => console.log(`doesn't work!`));

db.close();
