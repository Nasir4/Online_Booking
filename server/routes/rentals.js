const express = require("express");
const router = express.Router();
const Rental = require("../models/rental");

router.get("/", (req, res) => {
  Rental.find({}, (err, data) => {
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  const rentalId = req.params.id;
  Rental.findById(rentalId, (err, data) => {
    if (err) {
      res
        .status(422)
        .send({
          errors: [{ title: "Rental Errors", details: "Could not Find Rental" }]
        });
    }
    res.json(data);
  });
});

module.exports = router;
