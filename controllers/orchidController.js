const Orchids = require("../models/orchids");

class OrchidController {
  static index(req, res) {
    Orchids.find({}).then((orchids) => {
      res.render("orchidList", {
        title: "List of orchids",
        orchidData: orchids,
      });
    });
  }

  static create(req, res) {
    const orchid = new Orchids(req.body);
    orchid.save().then(() => {
      res.redirect("/orchids");
    });
  }

  static store(req, res) {
    res.send("store");
  }

  static show(req, res) {
    res.send("show");
  }

  static edit(req, res) {
    res.send("edit");
  }

  static update(req, res) {
    res.send("update");
  }

  static destroy(req, res) {
    Orchids.deleteOne({ _id: req.params.orchidId }).then(() =>
      res.redirect("/orchids")
    );
  }
}

module.exports = OrchidController;
