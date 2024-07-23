const CrudRespository = require("./crud-repository");

class AirportRepository extends CrudRespository {
  constructor(model) {
    super(model);
  }
}

module.exports = AirportRepository;
