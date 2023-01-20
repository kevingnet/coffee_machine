module.exports = app => {
  const coffees = require("../controllers/coffee.controller.js");
  var router = require("express").Router();

  // Create a new Coffee
  router.post("/create", coffees.create);

  // Fill Coffee Machine
  router.post("/fill", coffees.fill);

  // Brew a cup of Joe
  router.post("/brew", coffees.brew);

  // Retrieve Coffees Machine Values
  router.get("/level", coffees.level);

  app.use("/", router);
};
