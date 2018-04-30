const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr");

const Gardner = db.define("gardners", {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define("plots", {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define("vegetables", {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

Plot.belongsTo(Gardner);

Gardner.hasOne(Plot);

Vegetable.belongsToMany(Plot, { through: "PlotVegetable" });
Plot.belongsToMany(Vegetable, { through: "PlotVegetable" });

Gardner.belongsTo(Vegetable, { as: "favorite_vegetable" });

module.exports = { db, Gardner, Plot, Vegetable };
