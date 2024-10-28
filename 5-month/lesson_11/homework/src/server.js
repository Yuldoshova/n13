import express from "express";
import bodyParser from "body-parser";
import { appConfig } from "./config/app.config.js";
import { routes } from "./routes/main.routes.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", routes)

app.listen(appConfig.port, appConfig.host, () => {
  console.log(`listening on ${appConfig.port}`);
});
