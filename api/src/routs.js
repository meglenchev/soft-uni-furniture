import { Router } from "express";
import { furnitureController } from "./controller/furnitureController.js";
import { userController } from "./controller/userController.js";

export const routes = Router();

routes.use('/data/catalog', furnitureController);
routes.use('/users', userController);