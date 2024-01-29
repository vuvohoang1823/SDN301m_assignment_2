const express = require("express");
const Orchids = require("../models/orchids");
const bodyParser = require("body-parser");

const orchidRouter = express.Router();
orchidRouter.use(bodyParser.json());

orchidRouter
  .route("/")
  .get((req, res, next) => {
    Orchids.find({}).then((orchids) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(orchids);
    });
  })
  .post((req, res) => {
    Orchids.create(req.body).then((orchid) => {
      res.json(orchid);
    });
  })
  .put((req, res) => {
    res.end("No support");
  })
  .delete((req, res) => {
    Orchids.deleteOne().then((resp) => {
      res.json(resp);
    });
  });

orchidRouter
  .route("/:orchidID")
  .get((req, res) => {
    Orchids.findById(req.params.orchidID).then((orchid) => {
      res.json(orchid);
    });
  })
  .put((req, res) => {
    Orchids.findByIdAndUpdate(
      req.params.orchidID,
      { $set: req.body },
      { new: true }
    ).then((orchid) => {
      res.json(orchid);
    });
  })
  .delete((req, res) => {
    Orchids.findByIdAndDelete(req.params.orchidID).then((resp) => {
      res.json(resp);
    });
  });

module.exports = orchidRouter;
