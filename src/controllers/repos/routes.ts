import { Router } from "express";
import controller from "./controller";

export default Router()
  .get("/find", controller.find)
  .get("/:id", controller.get);
