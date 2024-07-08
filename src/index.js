import express from "express";
import { PORT } from "./config/serverConfig.js";

const setupAndStartServer = async () => {
  //create express object
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();
