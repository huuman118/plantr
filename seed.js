const { db } = require("./models");
const { Vegetable } = require("./models");

const dbSync = db
  .sync({ force: true })
  .then(() => console.log("works!"))
  .then(() => {
    return Vegetable.create({
      name: "Tomato",
      color: "red",
      planted_on: Date.now()
    });
  })
  .catch(error => console.log(`doesn't work!` + error))
  .finally(() => db.close());

// const firstVeg = Vegetable.create({
//   name: "Tomato",
//   color: "red",
//   planted_on: Date.now()
// });

// firstVeg.save();
// db.close();

// console.log(Date.now());
