import { Router } from "express";
import { furnitureController } from "./controller/furnitureController.js";

export const routes = Router();

routes.use('/data/catalog', furnitureController);