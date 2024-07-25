const { ClinetErrorCodes } = require("../utils/error-codes");

const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(ClinetErrorCodes.BAD_REQUEST).json({
      data: {},
      status: false,
      message: "Invalid request body for create flight",
      err: "Missing mandatory properties to create a flight",
    });
  }

  next();
};

module.exports = validateCreateFlight;
