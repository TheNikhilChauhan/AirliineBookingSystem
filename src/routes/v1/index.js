const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.delete("/city/:id", CityController.destroy);
router.get("/city", CityController.getAll);

router.post("/flights", FlightController.create);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);

module.exports = router;
