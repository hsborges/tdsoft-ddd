import { Router } from "express";

import reposRouter from "./controllers/repos/routes";

export default Router().use("/repos", reposRouter);
