const express = require("express");
const OrchidController = require("../controllers/orchidController");

const orchidRouter = express.Router();

orchidRouter
  .route("/")
  .get(OrchidController.index)
  .post(OrchidController.create);
orchidRouter.route("/delete/:orchidId").get(OrchidController.destroy);

module.exports = orchidRouter;
