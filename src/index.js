const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig.js");
const ApiRoutes = require("./routes/index.js");

const db = require("./models/index");
const { Airplane } = require("./models/index.js");

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

const setupAndStartServer = async () => {
  //create express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
    await Airplane.create({
      model_number: "Bombardier CRJ",
    });
  });
};

setupAndStartServer();
